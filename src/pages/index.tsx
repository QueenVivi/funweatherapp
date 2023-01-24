import { useState } from "react";
import Head from "next/head";
import quicksand from "@/lib/quicksand";
import Search from "../components/Search/Search";
import WeatherResult from "@/components/WeatherResult";
import WeatherData from "@/interfaces/WeatherData";

export default function Home() {
  const [data, setData] = useState<WeatherData | null>(null);

  const onGetData = (data: WeatherData) => {
    setData(data);
  };

  return (
    <>
      <Head>
        <title>Fun Weather App</title>
        <meta name="description" content="A weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="max-w-3xl mx-auto px-6">
        <main className="min-h-[calc(100vh-68px)] pt-6 md:pt-12">
          <h1
            className={`${quicksand.className} text-3xl md:text-4xl mb-2 text-teal-800`}
          >
            Fun Weather App
          </h1>
          <p className="text-base text-gray-700">
            Check the weather in your city before you head out for fun!
          </p>
          <Search sendData={onGetData} />
          <WeatherResult data={data} />
        </main>
        <footer className="text-sm text-gray-600 py-6">
          Powered by{" "}
          <a href="https://openweathermap.org/" className="underline">
            Weather API
          </a>{" "}
          • Illustrations by{" "}
          <a href="https://storyset.com/" className="underline">
            Storyset
          </a>
        </footer>
      </div>
    </>
  );
}
