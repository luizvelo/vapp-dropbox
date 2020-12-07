<template>
  <div class="container mt-24">
    <h3 class="text-primary">Select files(s)</h3>
    <input type="file" id="file-upload" />
    <button v-on:click="uploadFile">Upload</button>
    <h5 style="margin-top: 24px">File URL: {{ fileUrl }}</h5>


    <h2 id="results"></h2>
  </div>
</template>

<script>
import * as Dropbox from "dropbox";
const list = [];

export default {
  name: "DropboxUpload",
  data() {
    return {
      person: {
        id: 1,
        name: "",
        phone: null,
        active: null,
      },
      list,
      text: "Mensagem padrão",
      accessToken:
        "XnZOShukF_QAAAAAAAAAAakW3IXn-TSyawQb1fbr0DdDeAY1o2416VhYz5TOEjq_",
      fileUrl: "",
    };
  },
  methods: {
    dropbox() {
      return new Dropbox.Dropbox({
        accessToken: this.accessToken,
      });
    },
    /**
     * Método para efetuar o upload do arquivo e
     * retornar a URL pública de acesso do arquivo
     */
    async uploadFile() {
      const UPLOAD_FILE_SIZE_LIMIT = 150 * 1024 * 1024;
      const fileInput = document.getElementById("file-upload");
      const file = fileInput.files[0];

      // O arquivo é menor que 150 Mb - use a API filesUpload
      if (file.size < UPLOAD_FILE_SIZE_LIMIT) {
        try {
          const uploadRes = await this.dropbox().filesUpload({
            path: "/" + file.name,
            contents: file,
          });

          // cria um link compartilhado para visualizar o arquivo e efetuar o download
          const shareRes = await this.dropbox().sharingCreateSharedLinkWithSettings(
            { path: uploadRes.result.path_display }
          );
          this.fileUrl = shareRes.result.url;
        } catch (error) {
          console.log(error);
        }
      } else {
        // O arquivo tem mais de 150 Mb - use a API filesUploadSession *
        // 8Mb - Dropbox JavaScript API suggested max file / chunk size
        const maxBlob = 8 * 1000 * 1000;
        const workItems = [];
        let offset = 0;

        while (offset < file.size) {
          const chunkSize = Math.min(maxBlob, file.size - offset);
          workItems.push(file.slice(offset, offset + chunkSize));
          offset += chunkSize;
        }

        const task = workItems.reduce((acc, blob, idx, items) => {
          if (idx == 0) {
            // Iniciando o upload de várias partes do arquivo
            return acc.then(function () {
              return this.dropbox()
                .filesUploadSessionStart({ close: false, contents: blob })
                .then((response) => response.session_id);
            });
          } else if (idx < items.length - 1) {
            // Anexar parte à sessão de upload
            return acc.then(function (sessionId) {
              var cursor = { session_id: sessionId, offset: idx * maxBlob };
              return this.dropbox()
                .filesUploadSessionAppendV2({
                  cursor: cursor,
                  close: false,
                  contents: blob,
                })
                .then(() => sessionId);
            });
          } else {
            // Último bloco de dados, fechar sessão
            return acc.then(function (sessionId) {
              var cursor = {
                session_id: sessionId,
                offset: file.size - blob.size,
              };
              var commit = {
                path: "/" + file.name,
                mode: "add",
                autorename: true,
                mute: false,
              };
              return this.dropbox().filesUploadSessionFinish({
                cursor: cursor,
                commit: commit,
                contents: blob,
              });
            });
          }
        }, Promise.resolve());

        task
          .then(function (result) {
            alert("file uploaded");
            console.log(result);
          })
          .catch(function (error) {
            console.error(error);
          });
      }
      return false;
    },
  },
};
</script>

<style scoped>
.mt-24  {
  margin-top: 24px;
}
</style>