import * as React from "react";
import "../pages/styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadPage from "./components/HeadPage";
import TradeMore from "./components/TradeMore";
import Candles from "./components/Candles";
import Graph from "./components/Graph";
import StartTrading from "./components/StartTrading";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadPage />
      <TradeMore />
      <Candles />
      <Graph />
      <StartTrading />
      <Footer />
    </div>
  );
}
