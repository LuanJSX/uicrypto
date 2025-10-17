"use client"

import {motion} from "framer-motion";

export default function Banner() {
  return (
    <>
   
        {/* Banner */}
        <div className="px-[8%] lg:px-[16%] py-[5%] mt-[15%]">
            <motion.div
            initial={{y: -100, opacity:0}}
            whileInView={{y:0 , opacity: 1}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.5, delay: 0.6}}  
            className="banner bg-[#0c101a] p-16 border border-gray-800 rounded-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl Unbounded">Crypgo powered by framer platform
                    </h1>
                    <p className="text-xl text-gray-400">Our landing page empower framer developers to have free, safer and more trustworthy experiences
                    </p>
                </div>
                <motion.button
         initial={{x: -100, opacity: 0}}
         whileInView={{x: 0, opacity: 1}}
         viewport={{once: true, amount: 0.3}}
         transition={{duration: 0.5, delay: 0.8}}
         className='mt-5 flex items-center text-xl px-5 py-2 pb-3 rounded-sm text-white font-medium bg-[var(--prime-color)] cursor-pointer hover:bg-white transition-all duration-300 hover:text-black'>Explorar mais<i className='bi bi-arrow-right ps-3 pt-1'></i>  
        </motion.button>
            </motion.div>
        </div>     
   
    </>
  )
}
