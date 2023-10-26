import type { ReactElement } from "react";
import NavBar from "./nav-bar";

type LayoutProps = {
  children: ReactElement;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <div>logo</div>
      </header>
      <main>
        {children}
        <NavBar />
      </main>
    </>
  );
};

export default Layout;
