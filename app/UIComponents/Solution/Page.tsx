"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import Bitcoin from "@/public/img-bitcoin.png";
import solution1 from "@/public/services-icon-1.svg";
import solution2 from "@/public/services-icon-2.svg";
import solution3 from "@/public/solution-icon-3.svg";
import solution4 from "@/public/solution-icon-4.svg";

export default function Solution() {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] my-[5%]">
        <div className="flex flex-col items-center justify-center text-center gap-10">
          <div className="flex flex-col">
            <motion.h3
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl font-semibold"
            >
              Oferecemos As{" "}
              <span className="font-bold text-[var(--prime-color)]">
                Melhores Soluções Para Você.{" "}
              </span>
            </motion.h3>
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-2xl lg:text-5xl leading-5xl font-bold mt-5"
            >
              Uma plataforma com ferramentas versáteis
              <br />
              liberdade na compra e venda
            </motion.h1>
          </div>
          <div className="flex flex-col relative mt-10">
            {/* col 1 */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-[70%] mt-0 lg:mt-[15%]" id="benefits">
              <div className="w-full lg:w-1/2 -ms-10 lg:-ms-[10%]">
                <div className="flex flex-row-reverse lg:items-center gap-5">
                  <div className="flex flex-col items-start lg:items-end">
                    <h1 className="text-3xl font-thin Unbounded mb-3">Estratégia</h1>
                    <p className="text-end">
                      Defina seus objetivos de investimento em criptomoedas
                    </p>
                  </div>
                  <Image
                    src={solution1}
                    alt="Strategy"
                    width={80}
                    height={80}
                    className="bg-[#24272d] p-6 rounded-full"              />  
               </div>                                  
              </div>
              <div className="flex flex-row-reverse lg:items-center gap-5">
                  <div className="flex flex-col items-start lg:items-end">
                    <h1 className="text-3xl font-thin Unbounded mb-3">Análise</h1>
                    <p className="text-end">
                    Avalie as tendências do mercado cripto
                    </p>
                  </div>
                  <Image
                    src={solution2}
                    alt="Strategy"
                    width={80}
                    height={80}
                    className="bg-[#24272d] p-6 rounded-full"              />  
               </div>                                          
            </motion.div>
              {/* col 2 */} 
              <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-[70%] mt-0 lg:mt-[15%]" id="benefits">
              <div className="w-full lg:w-1/2 -ms-10 lg:-ms-[10%]">
                <div className="flex flex-row-reverse lg:items-center gap-5">
                  <div className="flex flex-col items-start lg:items-end">
                    <h1 className="text-3xl font-thin Unbounded mb-3">Execução</h1>
                    <p className="text-end">
                    Inicie negociações e gerencie investimentos
                    </p>
                  </div>
                  <Image
                    src={solution3}
                    alt="Strategy"
                    width={80}
                    height={80}
                    className="bg-[#24272d] p-6 rounded-full"              />  
               </div>                                  
              </div>
              <div className="flex flex-row-reverse lg:items-center gap-5">
                  <div className="flex flex-col items-start lg:items-end">
                    <h1 className="text-3xl font-thin Unbounded mb-3">Monitoramento</h1>
                    <p className="text-end">
                    Acompanhe o desempenho e garanta suporte.
                    </p>
                  </div>
                  <Image
                    src={solution4}
                    alt="Strategy"
                    width={80}
                    height={80}
                    className="bg-[#24272d] p-6 rounded-full"              />  
               </div>                                          
            </motion.div>
            <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}  
            className="hidden lg:flex absolute -z-1">
              <Image src={Bitcoin} alt="Bitcoin"/>
            </motion.div> 
          </div>
        </div>
      </div>
    </>
  );
}
