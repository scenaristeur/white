<template>
  <div class="graph-view">
    <!-- e{{contentArray}}r -->
    <ShowPositions :brains="contentArray" />
    <div id="graph" width="100px" ref="graph">Loading graph...</div>
    {{cameraPosition}}
  </div>
</template>

<script>
import createDocModel from "../createDocModel";
// import * as Y from "yjs";

export default {
  name: 'GraphView',
  components: {
    'ShowPositions': ()=>import('@/views/ShowPositions'),
  },
  data(){
    return{
      contentArray: null
    }
  },
  created(){


    const model = createDocModel("drawing");
    console.log(model)
    const doc = model.doc;
    // let providers = model.providers
    //console.log("providers",providers)
    this.$store.commit('core/setAwareness', model.awareness)
    const content = doc.getArray("drawing");
    this.contentArray = content.toArray();
    content.observe(event => {
      console.log("event", event, event.changes.delta);
      this.contentArray = content.toArray();
      this.$store.commit('core/onContentArrayChange', this.contentArray)
    });

    const N = 10;
    let  nodes= [...Array(N).keys()].map(i => ({ id: i, name: i, color: this.$store.state.core.user.color }))
    let links =  [...Array(N).keys()]
    .filter(id => id)
    .map(id => ({
      source: id,
      target: Math.round(Math.random() * (id-1))
    }))

    this.$store.commit('core/setNodes', nodes)
    this.$store.commit('core/setLinks', links)

    // let brain = new Y.Array();
    // console.log("content length", content.length)
    // content.insert(content.length, [brain]);
    // this.$store.state.core.nodes.forEach((n) => {
    //   brain.push(n)
    // });





  },
  mounted(){




    this.$graphInit({domElement: this.$refs.graph})
  },
  methods:{
    update(){
      if (this.graph != undefined){
        let nodes = this.nodes.map(a => {return {...a}})
        let links = this.links.map(a => {return {...a}})
        this.graph.graphData({nodes: nodes, links: links})
        console.log(this.graph.graphData())
      }
    }
  },
  watch:{
    nodes(){
      console.log("nodes",this.nodes)
      this.update()
    },
    links(){
      this.update()
    },
    graph(){
      this.update()
    }
  },
  computed: {
    nodes() {
      return this.$store.state.core.nodes
    },
    links() {
      return this.$store.state.core.links
    },
    graph() {
      return this.$store.state.core.graph
    },
    cameraPosition() {
      return this.$store.state.core.cameraPosition
    }
  },
}
</script>

<style>
.node-label {
  font-size: 12px;
  padding: 1px 4px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.5);
  user-select: none;
}
</style>
