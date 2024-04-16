import React from "react";

import "./App.css";
import Header from "./globalComponents/header/Header";
import LandingPage from "./views/landingView/LandingPage";
import Footer from "./globalComponents/header/Footer";
import Router from "./root/Root";

function App() {
  return (
   <>
  {/* <Header></Header>
  <LandingPage></LandingPage>
  <Footer></Footer> */}
 <Router></Router>
   </>
  );
}

export default App;
