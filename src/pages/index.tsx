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
      <main>
        <h1 className={quicksand.className}>Hello, world!</h1>
      </main>
    </>
  );
}
