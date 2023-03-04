import styled from "styled-components";

export const ExcerciseStyled = styled.div`
  background-color: ${({ theme }) => theme?.colors?.dark["500"]};
  padding: 16px 24px;

  > .heading {
    color: ${({ theme }) => theme?.colors?.light};
    display: flex;
    align-items: center;
    margin: 0 0 4px 0;

    > .label {
      font-size: 15px;
      line-height: 18px;
      font-weight: 400;
      text-transform: uppercase;
      white-space: pre-line;
      margin: 0 12px 0 0;
    }

    > .date {
      font-size: 22px;
      line-height: 27px;
      font-weight: 400;
    }
  }

  > .outer-content {
    max-height: 192px;
    overflow: auto;

    > ul {
      overflow: auto;

      li {
        padding: 8px 0 2px;
        border-bottom: 1px solid ${({ theme }) => theme?.colors?.gray};
        z-index: 1;
        position: relative;

        &:last-child {
          border-bottom: 0;
        }
      }

      .label {
        color: ${({ theme }) => theme?.colors?.light};
        font-size: 15px;
        line-height: 22px;
        font-weight: 300;
        letter-spacing: 0.08px;
      }

      .text {
        color: ${({ theme }) => theme?.colors?.primary["300"]};
        font-size: 15px;
        line-height: 18px;
        font-weight: 400;
        letter-spacing: 0.08px;
      }

      .time {
        position: absolute;
        top: 8px;
        right: 16px;
        color: ${({ theme }) => theme?.colors?.primary["300"]};
        font-size: 18px;
        line-height: 22px;
        font-weight: 400;
        letter-spacing: 0.09px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    > .outer-content > ul {
      column-count: 2;

      li {
        break-inside: avoid;
      }
    }
  }
`;
