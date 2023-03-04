import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme?.colors?.dark["500"]};
  display: flex;
  padding: 56px 0;
  margin: 64px 0 0 0;

  a {
    color: ${({ theme }) => theme?.colors?.light};
    margin: 0 45px 0 0;
  }
`;
