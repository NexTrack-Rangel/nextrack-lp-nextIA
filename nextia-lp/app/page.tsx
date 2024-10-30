"use client";  // Adicione isso no topo do arquivo

import './MyMenu.css'; // Arquivo CSS personalizado

import logoHome from './logo_color.png';

import "primereact/resources/themes/lara-light-cyan/theme.css";

// Importando o tema do PrimeReact (Escolha um tema de sua preferência)
//import 'primereact/resources/themes/saga-blue/theme.css';  // Exemplo de tema, você pode alterar

// Estilos principais do PrimeReact
import 'primereact/resources/primereact.min.css';

// Estilos dos ícones (opcional, mas necessário se usar componentes com ícones)
import 'primeicons/primeicons.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Menubar } from 'primereact/menubar';

import { useTheme } from "next-themes";

// import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { RainbowButton } from "../components/ui/rainbow-button"

import HeroVideoDialog from "../components/ui/hero-video-dialog";
import PulsatingButton from "../components/ui/pulsating-button";
import Globe from "../components/ui/globe";
// import TextReveal from "../components/ui/text-reveal";
import TypingAnimation from "../components/ui/typing-animation";

import { Dock, DockIcon } from "../components/ui/dock";

import { Button } from 'primereact/button';



import { MagicCard } from "../components/ui/magic-card";

import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStar, faUpLong, faHome, faGift, faTags } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import { useEffect, useState } from "react";
// import ShimmerButton from "@/components/ui/shimmer-button";


const Home = () => {
  const [isYearly, setIsYearly] = useState(false);

  const { theme } = useTheme();

  const items = [
    {
      label: 'Início',
      icon: () => <FontAwesomeIcon icon={faHome} className="menu-icon" />, // Ícone com classe para espaçamento
    },
    {
      label: 'Benefícios',
      icon: () => <FontAwesomeIcon icon={faGift} className="menu-icon" />,
    },
    {
      label: 'Planos',
      icon: () => <FontAwesomeIcon icon={faTags} className="menu-icon" />,
    },
    {
      label: 'Fale Conosco',
      icon: () => <FontAwesomeIcon icon={faPhone} className="menu-icon" />,
    }
  ];

  const start = <Image src={logoHome as unknown as string} alt="Logo Home" height="30" className="mr-2"></Image>; // Logo opcional

  const end = (
    <div>
      <Button
        label="Login"
        className="p-button-sm p-button-text mr-2 rounded-lg border border-green-500 text-black px-3 py-2 custom-rounded"
        rounded={true}
      />  {/* Botão de Login */}
      <Button label="Registre-se" className="p-button-sm p-button-text mr-2 rounded-lg border border-green-500 text-black px-3 py-2 custom-rounded-regist"
        rounded={true}
      /> {/* Botão de Cadastrar */}
    </div>
  );


  const handleSwitch = () => {
    setIsYearly((prevState) => !prevState); // Alterna entre mensal e anual
  };

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Declaração do estado para controlar o colapso do navbar
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Função para alternar o estado de colapso
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //import { Component } from "react";

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div className="card sticky-menu shadow-lg bg-white rounded-lg p-4">
        <Menubar
          className="custom-menubar text-button bg-gray-100 rounded-md px-4 py-2 pt-8" // Espaçamento para descer o menubar
          model={items}
          start={start}
          end={end}
        />
      </div>

      <main className=" flex-col gap-8 row-start-2 items-center">
        <div className="flex-col items-center justify-center h-screen text-center p-0">
          {/*<p>CRM - Chatbot IA - Disparo de Mensagens</p>*/}
          <h1 className='mt-5'>
            Chatbot com <span style={{ color: '#00ED87' }}>Inteligência </span>
            <span style={{ color: 'blue' }}>Artificial</span>:
            <br />
            Faça o trabalho de 10 pessoas usando
            <br />
            <span style={{ color: '#00ED87' }}>Inteligência </span>
            <span style={{ color: 'blue' }}>Artificial</span> e
            <br />
            escale seu negócio 10x mais!
          </h1>

          {/* <a
            href="https://www.exemplo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-4 z-10 p-button-sm p-button-text mr-2 rounded-lg border border-green-500 text-black px-3 py-2 custom-rounded">Teste grátis por 15 dias</Button>
          </a> */}

          <div className="z-10 flex items-center justify-center mt-5 text-center">
            <PulsatingButton className='z-10'>Teste grátis por 15 dias</PulsatingButton>
          </div>

          {!isMobile && <Globe className="top-28" />}
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>

        <h3 className="flex mt-20 items-center justify-center text-center">Nosso CEO tem um recado para você!</h3>

        <div className="z-10 flex flex-row items-center justify-between h-screen text-center">
          <div className="flex-1 flex justify-end"> {/* Flex para alinhar o vídeo à direita */}
            <video
              id="myVideo"
              width="100%"
              style={{
                borderRadius: "10px", // Bordas arredondadas em todos os lados
                border: "5px solid #01ed88", // Borda de 10px com cor verde
                overflow: "hidden",
                zIndex: 999,
              }}
              controls
              loop
              muted
            >
              <source src="https://player.vimeo.com/video/1020693387?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>


        {/* <div className="z-10 flex min-h-64 items-center justify-center rounded-lg border bg-white dark:bg-black">
          <TextReveal text="Nosso CEO tem um recado para você!" />
        </div> */}


        <div className="flex h-[500px] w-full flex-col gap-4 mt-10 lg:h-[250px] lg:flex-row">

          <div className="flex flex-col items-center justify-center lg:w-1/2">
            <h2 className=" mb-4">Organize todos os seus clientes em um <span style={{ color: 'blue' }}>único</span> <span style={{ color: '#00ED87' }}>sistema</span>, que automatiza os processos de vendas.</h2>
            {/* <p className="text-end px-4">
              A Nextrack é prática e ideal para quem quer organizar e automatizar suas vendas de forma simples.
              A escolha número 1 de empreendedores para gerenciar o seu comercial.
            </p> */}
          </div>

          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl lg:w-1/2"
            gradientColor={theme === "blue" ? "#262626" : "#D9D9D955"}
          >
            <div className="w-full h-[250px] overflow-hidden rounded-t-lg">
              <img
                src="https://pv-magazine-usa.com/wp-content/uploads/sites/2/2022/03/NexTracker-Selects-Additional-19-1536x1024.jpg"
                alt="Descrição da imagem"
                className="w-full h-full object-cover"
              />
            </div>
          </MagicCard>


        </div>


        <div className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
          <MagicCard
            className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl lg:w-1/2"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <img
              src="https://pv-magazine-usa.com/wp-content/uploads/sites/2/2022/03/NexTracker-Selects-Additional-19-1536x1024.jpg"
              alt="Descrição da imagem"
              className="w-full h-auto object-cover"
            />
          </MagicCard>

          <div className="flex flex-col items-center justify-center lg:w-1/2">
            <h2 className="text-4xl mb-4">Fácil de usar e feita para vender mais!</h2>
            <p className="text-end px-3">
              A Nexttrack é prática e ideal para quem quer organizar e automatizar suas vendas de forma simples.
              A escolha número 1 de empreendedores para gerenciar o seu comercial.
            </p>
          </div>
        </div>

        <div className="flex mt-5 mb-3 items-center justify-center text-center">
          <h3 className=" text-black mt-4 text-wrap">
            <b>O que a </b>
            <span style={{ color: '#00ED87' }}><b>Inteligência </b></span>
            <span style={{ color: 'blue' }}><b>Artificial</b></span>
            <br />
            <b>pode fazer por você?</b>
          </h3>
        </div>


        <div
          className={
            "flex h-[100px] w-full flex-col gap-4 lg:h-[200px] lg:flex-row  flex-col items-center justify-center" // Diminuí a altura
          }
        >
          <MagicCard
            className="flex-col items-center justify-center w-[60%] shadow-2xl text-xl"
            style={{
              background: `linear-gradient(to right, #015fff, #01ed88)`, // Gradiente de azul para verde
              borderRadius: '8px', // Borda arredondada
              padding: '20px' // Espaçamento opcional
            }}
          >
            <div className="flex w-full justify-center">
              <div className="mx-4 text-center">
                <ul className="mt-3 gap-2 flex flex-col">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 flex-shrink-0 text-white">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span className="text-base text-white font-bold whitespace-normal">
                      Atendimento inicial e agendamentos (SDR): Configure nossa inteligência para realizar o primeiro atendimento ao seu lead e conduzi-lo até um agendamento presencial ou online.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 flex-shrink-0 text-white">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span className="text-base text-white font-bold whitespace-normal">
                      Vendas: Imagine ela fazendo seu processo de vendas completo. Isso mesmo, nossas configurações permitem que ela inicie e finalize uma venda, de forma humanizada e automática.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 flex-shrink-0 text-white">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span className="text-base text-white font-bold whitespace-normal">
                      Suporte ao Cliente: A IA responde dúvidas e presta suporte de forma ágil, aumentando o sucesso do seu cliente.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </MagicCard>

        </div>

        <div className="flex mt-5 items-center justify-center text-center">
          <h3 className=" text-black mt-4 text-wrap">Tome a decisão de qual empreendedor você quer ser!</h3>
        </div>

        <div className="flex mt-5 items-center justify-center text-center">
          <h3 className=" text-black mt-4 text-wrap">Descida onde sua empresa vai estar no futuro!</h3>
        </div>

        <div className="flex mt-5 items-center justify-center text-center">


          {/* Replique os outros planos de forma similar */}

          {/*  <div className="text-center mt-5 flex flex-col items-center justify-center text-center">
            {/* <FontAwesomeIcon icon={faArrowLeft} className="text-xl mb-2" />*/}

          {/* <h3 className="text-2xl font-bold">Tome a decisão de qual empreendedor você quer ser!</h3> */}

          {/* <FontAwesomeIcon icon={faArrowRight} className="text-xl mt-2" />
          </div>

        */}

          <div className="col-span-1 flex h-full">
            <div
              className="rounded-2xl border-[1px] border-black-600 p-6 bg-gray-500 text-center lg:flex lg:flex-col lg:justify-center relative border-border z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] origin-right h-full"
              style={{ opacity: 1, transform: 'translateX(30px) scale(0.94)' }}
            >
              <div>
                <h2 className="text-base font-semibold" style={{ fontSize: '36px', fontWeight: 'bold' }}>
                  <span className="text-red-600">SEM</span> <span className="text-white">A INTELIGÊNCIA ARTIFICIAL</span>
                </h2>

                <ul className="mt-5 gap-2 flex flex-col">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x mr-2">
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                    <span className="text-white self-start flex-1">Vai ver seus concorrentes<br /> crescendo: Seus concorrentes podem tomar decisão antes que você, e você vai ficar assistindo eles crescerem.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x mr-2">
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                    <span className="text-white self-start flex-1">Estagnação: Quem não cresce<br /> e se atualiza acaba ficando<br /> estagnado, e estagnação é possibilidade clara de fechar as<br /> portas.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x mr-2">
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                    <span className="text-white self-start flex-1">Alto custo de operação: Se para<br /> crescer você precisa de pessoas,<br /> seus custos irão subir toda<br /> vez que quiser escalar, se não<br /> quiser controlar sua operação, não se<br /> paga.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex h-full">
            <div
              className="rounded-2xl border-[1px] border-blue-500 p-6 bg-gradient-to-r from-green-500 to-blue-500 text-center lg:flex lg:flex-col lg:justify-center relative border-border z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] origin-right h-full"
              style={{ opacity: 1, transform: 'translateX(30px) scale(0.94)' }}
            >
              <div>
                <h2 className="text-base font-semibold" style={{ fontSize: '36px', fontWeight: 'bold' }}>
                  <span className="text-green-900">COM</span> <span className="text-white">A INTELIGÊNCIA ARTIFICIAL</span>
                </h2>

                <ul className="mt-5 gap-2 flex flex-col">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span className="text-white">Líder de mercado: Atendendo 10x mais clientes com um número muito menor de pessoas.</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span className="text-white">Crescimento exponencial: Empresa que atende mais, cresce mais.</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span className="text-white">Economia Financeira:<br /> Investimento muito menor em<br /> folha de pagamento, além óbvio<br /> de economia de tempo.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>



        <section id="pricing">
          <div className="relative container mx-auto px-4 py-16 max-w-7xl">
            <div className="text-center space-y-4 pb-6">
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
                Uma decisão <span style={{ color: 'blue' }}>AGORA</span> pode mudar seu negócio!
              </h3>
              <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">ESCOLHA SEU PLANO</h2>
            </div>
            <div className="flex justify-center mb-10">
              <span className="mr-2 font-semibold">Mensal</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <button
                  type="button"
                  role="switch"
                  aria-checked={isYearly}
                  onClick={handleSwitch}
                  className={`peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${isYearly ? 'bg-primary' : 'bg-input'}`}
                >
                  <span
                    className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${isYearly ? 'translate-x-5' : 'translate-x-0'}`}
                  ></span>
                </button>
              </label>
              <span className="ml-2 font-semibold">Anual</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center">
              <div className="rounded-2xl border-[1px] border-blue-500 p-6 bg-blue-500 text-center lg:flex lg:flex-col lg:justify-center relative border-border z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] origin-right" style={{ opacity: 1, transform: 'translateX(30px) scale(0.94)' }}>
                <div>
                  <p className="text-base font-semibold text-white">Plano Básico</p>
                  <p className="mt-6 flex items-center justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-white">
                      {isYearly ? 'R$1190,00' : 'R$119,90'}
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-white">/
                      {isYearly ? 'Anual' : 'Mensal'}
                    </span>
                  </p>
                  <p className="text-xs leading-5 text-white">
                    {isYearly ? 'Cobrado anualmente' : 'Cobrado mensalmente'}
                  </p>
                  <ul className="mt-5 gap-2 flex flex-col">
                    {/* Lista de recursos */}
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Até 2 Usuários</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Até 3 Campanhas</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Envio de Mensagens Ilimitadas</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>30 Dias de retenção de mensagens</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Captação de Clientes</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Até 2 Usuários</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Até 2 Usuários</span>
                    </li>

                    {/* ... outros itens ... */}
                  </ul>
                  <hr className="w-full my-4" />
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-input h-10 px-4 py-2 group relative w-full gap-2 text-lg font-semibold bg-[#00ED87] text-white hover:bg-green-600 hover:text-white transition duration-300 no-underline"
                    href="https://app.nextrack.com.br/auth/register?referralCode=a5795dd2-eb6e-4586-b9ae-45d8d2dcb86c&planId=e2f6436a-f7b3-456a-af60-f3377190a893"
                  >
                    Assinar Agora
                  </a>
                  <p className="mt-6 text-xs leading-5 text-white">Perfeito para indivíduos e pequenos projetos</p>
                </div>
              </div>

              {/* Repita os outros planos aqui, garantindo a mesma estrutura */}

              <div className="rounded-2xl border-[1px] border-blue-500 p-6 bg-blue-500 text-center relative border-border z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] origin-right" style={{ opacity: 1, transform: 'translateX(30px) scale(0.94)' }}>
                <div>
                  <p className="text-base font-semibold text-white">Plano Completo</p>
                  <p className="mt-6 flex items-center justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-white">
                      {isYearly ? 'R$227,00' : 'R$119,90'}
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-white">/
                      {isYearly ? 'Anual' : 'Mensal'}
                    </span>
                  </p>
                  <p className="text-xs leading-5 text-white">
                    {isYearly ? 'Cobrado anualmente' : 'Cobrado mensalmente'}
                  </p>
                  <ul className="mt-5 gap-2 flex flex-col">
                    {/* Lista de recursos */}
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Até 2 Usuários</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Até 3 Campanhas</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Envio de Mensagens Ilimitadas</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>30 Dias de retenção de mensagens</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Captação de Clientes</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Até 2 Usuários</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Até 2 Usuários</span>
                    </li>

                    {/* ... outros itens ... */}
                  </ul>
                  <hr className="w-full my-4" />
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-input h-10 px-4 py-2 group relative w-full gap-2 text-lg font-semibold bg-[#00ED87] text-white hover:bg-green-600 hover:text-white transition duration-300 no-underline"
                    href="https://app.nextrack.com.br/auth/register?referralCode=a5795dd2-eb6e-4586-b9ae-45d8d2dcb86c&planId=e2f6436a-f7b3-456a-af60-f3377190a893"
                  >
                    Assinar Agora
                  </a>
                  <p className="mt-6 text-xs leading-5 text-white">Perfeito para indivíduos e pequenos projetos</p>
                </div>
              </div>


              <div className="rounded-2xl border-[1px] border-blue-500 p-6 bg-blue-500 text-center relative border-border z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] origin-right" style={{ opacity: 1, transform: 'translateX(30px) scale(0.94)' }}>
                <div>
                  <p className="text-base font-semibold text-white">Plano Personalizado</p>
                  <p className="mt-6 flex items-center justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-white">
                      Contate-nos
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-white">/
                      {isYearly ? 'Anual' : 'Mensal'}
                    </span>
                  </p>
                  <p className="text-xs leading-5 text-white">
                    {isYearly ? 'Cobrado anualmente' : 'Cobrado mensalmente'}
                  </p>
                  <ul className="mt-5 gap-2 flex flex-col">
                    {/* Lista de recursos */}
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Usuários ilimitados</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Campanhas personalizadas</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Envio de Mensagens Ilimitadas</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>45 Dias de retenção de mensagens</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Captação de Clientes online</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mr-2 h-4 w-4 text-white">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className='text-white'>Atualizações Personalizadas</span>
                    </li>


                    {/* ... outros itens ... */}
                  </ul>
                  <hr className="w-full my-4" />
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-input h-10 px-4 py-2 group relative w-full gap-2 text-lg font-semibold bg-[#00ED87] text-white hover:bg-green-600 hover:text-white transition duration-300 no-underline"
                    href="https://app.nextrack.com.br/auth/register?referralCode=a5795dd2-eb6e-4586-b9ae-45d8d2dcb86c&planId=e2f6436a-f7b3-456a-af60-f3377190a893"
                  >
                    Assinar Agora
                  </a>
                  <p className="mt-6 text-xs leading-5 text-white">Perfeito para indivíduos e pequenos projetos</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/*<Button>AGENDE UMA DEMOSTRAÇÃO</Button> */}

        {/* <a className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-input h-10 px-4 py-2 group relative w-full gap-2 text-lg font-semibold bg-white text-black hover:bg-primary hover:text-white" href="#">
          AGENDE UMA DEMOSTRAÇÃO
        </a> */}


        {
          isVisible && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-20 right-4 h-12 w-12 bg-blue-500 text-white rounded-full shadow-lg transition-opacity duration-300 hover:bg-blue-600 flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <FontAwesomeIcon icon={faUpLong} className="text-xl" />
            </button>
          )
        }

        <a
          href="https://static.elfsight.com/platform/platform.js" // Substitua "your-number" pelo número do WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 h-12 mt-20 w-12 bg-green-500 text-white rounded-full shadow-lg transition-opacity duration-300 hover:bg-green-600 flex items-center justify-center"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
        </a>


        <div className="z-10 flex items-center justify-center mt-5 text-center">
          <PulsatingButton>Agende uma demonstração!</PulsatingButton>
        </div>


        {/*<RainbowButton>Agende uma demostração</RainbowButton>; */}
      </main >



      <footer className="row-start-3 flex flex-col items-center gap-4">
        <div className="flex gap-6 flex-wrap justify-center">
          <a
            className="flex items-center gap-2 text-current"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPhone} />
            (49) 98400-8398
          </a>

          <a
            className="flex items-center gap-2 text-current"
            href="https://static.elfsight.com/platform/platform.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            (49) 9962-5742
          </a>

          <a
            className="flex items-center gap-2 text-current"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            contato@nextrack.com
          </a>
        </div>

        {/* Texto adicional abaixo dos links */}
        <p className="text-center text-sm text-gray-500">
          <span style={{ color: '#01EC89' }}>Next</span><span style={{ color: '#3B82F6' }}>rack</span> - Soluções em Rastreamento | Todos os direitos reservados.
        </p>
      </footer>
    </div >
  );
}


export default Home;
