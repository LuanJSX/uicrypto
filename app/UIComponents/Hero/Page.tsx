"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import hero from "@/public/Hero2.jpg"
export default function Hero() {
  return (
    <>
    <div id='hero' className='hero flex flex-col lg:flex-row justify-between items-center gap-10 px-[8%] lg:px-[16%] mt-[20%] lg:mt-[8%]'>
        <div className="hero-content w-full lg:w-1/2 flex flex-col items-start gap-4">
        <motion.div
        initial={{x: -100, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.5, delay: 0.6}}
        >
            <span className='px-8 py-3 font-bold border text-[var(--prime-color)] border-gray-500 bg-[#ffb05b2f] rounded-full inline'>Desbloqueie o poder dos ativos digitais.</span>
        </motion.div>
        <motion.h1
        initial={{x: -100, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.5, delay: 0.8}}
         className='text-[2rem] leading-[4rem] lg:text-[3.5rem] lg:leading-[5rem] Unbounded'>
           Plataforma Cripto Inteligente e Segura
        </motion.h1>
        <motion.p 
        initial={{x: -100, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.5, delay: 0.8}}>
          Negocie criptomoedas de forma inteligente com nossa plataforma segura e eficiente.<br/> Dados em tempo real e ferramentas poderosas para iniciantes e profissionais.
        </motion.p>
        <motion.button
         initial={{x: -100, opacity: 0}}
         whileInView={{x: 0, opacity: 1}}
         viewport={{once: true, amount: 0.3}}
         transition={{duration: 0.5, delay: 0.8}}
         className='mt-5 flex items-center text-xl px-5 py-2 pb-3 rounded-sm text-white font-medium bg-[var(--prime-color)] cursor-pointer hover:bg-white transition-all duration-300 hover:text-black'>Explorar mais<i className='bi bi-arrow-right ps-3 pt-1'></i>
       
        </motion.button>
        </div>
        <motion.div
        initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.5, delay: 1.2}}
        className='hero-image w-full lg:w-1/2 flex flex-col pt-10'>
            <Image src={hero} className='w-[90%]' alt='' />

        </motion.div>
    </div>
    
    </>
  )
}
