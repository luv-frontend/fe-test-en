import Head from "next/head";

import BodyWeightBodyFatPercentage from "@/components/BodyWeightBodyFatPercentage";
import ButtonTransit from "@/components/ButtonTransit";
import DateAchievementRate from "@/components/DateAchievementRate";
import { useFetch } from "@/hooks/useFetch";
import { map } from "lodash";
import { useState } from "react";
import FoodItem from "@/components/FoodItem";
import styled from "styled-components";
import Button from "@/components/Button";

const SectionFoodStyled = styled.section`
  .filter {
    display: flex;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -4px;
  }

  .item {
    flex-basis: 25%;
    padding: 4px;
  }

  .wrap-button {
    text-align: center;
    margin: 24px 0 0;
  }
`;

export default function Home() {
  const [urlFood, setUrlFood] = useState("/api/food");
  const {
    data: dataFilter,
    isLoading: isLoadingFilter,
    error: errorFilter,
  } = useFetch("/api/food-type");

  // mock data has more item
  const hasNextData = true;

  const {
    data: dataFood,
    isLoading: isLoadingFood,
    isLoadingMore: isLoadingMoreFood,
    error: errorFood,
    fetchMore: fetchMoreFood,
  } = useFetch(urlFood);

  const handleFilter = (value) => () => {
    try {
      setUrlFood(`/api/food?type=${value}`);
    } catch (err) {
      console.log("[Error] handleFilter", err);
    }
  };

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <section>
        <DateAchievementRate />
        <BodyWeightBodyFatPercentage />
      </section>
      <SectionFoodStyled className="container">
        {isLoadingFilter ? null : (
          <ul className="filter">
            {map(dataFilter, ({ id, label, icon, value }) => (
              <li key={id} onClick={handleFilter(value)}>
                <ButtonTransit label={label} icon={icon} />
              </li>
            ))}
          </ul>
        )}
        {isLoadingFood && <div>Loading...</div>}
        {dataFood && (
          <ul className="items">
            {map(dataFood, ({ id, label, thumbnail }) => (
              <li key={id} className="item">
                <FoodItem label={label} thumbnail={thumbnail} />
              </li>
            ))}
          </ul>
        )}
        {dataFood.length !== 0 && hasNextData && (
          <div className="wrap-button">
            <Button onClick={fetchMoreFood}>
              {isLoadingMoreFood ? "Loading..." : "自分の日記をもっと見る"}
            </Button>
          </div>
        )}
      </SectionFoodStyled>
    </>
  );
}
