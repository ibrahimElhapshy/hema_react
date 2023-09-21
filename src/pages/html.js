import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/mainContent";
import { Helmet } from "react-helmet-async";


const Html = () => {
  return (
    <>
      <Helmet>
          <title>HTML Page</title>
          <meta name="descrition" content="html learning " />
      </Helmet>
    <Header />
      
    <MainContent pageName="HTML Page" />
      <Footer />
      
    </>
  );
};

export default Html;
