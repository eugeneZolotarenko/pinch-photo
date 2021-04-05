import React from "react";
import "./App.css";
import { useImage } from "./hooks/useImage";

const App: React.FC = () => {
  const image = useImage();

  function onTouchStart(e: any) {
    console.log(e);
  }

  function onTouchMove(e: any) {
    console.log(e);
  }

  function onTouchEnd(e: any) {
    console.log(e);
  }

  return (
    <main className="App">
      <div
        className="image-wrapper"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={image.url}
          alt={image.alt}
          className="image"
          style={{ transform: "scale(1.2)", transformOrigin: "left top" }}
        />
      </div>
    </main>
  );
};

export default App;
