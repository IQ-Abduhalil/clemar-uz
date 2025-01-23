import { AboutSection } from "../../components/aboutsection/AboutSection";
import { CompanySect } from "../../components/companysection/CompanySect";
import { ConnectSect } from "../../components/connectsection/ConnectSect";
import { Hero } from "../../components/hero/Hero";
import { NewsSection } from "../../components/newsSection/NewsSection";
import { Products } from "../../components/products/Products";
import { Services } from "../../components/services/Services";
import { SonSection } from "../../components/sonSection/SonSection";

export function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <Services />
      <SonSection />
      <NewsSection />
      <CompanySect />
      <AboutSection />
      <ConnectSect />
    </div>
  );
}
