"use client"

import Image from "next/image"
import {motion} from "framer-motion";

import googleStore from "@/public/google-store.svg";
import appStore from "@/public/app-store.svg";

export default function Footer() {
  return (
    <>
    <footer className="px-[8%] lg:px-[16%] pt-[3%] pb-10 border-t border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
            <motion.div
            initial={{x: -100, opacity: 0}}
            whileInView={{x: 100, opacity: 1}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.5, delay: 0.6}}
            className="flex flex-col"
            >
             <a href="#" className="text-3xl font-bold Unbounded">
            <span className="text-[var(--prime-color)]">Ui</span>cryp
            <span className="text-[var(--prime-color)]">to</span>
          </a>
            <p className="text-gray-400 text-lg mt-5">Leve sua jornada cripto para o próximo nível com o Crypto Framer, o template perfeito para startups e soluções em blockchain.
            </p>
            <div className="social-icon flex items-center gap-5 mt-5">
                <div className="bi bi-twitter-x text-2xl hover:text-[var(--prime-color)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"></div>
                <div className="bi bi-instagram text-2xl hover:text-[var(--prime-color)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"></div>
                <div className="bi bi-github text-2xl hover:text-[var(--prime-color)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"></div>
            </div>
            </motion.div>

            <motion.div
            initial={{x: -100, opacity: 0}}
            whileInView={{x: 100, opacity: 1}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.5, delay: 1}}
            className="flex flex-col ps-0 lg:ps-20"
            >
            <h2 className="text-2xl Unbounded mb-5">Links</h2>
           <div className="flex flex-col gap-2 text-xl text-gray-500">
             <a className="hover:text-[var(--prime-color)] transition-all duration-300 hover:ps-2" href="#why-uicrypto">Por que Why Uicrypto
             </a>
             <a className="hover:text-[var(--prime-color)] transition-all duration-300 hover:ps-2" href="#benefits">Benefícios
             </a>
             <a className="hover:text-[var(--prime-color)] transition-all duration-300 hover:ps-2" href="#services">Serviços
             </a>
             <a className="hover:text-[var(--prime-color)] transition-all duration-300 hover:ps-2" href="#features">Recursos
             </a>
             <a className="hover:text-[var(--prime-color)] transition-all duration-300 hover:ps-2" href="#faqs">FAQs
             </a>
           </div>
            </motion.div>
            <motion.div
            initial={{x: -100, opacity: 0}}
            whileInView={{x: 100, opacity: 1}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.5, delay: 1.2}}
            className="flex flex-col ps-0 lg:ps-20"
            >
            <h2 className="text-2xl Unbounded mb-5">Other Links
            </h2>
           <div className="flex flex-col gap-2 text-xl text-gray-500">
             <a className="hover:text-[var(--prime-color)] transition-all duration-300 hover:ps-2" href="#">Terms
             </a>
             <a className="hover:text-[var(--prime-color)] transition-all duration-300 hover:ps-2" href="#">Disclosures
             </a>
             <a className="hover:text-[var(--prime-color)] transition-all duration-300 hover:ps-2" href="#">Latest News

             </a>
             
           </div>
            </motion.div>
            <motion.div
            initial={{x: -100, opacity: 0}}
            whileInView={{x: 100, opacity: 1}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.5, delay: 1.2}}
            className="flex flex-col ps-0 lg:ps-20"
            >
            <h2 className="text-2xl Unbounded mb-5">Download app
            </h2>
            <div className="flex flex-col gap-2 text-xl text-gray-500">
                <Image src={googleStore} alt="GoofleStore" />
                <Image src={appStore} alt="AppStore"  />
            </div>
            </motion.div>
        </div>
        <motion.div
        initial={{ y: -100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.5, delay: 0.6}}
        className="border-t border-gray-600 pt-10"
         >
            <p className="text-center">© 2025. All Rights Reserved By <a href="#" className="font-bold text-[var(--prime-color)]">Luan Batista</a>
            </p>    
        </motion.div>

    </footer>
    </>
  )
}
