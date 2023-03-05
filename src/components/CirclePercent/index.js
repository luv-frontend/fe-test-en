import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import { CirclePercentStyled } from "./styles";
import "react-circular-progressbar/dist/styles.css";

export default function CirclePercent({ thumbnail, text, percentage }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <CirclePercentStyled style={{ backgroundImage: `url(${thumbnail})` }}>
      {ready && (
        <>
          <CircularProgressbar
            className="circle-bar"
            strokeWidth={2}
            value={percentage}
            styles={{
              trail: {
                stroke: "transparent",
              },
              path: {
                stroke: "#fff",
              },
              text: {
                stroke: "transparent",
                fill: "#fff",
              },
            }}
          />
          <div className="text">
            {text}
            <span>{percentage}%</span>
          </div>
        </>
      )}
    </CirclePercentStyled>
  );
}
