"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import serviceIcon1 from "@/public/services-icon-1.svg";
import serviceIcon2 from "@/public/services-icon-2.svg";
import serviceIcon3 from "@/public/services-icon-3.svg";
import service from "@/public/img-services.png";

export default function Services() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%]" id="services">
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-5">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <Image
              src={service}
              alt="service"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.h2
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg mb-3"
            >
              Uicrypto{" "}
              <span className="text-[var(--prime-color)] font-bold">
                Serviços
              </span>
            </motion.h2>
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-4xl Unbounded"
            >
              Serviços especializados para apoiar sua jornada no mundo cripto
            </motion.h1>
            <motion.p
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-3 text-gray-400"
            >
              Oferecemos uma variedade de serviços para ajudá-lo a negociar,
              proteger e gerenciar seus ativos com confiança.
            </motion.p>
            <div className="flex flex-col gap-5 mt-10">
              <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-5 border-b border-gray-800 pb-5">
                <Image src={serviceIcon1} alt="service" width={40} height={40} className="invert-[50%]"/>
                <h3 className="text-2xl text-gray-400">Gerenciamento de portfólio</h3>
              </motion.div>
              <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-5 border-b border-gray-800 pb-5">
                <Image src={serviceIcon2} alt="service" width={40} height={40} className="invert-[50%]"/>
                <h3 className="text-2xl text-gray-400">Segurança e conformidade
                </h3>
              </motion.div>
              <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-5 border-b border-gray-800 pb-5">
                <Image src={serviceIcon3} alt="service" width={40} height={40} className="invert-[50%]"/>
                <h3 className="text-2xl text-gray-400">Atendimento ao cliente 24/7
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
