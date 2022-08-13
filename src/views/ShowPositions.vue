<template>
  <div class="show-pos">
    <hr>
    <div v-for="(brain,i) in brains" :key="i">
      brain : {{brain}} , id: {{ brain._item.id}}, getId: {{brain._item.id.clock - brain._item.id.client}}<br>
      <ul>
        <li v-for="(neurone, j) in brain" :key="j">
          {{neurone}}<br>
        </li>
      </ul>
      <hr>
    </div>
    <hr><hr>
  </div>
</template>

<script>
export default {

  name: 'ShowPositions',
  props: ['brains']

}
</script>

<style lang="css" scoped>
.show-pos {

}
</style>
