import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme?.colors?.dark["500"]};
  padding: 56px 0;
  margin: 64px 0 0 0;

  a {
    display: block;
    color: ${({ theme }) => theme?.colors?.light};
    margin: 0 45px 0 0;
  }

  @media screen and (min-width: 768px) {
    display: flex;

    a {
      display: inline-block;
    }
  }
`;
