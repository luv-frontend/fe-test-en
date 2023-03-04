import BodyWeightBodyFatPercentage from "@/components/BodyWeightBodyFatPercentage";
import DateAchievementRate from "@/components/DateAchievementRate";
import Head from "next/head";

export default function Home() {
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
        <ul>
          <li>.</li>
          <li>.</li>
          <li>.</li>
          <li>.</li>
        </ul>
      </section>
    </>
  );
}
