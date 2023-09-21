import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/mainContent";
import { Helmet } from "react-helmet-async";



const Css = () => {
  return (
    <>
      <Helmet>
          <title>Css Page</title>
          <meta name="descrition" content="css learning " />
      </Helmet>
      <Header />

    <MainContent  pageName="CSS Page"/>

      <Footer />
    </>
  );
};

export default Css;
