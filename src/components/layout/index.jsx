import React from "react";
import { Advantages } from "./Advantages";
import { Business } from "./Business";
import { CardDeal } from "./CardDeal";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Invoicing } from "./Invoising";
import { Sponsors } from "./Sponsors";
import { Team } from "./Team";
export const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Advantages />
      <Business />
      <Invoicing />
      <CardDeal />
      <Team />
      <Sponsors />
      <Footer />
    </div>
  );
};
