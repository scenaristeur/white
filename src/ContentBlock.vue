<template>
  <div>
    <h2>Content Block</h2>
    <button v-if="parent" v-on:click="removeFromParent">x</button>
    <div>size: {{item.length}}</div>
    <component v-bind:is="blockComponent" v-bind:item="item"></component>
  </div>
</template>
<script>
import * as widgets from "./widgets";
import mixin from "./widgets/mixin";
export default {
  name: "content-block",
  mixins: [mixin],
  // props: ["item", "type"],
  data() {
    return {};
  },
  computed: {
    blockComponent() {
      const type = this.type;
      if (type) {
        const widget = widgets[type];
        if (widget) return widget;
      }
      return widgets.JsonWidget;
    }
  }
};
</script>
