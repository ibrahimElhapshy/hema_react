import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/mainContent";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="descrition" content="Home learning " />
      </Helmet>

      <Header />

      <MainContent pageName="HOME Page" />

      <Footer />
    </div>
  );
};

export default Home;
