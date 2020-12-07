<template>
  <div id="App">
    <router-view name="toolbar"></router-view>
    <div class="container-fluid">
      <div class="row">
        <router-view name="navbar"></router-view>    
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <transition 

            mode="out-in"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut">
            <router-view class="m-12"/>
          </transition>
        </main>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>

.m-12 {
  margin: 12px;
}
</style>
