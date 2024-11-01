"use client";  // Adicione isso no topo do arquivo

import './MyMenu.css'; // Arquivo CSS personalizado

import Image from 'next/image';

import ialamp from './ai idea.png'

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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStar, faUpLong, faHome, faGift, faTags } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import { useEffect, useState } from "react";
// import ShimmerButton from "@/components/ui/shimmer-button";


const Home = () => {
  const [isYearly, setIsYearly] = useState(true);

  //const ialamp1 = <Image src={ialamp as unknown as string} alt="ialamp" height="30" className="mr-2"></Image>;// Logo opcional

  const { theme } = useTheme();

  const items = [
    {
      label: 'Início',
      icon: () => <FontAwesomeIcon icon={faHome} className="menu-icon" />,
      command: () => window.location.href = '#inicio'
    },
    {
      label: 'Benefícios',
      icon: () => <FontAwesomeIcon icon={faGift} className="menu-icon" />,
      command: () => window.location.href = '#beneficios'
    },
    {
      label: 'Planos',
      icon: () => <FontAwesomeIcon icon={faTags} className="menu-icon" />,
      command: () => window.location.href = '#planos'
    },
    {
      label: 'Fale Conosco',
      icon: () => <FontAwesomeIcon icon={faPhone} className="menu-icon" />,
      command: () => window.location.href = '#fale-conosco'
    }
  ];

  const start = <Image src={logoHome as unknown as string} alt="Logo Home" height="30" className="mr-2"></Image>;


  const end = (
    <div>
      <Button
        label="Login"
        className="p-button-sm p-button-text mr-2 rounded-lg text-black px-3 py-2 custom-rounded"
        rounded={true}
        style={{ borderColor: "#01ed88", borderWidth: "3px", borderStyle: "solid" }}
      />
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
        <section id="inicio">
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
              <PulsatingButton className='z-10 text-black font-bold'>ACESSE AGORA</PulsatingButton>
            </div>

            {!isMobile && <Globe className="top-28" />}
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>
        </section>

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

        <section id="beneficios">
          <div className="flex pt-10 mb-3 items-center justify-center text-center">
            <h3 className="text-black text-wrap">
              <b>Realize todo seu atendimento no <br />Whatsapp e Instagram</b>
              <br />
              <b>com </b>
              <span style={{ color: '#00ED87' }}><b>Inteligência </b></span>
              <span style={{ color: 'blue' }}><b>Artificial</b></span>!
              <br />
            </h3>
          </div>
        </section>


        <div className="flex h-[500px] w-full flex-col gap-4 mt-10 lg:h-[250px] lg:flex-row">

          <div className="flex flex-col items-center justify-center lg:w-1/2">
            <h2 className="mb-4 text-md lg:text-base">Uma inteligência artificial conversando pelo whatsapp e no instagram, com seus clientes, com uma comunicação IDÊNTICA<br />a sua!</h2>
            {/* <p className="text-end px-4">
              A Nextrack é prática e ideal para quem quer organizar e automatizar suas vendas de forma simples.
              A escolha número 1 de empreendedores para gerenciar o seu comercial.
            </p> */}
          </div>

          <div className="w-[200px] h-[200px] overflow-hidden flex justify-center items-center rounded-lg">
            <img
              src="./ai idea.png"
              alt="ia idea"
              width={200} // Define a largura desejada
              height={200} // Define a altura desejada
              className="w-full h-full object-cover"
            />
          </div>



        </div>

        <div
          className="flex items-center justify-center text-center bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(to right, #3b82f6, #10b981)', // Força o gradiente se a classe falhar
          }}
        >
          <h3 className="text-white m-3">
            <b>A escolha nº1 dos empreendedores para economizar tempo e dinheiro.</b>
          </h3>
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
            "flex h-[100px] w-full flex-col gap-4 lg:h-[200px] lg:flex-row items-center justify-center"
          }
        >
          <MagicCard
            className="flex-col items-center justify-center w-full lg:w-[80%] shadow-2xl text-xl"
            style={{
              backgroundImage: "linear-gradient(to right, #015fff, #01ed88)", // Gradiente de azul para verde
              borderRadius: "8px", // Borda arredondada
              padding: "20px", // Espaçamento
              minHeight: "300px", // Altura mínima ajustada para caber mais conteúdo
            }}
          >
            <div className="flex w-full justify-center">
              <div className="mx-4 text-center">
                <ul className="mt-3 gap-2 flex flex-col">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check mr-2 flex-shrink-0 text-white"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span className="text-base text-white font-bold whitespace-normal">
                      Atendimento inicial e agendamentos (SDR): Configure nossa
                      inteligência para realizar o primeiro atendimento ao seu lead e
                      conduzi-lo até um agendamento presencial ou online.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check mr-2 flex-shrink-0 text-white"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span className="text-base text-white font-bold whitespace-normal">
                      Vendas: Imagine ela fazendo seu processo de vendas completo. Isso
                      mesmo, nossas configurações permitem que ela inicie e finalize uma
                      venda, de forma humanizada e automática.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check mr-2 flex-shrink-0 text-white"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span className="text-base text-white font-bold whitespace-normal">
                      Suporte ao Cliente: A IA responde dúvidas e presta suporte de
                      forma ágil, aumentando o sucesso do seu cliente.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </MagicCard>

        </div>

        <div className="flex mt-5 items-center justify-center text-center">
          <h3 className="text-2xl text-black mt-4 text-wrap">Esse é o futuro e sua empresa precisa estar nele!</h3>
        </div>

        <div className="flex mt-5 items-center justify-center text-center">
          <h3 className="text-black mt-4 text-wrap">Descida onde sua empresa<br /> vai estar no futuro!</h3>
        </div>

        <div className="flex flex-col lg:flex-row mt-5 items-center lg:items-stretch justify-center text-center gap-6 w-full">
          <div className="flex h-full w-full max-w-md mt-5 mb-5 ">
            <div
              className="relative rounded-2xl border border-gray-600 p-6 bg-gray-500 lg:bg-gray-600 text-left shadow-2xl w-full flex flex-col min-h-[500px] justify-between"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                <span className="text-red-600">SEM</span> A INTELIGÊNCIA ARTIFICIAL
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="red"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3"
                  >
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                  <span className="text-white">Veja seus concorrentes crescendo: Eles podem tomar decisões antes que você e você ficará assistindo ao crescimento deles.</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="red"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3"
                  >
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                  <span className="text-white">Estagnação: Quem não cresce e se atualiza fica estagnado, e isso pode levar ao fechamento das portas.</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="red"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3"
                  >
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                  <span className="text-white">Alto custo de operação: Se crescer exige mais pessoas, seus custos aumentam sempre que escalar. Sem controle, a operação não se sustenta.</span>
                </li>
              </ul>
              <img
                src="https://via.placeholder.com/50" // Substitua pelo URL da sua imagem
                alt="Imagem"
                className="absolute bottom-4 right-4 w-12 h-12"
              />
            </div>
          </div>

          <div className="flex h-full w-full max-w-md mt-5 mb-5">
            <div
              className="relative rounded-2xl border border-blue-500 p-6 bg-gradient-to-r from-green-500 to-blue-500 text-left shadow-2xl w-full flex flex-col min-h-[500px] justify-between"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                <span className="text-green-900">COM</span> A INTELIGÊNCIA ARTIFICIAL
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="green"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="text-white">Líder de mercado: Atenda 10x mais clientes com um número muito menor de pessoas.</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="green"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="text-white">Crescimento exponencial: Empresas que atendem mais, crescem mais.</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="green"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span className="text-white">Economia financeira: Investimento muito menor em folha de pagamento, além de economia de tempo.</span>
                </li>
              </ul>
              <img
                src="https://via.placeholder.com/50" // Substitua pelo URL da sua imagem
                alt="Imagem"
                className="absolute bottom-4 right-4 w-12 h-12"
              />
            </div>
          </div>
        </div>







        <section id="planos">
          <div className="relative container mx-auto px-4 py-16 max-w-7xl">
            <div className="text-center space-y-4 pb-6">
              <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
                Uma decisão <span style={{ color: 'blue' }}>AGORA</span> pode mudar seu negócio!
              </h3>
              <h2 className="text-md text-black font-mono font-medium tracking-wider uppercase">ESCOLHA SEU PLANO</h2>
            </div>
            <div className="flex justify-center mb-10">
              <span className="mr-2 font-semibold">Desconto Anual</span>
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
              <span className="ml-2 font-semibold"></span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center p-4">
            <div className="rounded-2xl border border-blue-500 p-6 bg-blue-500 text-center shadow-lg w-full max-w-xs">
                <div>
                  <p className="text-lg font-semibold text-white">Plano Básico</p>
                  <p className="mt-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{isYearly ? 'R$99,17' : ''}</span>
                    
                    <span className="text-sm font-semibold leading-6 text-white">/ {isYearly ? 'Por Mês' : 'Mensal'}</span>
                  </p>
                  <span className="text-1xl font-bold text-white">{isYearly ? 'R$1190,00' : 'R$119,90'}</span>
                  <p className="text-xs leading-5 text-white">{isYearly ? 'Cobrado anualmente' : 'Cobrado mensalmente'}</p>
                  <ul className="mt-5 space-y-2 text-left">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">Até 2 Usuários</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">Até 3 Campanhas</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">Envio de Mensagens Ilimitadas</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">30 Dias de retenção de mensagens</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">Captação de Clientes</span>
                    </li>
                  </ul>
                  <hr className="w-full my-4 border-white" />
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full h-10 px-4 py-2 w-full text-lg font-semibold bg-[#00ED87] text-white hover:bg-green-600 transition duration-300"
                    href="https://app.nextrack.com.br/auth/register?referralCode=a5795dd2-eb6e-4586-b9ae-45d8d2dcb86c&planId=e2f6436a-f7b3-456a-af60-f3377190a893"
                  >
                    Assinar Agora
                  </a>
                  <p className="mt-6 text-xs leading-5 text-white">Perfeito para indivíduos e pequenos projetos</p>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-500 p-6 bg-blue-500 text-center shadow-lg w-full max-w-xs">
                <div>
                  <p className="text-lg font-semibold text-white">Plano Básico</p>
                  <p className="mt-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{isYearly ? 'R$99,17' : ''}</span>
                    
                    <span className="text-sm font-semibold leading-6 text-white">/ {isYearly ? 'Por Mês' : 'Mensal'}</span>
                  </p>
                  <span className="text-1xl font-bold text-white">{isYearly ? 'R$1190,00' : 'R$119,90'}</span>
                  <p className="text-xs leading-5 text-white">{isYearly ? 'Cobrado anualmente' : 'Cobrado mensalmente'}</p>
                  <ul className="mt-5 space-y-2 text-left">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">Até 2 Usuários</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">Até 3 Campanhas</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">Envio de Mensagens Ilimitadas</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">30 Dias de retenção de mensagens</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">Captação de Clientes</span>
                    </li>
                  </ul>
                  <hr className="w-full my-4 border-white" />
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full h-10 px-4 py-2 w-full text-lg font-semibold bg-[#00ED87] text-white hover:bg-green-600 transition duration-300"
                    href="https://app.nextrack.com.br/auth/register?referralCode=a5795dd2-eb6e-4586-b9ae-45d8d2dcb86c&planId=e2f6436a-f7b3-456a-af60-f3377190a893"
                  >
                    Assinar Agora
                  </a>
                  <p className="mt-6 text-xs leading-5 text-white">Perfeito para indivíduos e pequenos projetos</p>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-500 p-6 bg-blue-500 text-center shadow-lg w-full max-w-xs">
                <div>
                  <p className="text-lg font-semibold text-white">Plano Básico</p>
                  <p className="mt-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{isYearly ? 'R$99,17' : ''}</span>
                    
                    <span className="text-sm font-semibold leading-6 text-white">/ {isYearly ? 'Por Mês' : 'Mensal'}</span>
                  </p>
                  <span className="text-1xl font-bold text-white">{isYearly ? 'R$1190,00' : 'R$119,90'}</span>
                  <p className="text-xs leading-5 text-white">{isYearly ? 'Cobrado anualmente' : 'Cobrado mensalmente'}</p>
                  <ul className="mt-5 space-y-2 text-left">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">Até 2 Usuários</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">Até 3 Campanhas</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">Envio de Mensagens Ilimitadas</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">30 Dias de retenção de mensagens</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      <span className="text-white">Captação de Clientes</span>
                    </li>
                  </ul>
                  <hr className="w-full my-4 border-white" />
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full h-10 px-4 py-2 w-full text-lg font-semibold bg-[#00ED87] text-white hover:bg-green-600 transition duration-300"
                    href="https://app.nextrack.com.br/auth/register?referralCode=a5795dd2-eb6e-4586-b9ae-45d8d2dcb86c&planId=e2f6436a-f7b3-456a-af60-f3377190a893"
                  >
                    Assinar Agora
                  </a>
                  <p className="mt-6 text-xs leading-5 text-white">Perfeito para indivíduos e pequenos projetos</p>
                </div>
              </div>

              {/* Duplicar o bloco acima para outros planos, modificando apenas o título e o conteúdo do plano */}
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



      <section id="fale-conosco">
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
      </section>
    </div >
  );
}


export default Home;
