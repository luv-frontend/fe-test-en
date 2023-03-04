import styled from "styled-components";
import { rgba } from "polished";

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme?.colors?.dark["500"]};

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 144px;
    display: block;
    flex-shrink: 0;
  }
`;
export const NavStyled = styled.nav`
  flex-grow: 1;
  display: none;

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

  @media screen and (min-width: 992px) {
    display: block;
  }
`;
export const HamburgerStyled = styled.div`
  position: relative;
  z-index: 10;
  padding: 0 16px 0 0;

  .button {
    margin: 0 0 0 19px;
    background: 0;
    padding: 0;
    width: 32px;
    height: 32px;
    border: 0;
    cursor: pointer;
  }

  .draw {
    width: 280px;
    background-color: ${({ theme }) => theme?.colors?.gray};
    position: absolute;
    z-index: 1;
    right: 0;
    top: 33px;

    li {
      border-bottom: 1px solid
        ${({ theme }) => rgba(theme?.colors?.dark["600"], 0.25)};
      border-top: 1px solid ${({ theme }) => rgba(theme?.colors?.light, 0.15)};

      &:first-child {
        border-top: 0;
      }
    }

    a {
      padding: 23px 0 23px 32px;
      display: block;
      text-align: left;
      color: ${({ theme }) => theme?.colors?.light};
    }
  }
`;
