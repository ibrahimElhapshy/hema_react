import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/mainContent";

const Home = () => {
  return (
    <div>
      <Header />

      <MainContent pageName="HOME Page" />

      <Footer />
    </div>
  );
};

export default Home;
