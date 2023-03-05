const { default: styled } = require("styled-components");

export const RecommendItemStyled = styled.div`
  background-color: ${({ theme }) => theme?.colors?.dark["600"]};
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 144px;
  min-width: 216px;

  > .text {
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    color: ${({ theme }) => theme?.colors?.primary["300"]};
    text-align: center;
  }

  > .sub-text {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    color: ${({ theme }) => theme?.colors?.light};
    position: relative;
    z-index: 1;
    margin: 18px 0 0;

    &:before {
      content: "";
      width: 56px;
      border-top: 1px solid ${({ theme }) => theme?.colors?.light};
      display: block;
      position: absolute;
      top: -9px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
`;
