import React from "react";
import { EntryItemStyled } from "./styles";

export default function EntryItem({ label, text, thumbnail }) {
  return (
    <EntryItemStyled>
      <div className="inner">
        <div
          className="image"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
        <div className="content">
          <div className="label">{label}</div>
          <div className="text">{text}</div>
        </div>
      </div>
    </EntryItemStyled>
  );
}
