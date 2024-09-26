import React, { useTransition, useState } from "react";
import { programador } from "../assets";
import TabButton from "./TabButton";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className=" flex flex-wrap justify-between mr-10 mx-5 m w-full">
<div className="text-xl font-bold m-2 mb-2 mt-2 mr-8 ml-2 mx-2 my-2">
  <div className="mx-2  m-2">
<h2>Linguagens de Programação</h2>
</div>


<div className="grid grid-cols-3 gap-0 m-0 ">
<div>
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&color=110D25" alt="" />
    </div>
    <div>
        <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="" />
    </div>
 
    <div>
        <img src="(https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="" />
    </div>
    <div>
        <img src="https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white" alt="" />
    </div>
    <div>
        <img src="ttps://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="" />
    </div>
 
</div>
</div>
     

        <div className="text-xl font-bold m-2 mb-2 mt-2 mr-8 ml-2 mx-2 my-2">
  <div className="mx-2  m-2">
<h2>Linguagens de Marcação</h2>
</div>

<div className="grid grid-cols-3 gap-0 m-0 ">
  
    <div>
        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="" />
    </div>

    <div>
        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="" />
    </div>
    <div>
        <img src="https://img.shields.io/badge/Sass-000?style=for-the-badge&logo=sass" alt="" />
    </div>
    
</div>
</div>


        <div className="text-xl font-bold m-2 mb-2 mt-2 mr-8 ml-2 mx-2 my-2">
  <div className="mx-2  m-2">
<h2>Bibliotecas e Frameworks</h2>
</div>

<div className="grid grid-cols-3 ">
  
    <div>
        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" />
    </div>
    <div>
        <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="" />
    </div>
    <div>
        <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="" />
    </div>
    <div>
        <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="" />
    </div>
    <div>
        <img src="https://img.shields.io/badge/-boostrap-0D1117?style=for-the-badge&logo=bootstrap&labelColor=0D1117" alt="" />
    </div>
    <div>
        <img src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" alt="" />
    </div>
    
</div>
</div>


<div className="text-xl font-bold m-2 mb-2 mt-2 mr-8 ml-2 mx-2 my-2">
  <div className="mx-2  m-2">
<h2>Ferramentas</h2>
</div>


<div className="grid grid-cols-3 ">
  
    <div>
        <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
    </div>
    <div>
        <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="" />
    </div>
    <div>
        <img src="https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white" alt="" />
    </div>
    <div>
        <img src="https://img.shields.io/badge/Figma-696969?style=for-the-badge&logo=figma&logoColor=figma" alt="" />
    </div>
    
</div>
</div>

        <div className="">
        <div className=" ">
          <h2 className="text-xl font-bold m-0 mb-2 mt-0 mr-8 ml-0 mx-0 my-0">
          Databases
          </h2>
          <ul className="list-disc pl-4 mb-4 ">
           <li className="flex items-center mb-2"> 
            <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="" />
           </li>
           <li className="flex items-center mb-2"> 
            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
           </li>
           <li className="flex items-center mb-2"> 
            <img src="https://img.shields.io/badge/PostgreSQL-000?style=for-the-badge&logo=postgresq" alt="" />
           </li>
           <li className="flex items-center mb-2"> 
            <img src="https://img.shields.io/badge/SQLite-000?style=for-the-badge&logo=sqlite&logoColor=07405E" alt="" />

            {/* adicionar postman futuramente */}
           </li>
          
          </ul>
          </div>
        </div>

        <div className="">
        <div className=" ">
          <h2 className="text-xl font-bold m-0 mb-2 mt-0 mr-8 ml-0 mx-0 my-0">
          Cloud Computing
          </h2>
          <ul className="list-disc pl-4 mb-4 ">
           <li className="flex items-center mb-2"> 
            <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="" />
           </li>
           <li className="flex items-center mb-2"> 
            <img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white" alt="" />
           </li>
           <li className="flex items-center mb-2"> 
            <img src="https://img.shields.io/badge/AWS-000.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="" />
           </li>
      
          </ul>
          </div>
        </div>



      


      </div>
    ),
  },


  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>IBMEC - Bacharelado em Engenharia De Computação (Cursando)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Professional Cloud Developer</li>
        <li>Santander - Backend com Java</li>
        <li>AWS Academy Cloud Foundations</li>
        <li> Udemy: JavaScript e TypeScript do básico ao avançado</li>
        <li> Udemy: React.Js e Next.Js</li>
        <li> Udemy: Python e Django | Django Rest(DRF)</li>
        <li> CS50: Introduction to Computer Science</li>
      </ul>
    ),
  },
];



const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src={programador} alt="programador" width={800} height={800} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg text-justify">
          Olá, meu nome é Anderson Lima, eu sou um desenvolvedor Full Stack
          apaixonado por criar aplicações. Aprendo rápido e estou sempre procurando
          expandir meus conhecimentos e conjunto de habilidades. Atualmente estou cursando
          Bacharel em Engenharia De Computação. Sou apaixonado por tecnologia e desenvolvimento.
          Amo a ideia de criar, inovar e inventar. Além disso, tenho um forte interesse em cibersegurança
          e hacking ético. Gosto de explorar técnicas e práticas para proteger sistemas e dados.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Formação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificados{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>

        {/* <div>
          <Image src="assets/programador.svg" width={800} height={800} />
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
