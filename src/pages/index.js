import Head from "next/head";

import BodyWeightBodyFatPercentage from "@/components/BodyWeightBodyFatPercentage";
import ButtonTransit from "@/components/ButtonTransit";
import DateAchievementRate from "@/components/DateAchievementRate";
import { useFetch } from "@/hooks/useFetch";
import { map } from "lodash";
import { useState } from "react";

export default function Home() {
  const [urlFood, setUrlFood] = useState("/api/food");
  const {
    data: dataFilter,
    isLoading: isLoadingFilter,
    error: errorFilter,
  } = useFetch("/api/food-type");

  const {
    data: dataFood,
    isLoading: isLoadingFood,
    error: errorFood,
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
      <section>
        {isLoadingFilter ? null : (
          <ul>
            {map(dataFilter, ({ id, label, icon, value }) => (
              <li key={id} onClick={handleFilter(value)}>
                <ButtonTransit label={label} icon={icon} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
