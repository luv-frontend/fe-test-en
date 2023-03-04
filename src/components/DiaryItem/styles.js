import styled from "styled-components";

export const DiaryItemStyled = styled.div`
  background-color: ${({ theme }) => theme?.colors?.light};
  border: 2px solid ${({ theme }) => theme?.colors?.gray};
  padding: 16px;

  .date-time {
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    letter-spacing: 0.09px;
    color: ${({ theme }) => theme?.colors?.dark["500"]};
    white-space: pre-line;
    margin: 0 0 8px;
  }

  .text {
    font-size: 12px;
    line-height: 17px;
    font-weight: 300;
    letter-spacing: 0.06px;
    color: ${({ theme }) => theme?.colors?.dark["500"]};
    white-space: pre-line;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
