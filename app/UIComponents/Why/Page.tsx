"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import chooseus1 from "@/public/chooseus-icon-1.svg";
import chooseus2 from "@/public/chooseus-icon-2.svg";
import chooseus3 from "@/public/chooseus-icon-3.svg";
import workWithUs from "@/public/work-with-us.png";

export default function WhyChoose() {
  return (
    <>
      <div
        className="flex flex-col lg:flex-row justify-between gap-10 items-center px-[8%] lg:px-[16%] my-[5%]"
        id="why-uicrypto"
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl font-semibold"
          >
            Por que escolher{" "}
            <span className="font-bold text-[var(--prime-color)]">
              {" "}
              Uicrypto
            </span>{" "}
          </motion.h3>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-[2rem] leading-[4rem] lg:text-[3.5rem] lg:leading-[5rem] Unbounded"
          >
            Desbloqueie recursos poderosos para traders modernos
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-5">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-3"
            >
              <Image
                src={chooseus1}
                alt="chooseus1"
                width={50}
                height={50}
                className="p-3 bg-[#181b23] rounded-full "
              />
              <p>Negociação rápida e segura </p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-3"
            >
              <Image
                src={chooseus2}
                alt="chooseus2"
                width={50}
                height={50}
                className="p-3 bg-[#181b23] rounded-full "
              />
              <p>Integração perfeita de carteira </p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-3"
            >
              <Image
                src={chooseus3}
                alt="chooseus3"
                width={50}
                height={50}
                className="p-3 bg-[#181b23] rounded-full "
              />
              <p>Lance e gerencie ativos em blockchain </p>
            </motion.div>
          </div>
        </div>
        <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="w-full lg:w-1/2">
              
          <Image src={workWithUs} alt="workWithUs" />
        </motion.div>
      </div>
      <motion.div
       initial={{ x: 100, opacity: 0 }}
       whileInView={{ x: 0, opacity: 1 }}
       viewport={{ once: true, amount: 0.3 }}
       transition={{ duration: 0.5, delay: 1.7 }}
       className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 px-[8%] lg:px-[16%] pb-10">
        <div className="flex flex-col justify-between items-center bg-[#181c248d] hover:bg-[#181c24] p-10 rounded-2xl border border-gray-700 hover:border-[#fb9e3a] hover:-translate-y-2  transition-all cursor-pointer">
          <h1 className="text-4xl font-bold  text-[var(--prime-color)] Unbounded">4M+</h1>
          <p className="text-xl tracking-wider mt-2">Usuários ativos</p>
        </div>

        <div className="flex flex-col justify-between items-center bg-[#181c248d] hover:bg-[#181c24] p-10 rounded-2xl border border-gray-700 hover:border-[#fb9e3a] hover:-translate-y-2  transition-all cursor-pointer">
          <h1 className="text-4xl font-bold  text-[var(--prime-color)] Unbounded">24/7</h1>
          <p className="text-xl tracking-wider mt-2">Suporte 24h por dia</p>
        </div>


        <div className="flex flex-col justify-between items-center bg-[#181c248d] hover:bg-[#181c24] p-10 rounded-2xl border border-gray-700 hover:border-[#fb9e3a] hover:-translate-y-2  transition-all cursor-pointer">
          <h1 className="text-4xl font-bold  text-[var(--prime-color)] Unbounded">113+</h1>
          <p className="text-xl tracking-wider mt-2">Países</p>
        </div>
        
        <div className="flex flex-col justify-between items-center bg-[#181c248d] hover:bg-[#181c24] p-10 rounded-2xl border border-gray-700 hover:border-[#fb9e3a] hover:-translate-y-2  transition-all cursor-pointer">
          <h1 className="text-4xl font-bold text-[var(--prime-color)] Unbounded">$21B+</h1>
          <p className="text-xl tracking-wider mt-2">Volume de Negociações</p>
        </div>
      

      </motion.div>
    </>
  );
}
