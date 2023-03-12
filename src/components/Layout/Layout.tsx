import { FC, ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

enum Theme {
  Default = "Default",
  Sunny = "Sunny",
  Rainy = "Rainy",
  Cloudy = "Cloudy",
  Snowy = "Snowy",
}

interface Props {
  children: ReactNode;
  theme?: Theme;
}

const Layout: FC<Props> = ({ children, theme = Theme.Default }) => (
  <div className="min-h-screen bg-emerald-200">
    <div className="min-h-screen max-w-3xl mx-auto px-6 flex flex-col">
      <Header />
      {children}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  </div>
);

export default Layout;
