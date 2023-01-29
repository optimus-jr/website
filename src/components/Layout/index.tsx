import type { NextFont } from "@next/font";

import Footer from "./Footer";
import Header from "./Header";

interface Props {
  font: NextFont;
  children: React.ReactNode;
}

const Layout = ({ font, children }: Props) => {
  return (
    <div style={{ display: "contents" }} className={font.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
