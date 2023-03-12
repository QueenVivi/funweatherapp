import { useEffect, useState } from "react";
import Head from "next/head";
import { getTheme, Theme } from "@/lib/theme";
import Layout from "@/components/Layout";
import WeatherSearch from "@/components/WeatherSearch";
import WeatherResult from "@/components/WeatherResult";
import WeatherData from "@/interfaces/WeatherData";

export default function Home() {
  const [data, setData] = useState<WeatherData | undefined>(undefined);
  const [theme, setTheme] = useState<Theme>(Theme.Fallback);

  useEffect(() => {
    setTheme(getTheme(data?.current?.condition?.code));
  }, [data]);

  return (
    <>
      <Head>
        <title>Fun Weather App</title>
        <meta name="description" content="A weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout theme={theme}>
        <div className="flex flex-col gap-6 md:gap-10">
          <WeatherSearch onGetData={setData} />
          <WeatherResult data={data} theme={theme} />
        </div>
      </Layout>
    </>
  );
}
