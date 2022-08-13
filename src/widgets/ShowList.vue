<template>
  <div>
    <h2>List</h2>
    <content-block
      v-for="child in item"
      v-bind:key="getId(child)"
      v-bind:item="child"
      v-bind:parent="item"
      removable
    />
  </div>
</template>

<script>
import mixin from "./mixin";
export default {
  mixins: [mixin]
};
</script>

<style>
</style>
