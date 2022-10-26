<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/artworks">Artworks</router-link> |
    <router-link to="/artwork-add">Nouvelle Oeuvre</router-link> |
    <router-link to="/tutorials" class="nav-link">Tutorials</router-link> |
    <router-link to="/add" class="nav-link">Add Tutorial</router-link>
  </nav>
  <router-view/>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
