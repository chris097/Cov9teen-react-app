import React from "react";
import Header from './components/Header/Header';
import Theme from "./components/Theme/Theme";
import Tracker from "./components/Tracker/Tracker";
import Countries from "./components/Countries/Countries";
import Symptoms from "./components/Symptoms/Symptoms";
import Prevention from "./components/Prevention/Prevention";
import Footer from "./components/Footer/Footer";

const App = () => {
  return(
    <>
    {/* Header */}
      <Header />
    {/* Theme- background design */}
    <Theme />
    {/* Tracker */}
    <Tracker />
    {/* Countries */}
    <Countries />
    {/* Symptoms */}
    <Symptoms />
    {/* Prevention */}
    <Prevention />
    {/* Footer */}
    <Footer />
    </>
  )
}

export default App;