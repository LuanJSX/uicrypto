"use client"

import {motion} from "framer-motion";
import clsx from 'clsx';
import { useState } from "react";

type FAQItem = {
    question: string;
    answer: string;
}

const faqData: FAQItem [] = [
    {
        question: 'Como começo a negociar na uicrypto?',
        answer: 'Começar na uicrypto é simples e intuitivo. Primeiro, cadastre-se com seu e-mail ou número de telefone. Em seguida, conclua o processo de verificação KYC (Conheça Seu Cliente) para garantir a conformidade com as regulamentações. Após a verificação, você poderá depositar fundos com segurança e começar a negociar criptomoedas imediatamente usando nossa interface intuitiva e guias passo a passo.',
    },
    {
        question: 'Quais medidas de segurança a uicrypto utiliza?',
        answer: 'Na uicrypto, sua segurança é nossa maior prioridade. Implementamos protocolos de segurança de ponta, incluindo criptografia em várias camadas para proteger seus dados, autenticação de dois fatores (2FA) para adicionar uma camada extra de segurança no login e soluções de armazenamento a frio para manter a maior parte dos fundos offline e protegidos contra possíveis ataques. Nosso sistema é auditado regularmente para manter os mais altos padrões de proteção.',
    },
    {
        question: 'Posso acessar a uicrypto no celular?',
        answer: 'Sim! A uicrypto oferece aplicativos móveis completos para dispositivos iOS e Android. Esteja você em casa ou em movimento, é fácil monitorar seu portfólio, realizar negociações, depositar fundos e gerenciar sua conta de qualquer lugar. O aplicativo móvel oferece uma experiência fluida, com acompanhamento de preços em tempo real, alertas e acesso a ferramentas essenciais para traders de criptomoedas.',
    },
    {
        question: 'Quão rápidas são as transações de depósito e saque na uicrypto?',
        answer: 'A uicrypto garante que depósitos e saques sejam processados de forma rápida e eficiente. A maioria das transações em criptomoedas é concluída em minutos, dependendo da velocidade da rede e do tipo de moeda. Nossa plataforma oferece diversos métodos de pagamento e utiliza algoritmos avançados para verificar transações com segurança, minimizando atrasos e garantindo acesso rápido e confiável aos seus fundos.',
    },
    {
        question: 'A uicrypto oferece staking e yield farming?',
        answer: 'Com certeza! A uicrypto oferece diversas oportunidades para os usuários aumentarem seus investimentos. Nossos pools de staking permitem que você bloqueie seus ativos e receba renda passiva por meio de recompensas da rede. Além disso, as opções de yield farming oferecem estratégias avançadas para maximizar os retornos participando de pools de liquidez e protocolos DeFi — tudo isso em uma interface fácil de usar, projetada tanto para iniciantes quanto para traders experientes.',
    },
    {
        question: 'Onde posso encontrar tutoriais e suporte na uicrypto?',
        answer: 'Sabemos que o universo das criptomoedas pode ser desafiador, por isso a uicrypto oferece diversos recursos para ajudar você a ter sucesso. Nosso Centro de Ajuda inclui guias completos, perguntas frequentes (FAQs) e tutoriais em vídeo, cobrindo desde a criação de conta até estratégias avançadas de negociação. Para suporte personalizado, nossa equipe de atendimento ao vivo está disponível 24 horas por dia, 7 dias por semana, pronta para responder às suas dúvidas e ajudar em qualquer problema que você enfrentar.',
    },
]

export default function FAQS() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }
  return (
    <div className="flex flex-col  gap-5 px-[8%] lg:px-[16%] mt-[10%] pb-[5%]" id="faqs">
        <div className="flex flex-col items-center">
        <motion.h2
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg mb-3"
            >
              UiCrypto{" "}
              <span className="text-[var(--prime-color)] font-bold">
              Perguntas Frequentes

              </span>
            </motion.h2>
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-4xl Unbounded"
            >
              Encontre respostas e comece com o Uicrypto
              {" "}
            </motion.h1>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-3 text-gray-400"
            >
              Tudo o que você precisa saber para gerenciar seus investimentos em criptomoedas com confiança
         </motion.p>
        </div>
        {/* FAQ List */}
        <div className="flex flex-col gap-4 w-full mt-10">
            {faqData.map((item, index) => (
                <motion.div
                initial={{y: -100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: true, amount: 0.3}}
                transition={{duration: 0.5, delay: 1}}
                className="bg-[#171f27] rounded-md shadow-md overflow-hidden cursor-pointer"        
                >
                    <button onClick={() => toggleFAQ(index)}
                        className={clsx(
                           "w-full flex justify-between items-center px-6 py-5 text-left transition-colors hover:text-[var(--prime-color)] cursor-pointer",
                           openIndex === index ? "text-[var(--prime-color)]" : "text-white", "hover:bg-[#242d38]"
                        )}>
                        <span className="Unbounded text-md font-light">{item.question}</span>
                        <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
                    </button>
                    <div
                    className={clsx(
                        'overflow-hidden transition-all duration-500',
                        openIndex === index ? 'max-h-96' : 'max-h-0 py-0'
                    )}>
                     <div className="px-6 py-3 text-gray-400 bg-[#171f27] border-t border-[var(--prime-color)]">{item.answer}</div>
                    </div>
                </motion.div>
            ))}
        </div>

    </div>
  )
}
