import Link from "next/link";
import { HamburgerStyled, HeaderStyled, NavStyled } from "./styles";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="container">
        <div className="inner">
          <a className="logo">
            <img src={"/logo.png"} alt="logo" />
          </a>
          <NavStyled>
            <ul>
              <li>
                <Link href={"#"}>
                  <div class="sprite icon_memo" /> 自分の記録
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <div class="sprite icon_challenge" /> チャレンジ
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <div class="sprite icon_info" /> お知らせ
                </Link>
              </li>
            </ul>
          </NavStyled>
          <HamburgerStyled>
            <div class="sprite icon_menu" />
            <ul className="draw">
              <li className="draw__item">
                <Link>自分の記録</Link>
              </li>
              <li className="draw__item">
                <Link>体重グラフ</Link>
              </li>
              <li className="draw__item">
                <Link>目標</Link>
              </li>
              <li className="draw__item">
                <Link>選択中のコース</Link>
              </li>
              <li className="draw__item">
                <Link>コラム一覧</Link>
              </li>
              <li className="draw__item">
                <Link>設定</Link>
              </li>
            </ul>
          </HamburgerStyled>
        </div>
      </div>
    </HeaderStyled>
  );
}
