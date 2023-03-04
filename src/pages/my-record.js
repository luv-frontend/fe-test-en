import Button from "@/components/Button";
import DiaryItem from "@/components/DiaryItem";
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

  .exercise {
    margin: 56px 0;
  }

  .diary {
    padding: 0 12px;

    &__heading {
      font-size: 22px;
      line-height: 27px;
      font-weight: 400;
    }

    &__content > div {
      margin: 0 0 12px;
    }

    &__wrap-button {
      display: flex;
      justify-content: center;
      margin: 30px 0 0;
    }
  }

  @media screen and (min-width: 768px) {
    .diary {
      &__content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        > div {
          flex-basis: calc(50% - 6px);
        }
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

    .diary {
      padding: 0;

      &__content {
        > div {
          flex-basis: calc(25% - 9px);
        }
      }
    }
  }
`;

const MOCK_ENTRY_ITEMS = Array.from(Array(3).keys());
const MOCK_EXCERCISE = Array.from(Array(12).keys());
const MOCK_DIARY = Array.from(Array(8).keys());

export default function MyRecord() {
  function handleLoadMore() {
    console.log("handleLoadMore");
    // logic same with load more in Home page
  }

  return (
    <MyRecordStyled className="container">
      <section className="entry-block">
        {map(MOCK_ENTRY_ITEMS, (item, index) => (
          <Link key={item} href="#" className="entry-block__item">
            <EntryItem
              label='"BODY RECORD"'
              text="自分のカラダの記録"
              thumbnail={`/photo/MyRecommend-${index + 1}.jpg`}
            />
          </Link>
        ))}
      </section>
      <section className="exercise">
        <Excercise
          label={<span>My{"\n"}Exercise</span>}
          date="2021.05.21"
          items={MOCK_EXCERCISE.map((item) => ({
            id: Math.random(),
            label: "家事全般（立位・軽い）",
            text: "26kcal",
            time: "10 min",
          }))}
        />
      </section>
      <section className="diary">
        <div className="diary__heading">MY DIARY</div>
        {MOCK_DIARY.length && (
          <>
            <div className="diary__content">
              {map(MOCK_DIARY, (item) => (
                <DiaryItem
                  key={item}
                  date={<>2021.05.21{"\n"}23:25</>}
                  text={
                    <>
                      私の日記の記録が一部表示されます{"\n"}
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </>
                  }
                />
              ))}
            </div>
            <div className="diary__wrap-button">
              <Button onClick={handleLoadMore}>自分の日記をもっと見る</Button>
            </div>
          </>
        )}
      </section>
    </MyRecordStyled>
  );
}
