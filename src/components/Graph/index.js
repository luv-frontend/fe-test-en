import React from "react";

export default function Graph(props) {
  // can use https://canvasjs.com/

  return (
    <div
      {...props}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/photo/mainGraph.png" alt="graph demo" />
    </div>
  );
}
