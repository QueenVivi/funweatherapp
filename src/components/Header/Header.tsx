import { FC } from "react";
import quicksand from "@/lib/quicksand";

const Header: FC = () => (
  <header className="mt-6 mb-4 md:mt-16 md:mb-6">
    <h1
      className={`${quicksand.className} text-3xl md:text-4xl mb-2 text-title`}
    >
      Fun Weather App
    </h1>
    <p className="mb-0 text-gray-700">
      Check the weather in your city before you head out for fun!
    </p>
  </header>
);

export default Header;
