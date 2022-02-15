import Link from "next/link";
import MuxPlayer from "@mux-elements/mux-player-react";
import { useRef, useState } from "react";

function MuxPlayerPage() {
  const mediaElRef = useRef(null);
  const [playbackId, setPlaybackId] = useState(
    "ddBx5002F02xe7ftFvTFkYBxEdQ2inQ2o029CMqu9A4IcY"
  );

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1>MuxPlayer Demo</h1>
      <div style={{ flexGrow: 1, flexShrink: 1, height: "400px" }}>
        <MuxPlayer
          ref={mediaElRef}
          // style={{ aspectRatio: "16 / 9" }}
          playbackId={playbackId}
          forwardSeekOffset={10}
          backwardSeekOffset={10}
          // onPlayerReady={() => console.log("ready!")}
          // debug
          muted
          autoPlay
          streamType={"live"}
          primaryColor="#ec407a"
          secondaryColor="#64b5f6"
          tertiaryColor="#b4004e"
          // startTime={12}
        />
      </div>
      <h3 className="title">
        <Link href="/">
          <a>Browse Elements</a>
        </Link>
      </h3>
    </div>
  );
}

export default MuxPlayerPage;