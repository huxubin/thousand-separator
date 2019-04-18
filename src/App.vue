<template>
  <div id="app">
    <thousand-separator></thousand-separator>
  </div>
</template>

<script>
import ThousandSeparator from './components/ThousandSeparator.vue'

export default {
  name: 'app',
  components: {
    ThousandSeparator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
