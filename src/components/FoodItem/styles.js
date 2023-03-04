import styled from "styled-components";

export const FoodItemStyled = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  padding-bottom: 100%;

  .label {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 15px;
    line-height: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme?.colors?.light};
    background-color: ${({ theme }) => theme?.colors?.primary["300"]};
    padding: 7px 8px;
  }
`;
