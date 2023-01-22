import Head from "next/head";
import quicksand from "@/lib/quicksand";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fun Weather App</title>
        <meta name="description" content="A weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="max-w-3xl mx-auto">
        <h1
          className={`${quicksand.className} text-4xl mb-2 mt-6 text-teal-800`}
        >
          Fun Weather App
        </h1>
        <p className="text-base text-gray-700">
          Check the weather in your city before you head out for fun!
        </p>
      </main>
    </>
  );
}
