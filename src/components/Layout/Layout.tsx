import { FC, ReactNode } from "react";
import { Theme } from "@/lib/theme";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface Props {
  children: ReactNode;
  theme?: Theme;
}

const Layout: FC<Props> = ({ children, theme = Theme.Fallback }) => (
  <div className="min-h-screen bg-background" data-theme={theme}>
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
