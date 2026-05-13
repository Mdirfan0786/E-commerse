import React from "react";

import Catalog from "../catalog/catalog";

import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Banner from "./components/Banner/Banner";
import Stats from "./components/Stats/Stats";

import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Hero />

      <Features />

      <Banner />

      <Stats />

      <Catalog />
    </div>
  );
}

export default Home;
