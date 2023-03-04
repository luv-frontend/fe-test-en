import { isEmpty, map } from "lodash";
import React from "react";
import { ExcerciseStyled } from "./styles";

export default function Excercise({
  label = "My\nExcercise",
  date = "",
  items,
}) {
  if (isEmpty(items)) {
    return null;
  }

  return (
    <ExcerciseStyled>
      <div className="heading">
        <div className="label">{label}</div>
        <div className="date">{date}</div>
      </div>
      <div className="outer-content">
        <ul>
          {map(items, ({ id, label, text, time }) => (
            <li key={id}>
              <div className="label">{label}</div>
              <div className="text">{text}</div>
              <div className="time">{time}</div>
            </li>
          ))}
        </ul>
      </div>
    </ExcerciseStyled>
  );
}
