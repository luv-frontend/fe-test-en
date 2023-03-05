import styled from "styled-components";

export const CirclePercentStyled = styled.div`
  background-size: cover;
  min-height: 200px;
  position: relative;
  background: ${({ theme }) =>
    `linear-gradient(225deg, ${theme?.colors?.primary["300"]} 0%, ${theme?.colors?.primary["400"]} 100%)`};
  mix-blend-mode: soft-light;

  .circle-bar {
    width: 180px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${({ theme }) => theme?.colors?.light};
    text-shadow: 0px 0px 6px #fca500;

    > span {
      font-size: 25px;
      line-height: 30px;
      margin: 0 0 0 4px;
    }
  }
`;
