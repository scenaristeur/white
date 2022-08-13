<template>
  <div>
    <button v-on:click="clearDrawing">clear</button>
    <svg ref="drawingCanvas" version="1.1" viewBox="0 0 100 100" class="svg-content">
      <path v-for="(line, index) in item" :key="index" v-bind:d="pathFor(line)"></path>
    </svg>
  </div>
</template>
<script>
import { enableTouchScroll, disableTouchScroll } from "../utils/scrolling";
import * as Y from "yjs";
import mixin from "./mixin";
import * as d3 from "d3";

let renderPath = d3.svg
.line()
.x(function(d) {
  return d[0];
})
.y(function(d) {
  return d[1];
})
.interpolate("basis");

export default {
  mixins: [mixin],
  mounted() {
    this.bindCollab();
  },
  methods: {
    pathFor(line) {
      return (line && renderPath && renderPath(line.toArray())) || "";
    },

    bindCollab() {
      const drawing = this.item;
      const drawingCanvas = this.$refs.drawingCanvas;
      d3.select(drawingCanvas).call(
        d3.behavior
        .drag()
        .on("dragstart", dragstart)
        .on("drag", dragmove)
        .on("dragend", dragend)
      );

      var sharedLine = null;
      function dragstart(/*e*/) {
        // console.log(e)
        sharedLine = new Y.Array();
        drawing.insert(drawing.length, [sharedLine]);
        disableTouchScroll();
      }
      // After one dragged event is recognized, we ignore them for 33ms.
      var ignoreDrag = null;
      function dragmove(/*e*/) {
        // console.log(e)
        if (sharedLine != null && ignoreDrag == null) {
          ignoreDrag = window.setTimeout(function() {
            ignoreDrag = null;
          }, 33);
          sharedLine.push([d3.mouse(this)]);
        }
      }
      function dragend() {
        sharedLine = null;
        window.clearTimeout(ignoreDrag);
        ignoreDrag = null;
        enableTouchScroll();
      }
    },
    deleteLine(index) {
      this.value.delete(index);
    },
    clearDrawing() {
      const drawing = this.item;
      drawing.delete(0, drawing.length);
    }
  }
};
</script>
<style>
svg {
  border: solid 1px gray;
}
path {
  fill: none;
  stroke: blue;
  stroke-width: 1px;
  stroke-linejoin: round;
  stroke-linecap: round;
}
</style>
