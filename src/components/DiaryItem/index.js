import React from "react";
import { DiaryItemStyled } from "./styles";

export default function DiaryItem({ date, text, description }) {
  return (
    <DiaryItemStyled>
      <div className="date-time">{date}</div>
      <div className="text">{text}</div>
      <div className="descripton">{description}</div>
    </DiaryItemStyled>
  );
}
