import Vue from "vue";
import { WebsocketProvider } from "y-websocket";
// import { WebrtcProvider } from 'y-webrtc'
import * as Y from "yjs";
let awareness = {}

const getDoc = id => {
  const ydoc = new Y.Doc();
  const providerWebsocket = new WebsocketProvider(`wss:yjs-demos.now.sh`, id, ydoc);
  // const provider = new WebsocketProvider(`wss:yjs-demos.now.sh`, id, ydoc);
  // const providerWebrtc = new WebrtcProvider(id, ydoc)
// providers.push(providerWebsocket)
// providers.push(providerWebrtc)
awareness.websocket = providerWebsocket.awareness
// awareness.webrtc = providerWebrtc.awareness
  // const provider = new WebsocketProvider(`wss://demos.yjs.dev`, id, ydoc);
  // const provider = new WebsocketProvider(`ws://demos.yjs.dev`, id, ydoc);
  // const awarnessWebsocket = providerWebsocket.awareness
  // const awarenessWebrtc = providerWebrtc.awareness
  // //
  // Vue.prototype.$store.commit('core/setAwarness', {awarnessWebsocket: awarnessWebsocket, awarenessWebrtc: awarenessWebrtc})
  // // import { WebsocketProvider } from 'y-websocket'
  // //
  // // // connect to the public demo server (not in production!)
  // // const provider = new WebsocketProvider(
  // //   'wss://demos.yjs.dev', 'quill-demo-room', ydoc
  // // )
  //
  // console.log("provider", providerWebsocket, providerWebrtc)
  console.log("ydoc",ydoc)
  return ydoc;
};

export default function createDocModel(id) {
  const doc = getDoc(id);
  return new Vue({
    data() {
      return {
        doc,
        content: null,
        awareness
      };
    }
  });
}
