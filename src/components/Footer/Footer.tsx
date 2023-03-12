import { FC } from "react";

const Footer: FC = () => (
  <footer className="text-sm text-gray-600 py-6">
    Powered by{" "}
    <a
      href="https://weatherapi.com"
      target="_blank"
      rel="noreferrer"
      className="underline"
    >
      Weather API
    </a>{" "}
    • Illustrations by{" "}
    <a
      href="https://storyset.com/"
      target="_blank"
      rel="noreferrer"
      className="underline"
    >
      Storyset
    </a>
  </footer>
);

export default Footer;
