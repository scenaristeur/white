<template>
  <div id="app">
    <GraphView />
    <ListExample/>
    wss 3
  </div>
</template>

<script>
import ListExample from "./YListExample";

export default {
  name: "App",
  components: {
    ListExample,
    'GraphView': ()=>import('@/views/GraphView'),
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
