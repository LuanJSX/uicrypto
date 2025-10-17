"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import feature from "@/public/img-Features.png";

import peakIcon1 from "@/public/peak-icon-1.svg";
import peakIcon2 from "@/public/peak-icon-2.svg";
import peakIcon3 from "@/public/peak-icon-3.svg";

export default function Features() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] pb-[5%]" id="features">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <Image src={feature} alt="Service" className="w-full lg:w-[85%]" />
          </motion.div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.h2
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg mb-3"
            >
              UiCrypto{" "}
              <span className="text-[var(--prime-color)] font-bold">
                Funcionalidades
              </span>
            </motion.h2>
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-4xl Unbounded"
            >
              Fortaleça o seu negócio cripto{" "}
            </motion.h1>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-3 text-gray-400"
            >
              Acesse ferramentas avançadas e recursos de segurança para expandir
              suas operações de forma integrada
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 ">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex items-center gap-3"
              >
                <i className="bi bi-check2-circle text-3xl"></i>
                <p className="text-xl text-gray-400">
                  Criptografia de ponta a ponta
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex items-center gap-3"
              >
                <i className="bi bi-check2-circle text-3xl"></i>
                <p className="text-xl text-gray-400">Análises em tempo real</p>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex items-center gap-3"
              >
                <i className="bi bi-check2-circle text-3xl"></i>
                <p className="text-xl text-gray-400">
                  Taxas de transação baixas
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex items-center gap-3"
              >
                <i className="bi bi-check2-circle text-3xl"></i>
                <p className="text-xl text-gray-400">Alta escalabilidade</p>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex items-center gap-3"
              >
                <i className="bi bi-check2-circle text-3xl"></i>
                <p className="text-xl text-gray-400">
                  Monitoramento 24 horas por dia, 7 dias por semana
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex items-center gap-3"
              >
                <i className="bi bi-check2-circle text-3xl"></i>
                <p className="text-xl text-gray-400">
                  Otimizado para aplicativos DeFi
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex items-center gap-3"
              >
                <i className="bi bi-check2-circle text-3xl"></i>
                <p className="text-xl text-gray-400">Interface fácil de usar</p>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex items-center gap-3"
              >
                <i className="bi bi-check2-circle text-3xl"></i>
                <p className="text-xl text-gray-400">
                  Integração de código aberto
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-[10%]">
          <div className="flex flex-col items-center">
            <motion.h3
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl font-semibold"
            >
              Aqui por você,{" "}
              <span className="font-bold text-[var(--prime-color)]">
                {" "}
                sempre
              </span>{" "}
            </motion.h3>
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-2xl lg:text-4xl leading-5xl font-semibold mt-2"
            >
              Comece sua jornada cripto hoje mesmo!
            </motion.h1>
          </div>
          <motion.div
          initial={{y: -100, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: true, amount: 0.3}}
          transition={{duration: 0.5, delay: 1}}
          className="banner2 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 lg:gap-20 mt-20 bg-[#0c121b] p-25 border border-gray-700 rounded-2xl">
            <div className="flex flex-col items-center gap-3">
              <Image src={peakIcon1} alt="peakIcon1" width={60} height={60} className=""/>
              <h2 className="text-xl Unbounded mt-5">Suporte 24/7
              </h2>
              <p className="text-center">Precisa de ajuda? Resolva suas solicitações rapidamente com nossa equipe de suporte.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image src={peakIcon2} alt="peakIcon1" width={60} height={60} className=""/>
              <h2 className="text-xl Unbounded mt-5">Comunidade
              </h2>
              <p className="text-center">Participe das conversas em nossas comunidades globais da OKEx.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Image src={peakIcon3} alt="peakIcon1" width={60} height={60} className=""/>
              <h2 className="text-xl Unbounded mt-5">Academia
              </h2>
              <p className="text-center">Aprenda sobre blockchain e criptomoedas gratuitamente.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </>
  );
}
