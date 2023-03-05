import { map } from "lodash";
import React from "react";
import { ColumnItemStyled } from "./styles";

export default function ColumnItem({ thumbnail, label, description, tags }) {
  return (
    <ColumnItemStyled>
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      >
        <div className="label">{label}</div>
      </div>
      <p className="description">{description}</p>
      <div className="tags">
        {map(tags, (tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </ColumnItemStyled>
  );
}
