import React from "react";
import { RecommendItemStyled } from "./styles";

export default function RecommendItem({ text, subText, ...restProps }) {
  return (
    <RecommendItemStyled {...restProps}>
      <div className="text">{text}</div>
      <div className="sub-text">{subText}</div>
    </RecommendItemStyled>
  );
}
