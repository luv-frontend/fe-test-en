import React from "react";
import styled from "styled-components";

const ButtonTransitStyled = styled.div`
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  width: 116px;
  height: 134px;
  background: ${({ theme }) =>
    `linear-gradient(155.89deg, ${theme?.colors?.primary["300"]} 8.26%, ${theme?.colors?.primary["400"]} 91.18%)`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  span {
    display: block;
    font-size: 20px;
    line-height: 24px;
    color: ${({ theme }) => theme?.colors?.light};
  }
`;

export default function ButtonTransit({ label, icon, ...restProps }) {
  return (
    <ButtonTransitStyled {...restProps}>
      {icon}
      <span>{label}</span>
    </ButtonTransitStyled>
  );
}
