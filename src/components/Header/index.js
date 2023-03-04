// import Image from "next/image";

import Link from "next/link";
import { HamburgerStyled, HeaderStyled, NavStyled } from "./styles";

export default function Header() {
  return (
    <HeaderStyled>
      <a className="logo">
        <img src={"https://placehold.it/144x64"} width={144} height={64} />
      </a>
      <NavStyled>
        <ul>
          <li>
            <Link href={"#"}>
              <img src="#" /> 自分の記録
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <img src="#" /> チャレンジ
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <img src="#" /> お知らせ
            </Link>
          </li>
        </ul>
      </NavStyled>
      <HamburgerStyled>
        <img />
      </HamburgerStyled>
    </HeaderStyled>
  );
}
