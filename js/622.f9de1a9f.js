"use strict";(self["webpackChunkwhite"]=self["webpackChunkwhite"]||[]).push([[622],{3622:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"graph-view"},[e("div",{ref:"graph",attrs:{id:"graph",width:"100px"}},[t._v("Loading graph...")]),t._v(" "+t._s(t.cameraPosition)+" ")])},a=[],i={name:"GraphView",created(){const t=300;let e=[...Array(t).keys()].map((t=>({id:t}))),s=[...Array(t).keys()].filter((t=>t)).map((t=>({source:t,target:Math.round(Math.random()*(t-1))})));this.$store.commit("core/setNodes",e),this.$store.commit("core/setLinks",s)},mounted(){this.$graphInit({domElement:this.$refs.graph})},methods:{update(){if(void 0!=this.graph){let t=this.nodes.map((t=>({...t}))),e=this.links.map((t=>({...t})));this.graph.graphData({nodes:t,links:e}),console.log(this.graph.graphData())}}},watch:{nodes(){this.update()},links(){this.update()},graph(){this.update()}},computed:{nodes(){return this.$store.state.core.nodes},links(){return this.$store.state.core.links},graph(){return this.$store.state.core.graph},cameraPosition(){return this.$store.state.core.cameraPosition}}},o=i,h=s(1001),n=(0,h.Z)(o,r,a,!1,null,null,null),p=n.exports}}]);
//# sourceMappingURL=622.f9de1a9f.js.map