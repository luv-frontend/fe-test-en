import React from "react";
import { FoodItemStyled } from "./styles";

export default function FoodItem({ label, thumbnail }) {
  return (
    <FoodItemStyled
      style={{
        backgroundImage: `url(${thumbnail})`,
      }}
    >
      {label && <div className="label">{label}</div>}
    </FoodItemStyled>
  );
}
