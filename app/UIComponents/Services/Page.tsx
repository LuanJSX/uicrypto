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
                Services
              </span>
            </motion.h2>
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-4xl Unbounded"
            >
              Expert services to support your crypto journey
            </motion.h1>
            <motion.p
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-3 text-gray-400"
            >
              We provide a range of services to help you trade, secure, and
              manage your assets confidently.
            </motion.p>
            <div className="flex flex-col gap-5 mt-10">
                <motion.div
                 
                className="">

                </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
