import React from "react";
import { map } from "lodash";
import Link from "next/link";

import { FooterStyled } from "./styles";

const MOCK_DATA = [
  {
    id: Math.random(),
    label: "会員登録",
    slug: "#",
  },
  {
    id: Math.random(),
    label: "運営会社",
    slug: "#",
  },
  {
    id: Math.random(),
    label: "利用規約",
    slug: "#",
  },
  {
    id: Math.random(),
    label: "個人情報の取扱について",
    slug: "#",
  },
  {
    id: Math.random(),
    label: "特定商取引法に基づく表記",
    slug: "#",
  },
  {
    id: Math.random(),
    label: "お問い合わせ",
    slug: "#",
  },
];

export default function Footer() {
  return (
    <FooterStyled>
      {map(MOCK_DATA, ({ id, label, slug }) => (
        <Link key={id} href={slug}>
          {label}
        </Link>
      ))}
    </FooterStyled>
  );
}
