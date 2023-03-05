import Link from "next/link";
import { useToggle } from "@/hooks/useToggle";
import { HamburgerStyled, HeaderStyled, NavStyled } from "./styles";

export default function Header() {
  const { isOpen, toggle, ref } = useToggle(false);

  return (
    <HeaderStyled>
      <div className="container">
        <div className="inner">
          <Link href={"/"} className="logo">
            <img src={"/logo.png"} alt="logo" />
          </Link>
          <NavStyled>
            <ul>
              <li>
                <Link href={"/my-record"}>
                  <div className="sprite icon_memo" /> 自分の記録
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <div className="sprite icon_challenge" /> チャレンジ
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <div className="sprite icon_info" /> お知らせ
                </Link>
              </li>
            </ul>
          </NavStyled>
          <HamburgerStyled>
            <button className="button" onClick={toggle}>
              <div
                className={`sprite ${isOpen ? "icon_close" : "icon_menu"}`}
              />
            </button>
            {isOpen && (
              <ul className="draw" ref={ref}>
                <li className="draw__item">
                  <Link href={"/my-record"}>自分の記録</Link>
                </li>
                <li className="draw__item">
                  <Link href={"#"}>体重グラフ</Link>
                </li>
                <li className="draw__item">
                  <Link href={"#"}>目標</Link>
                </li>
                <li className="draw__item">
                  <Link href={"#"}>選択中のコース</Link>
                </li>
                <li className="draw__item">
                  <Link href={"/column"}>コラム一覧</Link>
                </li>
                <li className="draw__item">
                  <Link href={"#"}>設定</Link>
                </li>
              </ul>
            )}
          </HamburgerStyled>
        </div>
      </div>
    </HeaderStyled>
  );
}
