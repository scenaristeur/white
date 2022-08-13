<template>
  <pre>{{ item.toJSON() }}</pre>
</template>
<script>
import mixin from "./mixin";
export default {
  mixins: [mixin]
};
</script>
