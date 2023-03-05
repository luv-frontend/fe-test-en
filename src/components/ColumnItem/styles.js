import styled from "styled-components";

export const ColumnItemStyled = styled.div`
  .thumbnail {
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
    padding-bottom: 100%;
  }

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

  .description {
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.075px;
    color: ${({ theme }) => theme?.colors?.dark["500"]};
    margin: 5px 0 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .tags {
    font-size: 12px;
    line-height: 22px;
    letter-spacing: 0.06px;
    font-weight: 300;
    color: ${({ theme }) => theme?.colors?.primary["400"]};

    > span {
      margin: 0 5px 0 0;
    }
  }
`;
