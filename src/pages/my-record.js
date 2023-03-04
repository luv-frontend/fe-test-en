import EntryItem from "@/components/EntryItem";
import Excercise from "@/components/Excercise";
import { map } from "lodash";
import Link from "next/link";
import React from "react";

import styled from "styled-components";

const MyRecordStyled = styled.div`
  .entry-block {
    margin: 56px 0;
    display: flex;
    overflow-x: auto;
    padding: 0 12px;

    &__item {
      display: block;
      min-width: 288px;
      margin: 0 24px 0 0;

      :last-child {
        margin: 0;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .entry-block {
      padding: 0;
      justify-content: space-between;

      &__item {
        margin: 0;
      }
    }
  }
`;

const MOCK_ENTRY_ITEMS = [
  {
    id: Math.random(),
    label: "BODY RECORD",
    text: "自分のカラダの記録",
    thumbnail: "/photo/MyRecommend-1.jpg",
    slug: "#",
  },
  {
    id: Math.random(),
    label: "MY EXERCISE",
    text: "自分の運動の記録",
    thumbnail: "/photo/MyRecommend-2.jpg",
    slug: "#",
  },
  {
    id: Math.random(),
    label: "MY DIARY",
    text: "自分の日記",
    thumbnail: "/photo/MyRecommend-3.jpg",
    slug: "#",
  },
];

const MOCK_EXCERCISE = [
  {
    id: Math.random(),
    label: "家事全般（立位・軽い）",
    text: "26kcal",
    time: "10 min",
  },
  {
    id: Math.random(),
    label: "家事全般（立位・軽い）",
    text: "26kcal",
    time: "10 min",
  },
  {
    id: Math.random(),
    label: "家事全般（立位・軽い）",
    text: "26kcal",
    time: "10 min",
  },
  {
    id: Math.random(),
    label: "家事全般（立位・軽い）",
    text: "26kcal",
    time: "10 min",
  },
  {
    id: Math.random(),
    label: "家事全般（立位・軽い）",
    text: "26kcal",
    time: "10 min",
  },
  {
    id: Math.random(),
    label: "家事全般（立位・軽い）",
    text: "26kcal",
    time: "10 min",
  },
  {
    id: Math.random(),
    label: "家事全般（立位・軽い）",
    text: "26kcal",
    time: "10 min",
  },
  {
    id: Math.random(),
    label: "家事全般（立位・軽い）",
    text: "26kcal",
    time: "10 min",
  },
  {
    id: Math.random(),
    label: "家事全般（立位・軽い）",
    text: "26kcal",
    time: "10 min",
  },
  {
    id: Math.random(),
    label: "家事全般（立位・軽い）",
    text: "26kcal",
    time: "10 min",
  },
];

export default function MyRecord() {
  return (
    <MyRecordStyled className="container">
      <section className="entry-block">
        {map(MOCK_ENTRY_ITEMS, ({ id, label, text, thumbnail, slug }) => (
          <Link key={id} href={slug} className="entry-block__item">
            <EntryItem label={label} text={text} thumbnail={thumbnail} />
          </Link>
        ))}
      </section>
      <section className="exercise">
        <Excercise
          label={<span>My{"\n"}Exercise</span>}
          date="2021.05.21"
          items={MOCK_EXCERCISE}
        />
      </section>
    </MyRecordStyled>
  );
}
