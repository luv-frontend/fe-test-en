import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme?.colors?.dark["500"]};

  .inner {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 144px;
    display: block;
    flex-shrink: 0;
  }
`;
export const NavStyled = styled.nav`
  flex-grow: 1;

  ul {
    display: flex;
    justify-content: flex-end;
  }

  a {
    color: ${({ theme }) => theme?.colors?.light};
    display: flex;
    align-items: center;
    padding: 12px 16px;
    min-width: 160px;

    .sprite {
      margin: 0 8px 0 0;
    }
  }
`;
export const HamburgerStyled = styled.button`
  margin: 0 0 0 19px;
  background: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  border: 0;
  cursor: pointer;
`;
