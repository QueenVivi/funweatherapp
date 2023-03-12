import { useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";

import WeatherSearch from "@/components/WeatherSearch";
import WeatherResult from "@/components/WeatherResult";
import WeatherData from "@/interfaces/WeatherData";

export default function Home() {
  const [data, setData] = useState<WeatherData | null>(null);

  return (
    <>
      <Head>
        <title>Fun Weather App</title>
        <meta name="description" content="A weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <WeatherSearch onGetData={setData} />
        <WeatherResult data={data} />
      </Layout>
    </>
  );
}
