<template>
  <div id="flashMessage" v-if="GStore.flashMessage">
    {{ GStore.flashMessage }}
  </div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {
  inject: ["GStore"],
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0db31b;
  background-color: rgb(239, 255, 208);
}

nav {
  padding: 30px;
  border-style: solid;
  border-color: rgb(59, 186, 116);
  border-radius: 25px;
  background-color: rgb(59, 186, 116);
  border-style: outset;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #aeff00;
}

@keyframes yellowfade {
  from {
    background: rgb(255, 0, 0);
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
</style>
