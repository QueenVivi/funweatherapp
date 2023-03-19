import { FC } from "react";

const Footer: FC = () => (
  <footer className="text-title text-sm text-gray-600 py-6 md:mt-4">
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
    • &copy; Copyright{" "}
    <span data-testid="currentYear">{new Date().getFullYear()}</span>
  </footer>
);

export default Footer;
