import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 14px 4px;
  color: ${({ theme }) => theme?.colors?.light};
  background: ${({ theme }) =>
    `linear-gradient(32.95deg, ${theme?.colors?.primary["300"]} 8.75%, ${theme?.colors?.primary["400"]} 86.64%)`};
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  min-width: 296px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  box-shadow: 0;
`;

export default function Button({ children, style, ...restProps }) {
  return (
    <ButtonStyled {...restProps} style={style}>
      {children}
    </ButtonStyled>
  );
}
