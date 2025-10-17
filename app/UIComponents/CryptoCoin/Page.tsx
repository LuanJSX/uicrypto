"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

import Image from "next/image";

import brand1 from "@/public/brand-logo-1.svg";
import brand2 from "@/public/brand-logo-2.svg";
import brand3 from "@/public/brand-logo-3.svg";
import brand4 from "@/public/brand-logo-4.svg";
import brand5 from "@/public/brand-logo-5.svg";

import cryptoIcon1 from "@/public/crypto-icon-1.svg";
import cryptoIcon2 from "@/public/crypto-icon-2.svg";
import cryptoIcon3 from "@/public/crypto-icon-3.svg";
import cryptoIcon4 from "@/public/crypto-icon-4.svg";
import cryptoIcon5 from "@/public/crypto-icon-5.svg";
import cryptoIcon6 from "@/public/crypto-icon-6.svg";

interface CryptoCoin {
  icon: string;
  name: string;
  pair: string;
  price: string;
}

export default function CryptoCoins() {
  const Brands: String[] = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand1,
    brand2,
  ];

  const Featured: CryptoCoin[] = [
    {
      icon: cryptoIcon1,
      name: "Bitcoin",
      pair: "BTC/USD",
      price: "$113982",
    },
    {
      icon: cryptoIcon2,
      name: "Ethereum",
      pair: "ETH/USD",
      price: "$4422.27",
    },
    {
      icon: cryptoIcon3,
      name: "Polkadot",
      pair: "DOT/USD",
      price: "$4.19",
    },
    {
      icon: cryptoIcon4,
      name: "Litecoin",
      pair: "LTC/USD",
      price: "$116.7",
    },
    {
      icon: cryptoIcon5,
      name: "Cardano",
      pair: "ADA/USD",
      price: "$1.33",
    },
    {
      icon: cryptoIcon6,
      name: "Ripple",
      pair: "XRP/USD",
      price: "$0.89",
    },
  ];
  return (
    <>
      {/* Featured */}
      <div className="py-10 px-[8%] lg:px-[16%] mt-[5%]">
        <div className="text-center mb-10">
          <motion.h3
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl font-semibold"
          >
            Principais{" "}
            <span className="text-[var(--prime-color)]">Criptomoedas</span>
          </motion.h3>
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-3xl font-bold mt-2"
          >
            Análises e atualizações das principais criptos{" "}
          </motion.h2>
        </div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: { slidesPerView: 4 },
              991: { slidesPerView: 3 },
              767: { slidesPerView: 2 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {Featured.map((coin, index) => (
              <SwiperSlide key={index} className="p-4">
                <div className="bg-[#181c248d] hover:bg-[#181c24] duration-300 p-6 rounded-lg text-center border border-transparent hover:border-[#f29e3a] hover:-translate-y-2 transition-all cursor-pointer">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={coin.icon}
                      alt={coin.name}
                      className="feature-icon"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h4 className="text-xl font-semibold Unbounded">
                    {coin.name}
                  </h4>
                  <h4 className="text-sm text-gray-400">{coin.pair}</h4>
                  <h4 className="text-xl font-semibold mt-2">{coin.price}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Brands */}
      <div className="py-10 px-[8%] lg:px-[16%] mt-[5%]">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="title py-10 text-center"
        >
          {" "}
          <h3 className="text-2xl font-semibold">
            Confiável entre as principais marcas.{" "}
            <span className="font-bold text-[var(--prime-color)]">
              {" "}
              de Criptomoedas
            </span>{" "}
          </h3>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: { slidesPerView: 5 },
              911: { slidesPerView: 4 },
              766: { slidesPerView: 4 },
              575: { slidesPerView: 3 },
              0: { slidesPerView: 3 },
            }}
          >
            {Brands.map((Brand, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center cursor-pointer"
              >
                <Image
                  src={Brand}
                  alt={`Brand ${index + 1}`}
                  width={150}
                  height={60}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </>
  );
}
