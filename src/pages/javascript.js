import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/mainContent";
import { Helmet } from "react-helmet-async";

const JavaScript = () => {
  return (
    <>
      <Helmet>
          <title>Css Page</title>
          <meta name="descrition" content="javascript learning " />
      </Helmet>
      <Header />

      <MainContent pageName="JAVASCRIPT Page" />
      <Footer />
    </>
  );
};

export default JavaScript;
