export default {
  namespaced: true,
  state: {
    email: 'teste',
    contatos: [
      { id: 1, nome: 'Joãozinho', celular: '(47) 99988 - 9242', cidade: 'Blumenau', sexo: 'Masculino' },
      { id: 2, nome: 'Frederico', celular: '(47) 99988 - 9242', cidade: 'Timbó', sexo: 'Masculino' },
      { id: 3, nome: 'Amanda', celular: '(47) 99988 - 9242', cidade: 'Indaial', sexo: 'Feminino' },
      { id: 4, nome: 'Brito', celular: '(47) 99988 - 9242', cidade: 'Itajaí', sexo: 'Masculino' },
      { id: 5, nome: 'Carlos', celular: '(47) 99988 - 9242', cidade: 'Gaspar', sexo: 'Masculino' }
    ]
  },
  mutations: {
    setEmail(state, payload) {
      state.email = payload;
    },
    addContact(state, nome) {
      const newContactId = state.contatos[state.contatos.length - 1].id + 1;
      const newContact = { id: newContactId, nome };
      state.contatos.push(newContact);
    },
    deleteContact(state, index) {
      state.contatos.splice(index, 1);
    }
  },
  getters: {
    totalContacts(state, getters, rootState) {
      console.log('getters: ', getters);
      console.log('rootState: ', rootState);
      return state.contatos.length;
    },
    contacts(state) {
      return state.contatos;
    }
  },
  actions: {
    addContact(context, payload) {
      setTimeout(() => {
        console.log(context, payload);
        context.commit('addContact', payload);
      }, 1000);
    },
    // dessa forma torna esta action global mesmo que
    // possui um namespace definido...
    // deleteContact: {
    //   root: true,
    //   handler(context, index) {
    //     if (confirm('Deseja realmente excluir este contato?')) {
    //       context.commit('deleteContact', index);
    //     }
    //   }
    // },
    deleteContact(context, index) {
      if (confirm('Deseja realmente excluir este contato?')) {
        context.commit('deleteContact', index);
      }
    }
  }
}