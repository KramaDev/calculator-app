import { ReactNode } from "react";
import Header from "./header";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="layout">{children}</div>
    </>
  );
};
export default Layout;
