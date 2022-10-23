import { Content } from "antd/lib/layout/layout";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";

import "./index.scss";

type ProtectedLayoutProps = {
  children?: React.ReactNode;
};

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
  return (
    <div className="protected-layout-wrapper">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default ProtectedLayout;
