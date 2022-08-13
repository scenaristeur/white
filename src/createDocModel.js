import Vue from "vue";
import { WebsocketProvider } from "y-websocket";
import { WebrtcProvider } from 'y-webrtc'
import * as Y from "yjs";

const getDoc = id => {
  const ydoc = new Y.Doc();
  const provider = new WebsocketProvider(`wss:yjs-demos.now.sh`, id, ydoc);
  // const provider = new WebsocketProvider(`wss:yjs-demos.now.sh`, id, ydoc);
  const provider_webRtc = new WebrtcProvider('id', ydoc)

  // const provider = new WebsocketProvider(`wss://demos.yjs.dev`, id, ydoc);
  // const provider = new WebsocketProvider(`ws://demos.yjs.dev`, id, ydoc);


  // import { WebsocketProvider } from 'y-websocket'
  //
  // // connect to the public demo server (not in production!)
  // const provider = new WebsocketProvider(
  //   'wss://demos.yjs.dev', 'quill-demo-room', ydoc
  // )

  console.log("provider", provider, provider_webRtc)
  return ydoc;
};

export default function createDocModel(id) {
  const doc = getDoc(id);
  return new Vue({
    data() {
      return {
        doc,
        content: null
      };
    }
  });
}
