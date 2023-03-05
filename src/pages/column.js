import Button from "@/components/Button";
import ColumnItem from "@/components/ColumnItem";
import RecommendItem from "@/components/RecommendItem";
import { map } from "lodash";
import React from "react";
import styled from "styled-components";

const ColumnPageStyled = styled.div`
  overflow: hidden;

  .recomments {
    display: flex;
    padding: 0 12px;
    margin: 56px -16px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    > * {
      margin: 0 16px;
    }

    @media screen and (min-width: 992px) {
      overflow: visible;
      justify-content: space-between;

      > * {
        margin: 0;
        flex-basis: 216px;
      }
    }
  }

  .columns {
    margin: 56px -4px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 16px;

    > * {
      flex-basis: calc(50% - 4px);
      margin: 9px 0;
    }

    @media screen and (min-width: 768px) {
      padding: 0;

      > * {
        flex-basis: calc(25% - 6px);
      }
    }
  }

  .wrap-button {
    text-align: center;
    margin: 24px 0 0;
  }
`;

const MOCK_RECOMMENDS = Array.from(Array(4).keys());
const MOCK_COLUMNS = Array.from(Array(8).keys());

export default function ColumnPage() {
  // fetch data and fetch more same with Home page, This page only show UI

  return (
    <ColumnPageStyled>
      <div className="container">
        {MOCK_RECOMMENDS.length !== 0 && (
          <section className="recomments">
            {map(MOCK_RECOMMENDS, (item) => (
              <RecommendItem
                key={item}
                text="RECOMMENDED
            COLUMN"
                subText="ダイエット"
              />
            ))}
          </section>
        )}

        {MOCK_COLUMNS.length !== 0 && (
          <>
            <section className="columns">
              {map(MOCK_COLUMNS, (item) => (
                <ColumnItem
                  key={item}
                  thumbnail={`/photo/column-${item + 1}.jpg`}
                  label="2021.05.17   23:25"
                  description="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
                  tags={["魚料理", "和食", "DHA"]}
                />
              ))}
            </section>
            <div className="wrap-button">
              <Button
                onClick={() => {
                  console.log("fetch more");
                }}
              >
                コラムをもっと見る
              </Button>
            </div>
          </>
        )}
      </div>
    </ColumnPageStyled>
  );
}
