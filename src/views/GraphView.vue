<template>
  <div class="graph-view">
    <div id="graph" width="100px" ref="graph">Loading graph...</div>
    {{cameraPosition}}
  </div>
</template>

<script>
export default {
  name: 'GraphView',
  created(){
    const N = 300;
    let  nodes= [...Array(N).keys()].map(i => ({ id: i }))
    let links =  [...Array(N).keys()]
    .filter(id => id)
    .map(id => ({
      source: id,
      target: Math.round(Math.random() * (id-1))
    }))

    this.$store.commit('core/setNodes', nodes)
    this.$store.commit('core/setLinks', links)
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
