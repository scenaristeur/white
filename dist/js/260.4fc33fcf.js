"use strict";(self["webpackChunkwhite"]=self["webpackChunkwhite"]||[]).push([[260],{1260:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"graph-view"},[e("ShowPositions",{attrs:{brains:t.contentArray}}),e("div",{ref:"graph",attrs:{id:"graph",width:"100px"}},[t._v("Loading graph...")]),t._v(" "+t._s(t.cameraPosition)+" ")],1)},o=[],a=s(3741),n={name:"GraphView",components:{ShowPositions:()=>s.e(751).then(s.bind(s,3751))},data(){return{contentArray:null}},created(){const t=(0,a.Z)("drawing");console.log(t);const e=t.doc;this.$store.commit("core/setAwareness",t.awareness);const s=e.getArray("drawing");this.contentArray=s.toArray(),s.observe((t=>{console.log("event",t,t.changes.delta),this.contentArray=s.toArray(),this.$store.commit("core/onContentArrayChange",this.contentArray)}));const r=10;let o=[...Array(r).keys()].map((t=>({id:t,name:t,color:this.$store.state.core.user.color}))),n=[...Array(r).keys()].filter((t=>t)).map((t=>({source:t,target:Math.round(Math.random()*(t-1))})));this.$store.commit("core/setNodes",o),this.$store.commit("core/setLinks",n)},mounted(){this.$graphInit({domElement:this.$refs.graph})},methods:{update(){if(void 0!=this.graph){let t=this.nodes.map((t=>({...t}))),e=this.links.map((t=>({...t})));this.graph.graphData({nodes:t,links:e}),console.log(this.graph.graphData())}}},watch:{nodes(){console.log("nodes",this.nodes),this.update()},links(){this.update()},graph(){this.update()}},computed:{nodes(){return this.$store.state.core.nodes},links(){return this.$store.state.core.links},graph(){return this.$store.state.core.graph},cameraPosition(){return this.$store.state.core.cameraPosition}}},i=n,h=s(1001),c=(0,h.Z)(i,r,o,!1,null,null,null),d=c.exports}}]);
//# sourceMappingURL=260.4fc33fcf.js.map