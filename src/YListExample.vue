
<template>
  <div>
    <content-block type="AllDrawing" v-bind:item="content"/>
    <!-- <content-block v-for="item in contentArray" v-bind:key="getId(item)" v-bind:item="item"/> -->
  </div>
</template>

<script>
import createDocModel from "./createDocModel";
import ContentBlock from "./ContentBlock";
import Vue from "vue";
Vue.component("content-block", ContentBlock);
export default {
  components: { ContentBlock },
  data() {
    const model = createDocModel("drawing");
    console.log(model)
    const doc = model.doc;
    // let providers = model.providers
    //console.log("providers",providers)
    this.$store.commit('core/setAwareness', model.awareness)
    const content = doc.getArray("drawing");
    const contentArray = content.toArray();
    content.observe(event => {
      console.log("event", event, event.changes.delta);
      this.contentArray = content.toArray();
    });
    return {
      doc,
      content,
      contentArray
    };
  },
  methods: {
    getId(item) {
      const id = item._item.id;
      return `${id.clock}-${id.client}`;
    }
  }
};
</script>

<style>
</style>
