import styled from "styled-components";

export const EntryItemStyled = styled.div`
  background-color: ${({ theme }) => theme?.colors?.dark["600"]};
  border: 24px solid ${({ theme }) => theme?.colors?.primary["300"]};
  position: relative;
  z-index: 1;

  > .inner {
    padding-bottom: 100%;

    > .image {
      position: absolute;
      z-index: 1;
      background-size: cover;
      mix-blend-mode: luminosity;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      opacity: 0.25;
    }

    > .content {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 0;
      right: 0;
      transform: translate(0, -50%);
      text-align: center;

      > .label {
        font-weight: 400;
        font-size: 25px;
        line-height: 30px;
        letter-spacing: 0.13px;
        text-transform: uppercase;
        color: ${({ theme }) => theme?.colors?.primary["300"]};
        margin: 0 0 11px;
      }

      > .text {
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        font-weight: 300;
        color: ${({ theme }) => theme?.colors?.light};
        background-color: ${({ theme }) => theme?.colors?.primary["400"]};
        min-width: 160px;
        padding: 1px 0 3px;
      }
    }
  }
`;
