import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

export class MusicPlayer {
  public readonly root: any;
  constructor(props: { id: string }) {
    const e = document.getElementById(props.id);
    if (!e) {
      return;
    }
    const options = {
      audioLists: [
        {
          name: "姬霓太美",
          musicSrc: "",
          cover: "",
        },
        {
          name: "姬霓太美",
          musicSrc: "",
          cover: "",
        },
        {
          name: "姬霓太美",
          musicSrc: "",
          cover: "",
        },
      ],
    };
    this.root = ReactDOM.createRoot(e);
    this.root.render(
      <>
        <ReactJkMusicPlayer {...options} />
      </>
    );
  }
}
