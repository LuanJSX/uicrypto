import Image from "next/image";
import Hero from "./UIComponents/Hero/Page";
import CryptoCoins from "./UIComponents/CryptoCoin/Page";
import Solution from "./UIComponents/Solution/Page";
import WhyChoose from "./UIComponents/Why/Page";
import Banner from "./UIComponents/Banner/Page";
import Services from "./UIComponents/Services/Page";
import Features from "./UIComponents/Features/Page";
import FAQS from "./UIComponents/FAQ's/Page";

export default function Home() {
  return (
    <>
    <Hero/>
    <CryptoCoins/>
    <WhyChoose/>
    <Solution/>
    <Banner/>
    <Services/>
    <Features/>
    <FAQS/>
    </>
  );
}
