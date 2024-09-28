import{u as w,j as e,H as C,C as f,r,O as N,P as u,a as S,i as A,b as F,c as k,d as B,F as D,e as z,m as n,f as M,g as L,B as O,h as T,R as E}from"./vendor-CCv26RqB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=i(a);fetch(a.href,l)}})();const P=()=>{const{progress:s}=w();return e.jsxs(C,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e.jsx("span",{className:"canvas-loader"}),e.jsxs("p",{style:{fontSize:14,color:"#F1F1F1",fontWeight:800,marginTop:40},children:[s.toFixed(2),"%"]})]})},R=()=>{const s=S("./planet/scene.gltf");return e.jsx("primitive",{object:s.scene,scale:2.5,"position-y":0,"rotation-y":0})},I=()=>e.jsx(f,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:e.jsxs(r.Suspense,{fallback:e.jsx(P,{}),children:[e.jsx(N,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e.jsx(R,{}),e.jsx(u,{all:!0})]})}),H=s=>{const t=r.useRef(),[i]=r.useState(()=>A(new Float32Array(5e3),{radius:1.2}));return F((o,a)=>{t.current.rotation.x-=a/10,t.current.rotation.y-=a/15}),e.jsx("group",{rotation:[0,0,Math.PI/4],children:e.jsx(k,{ref:t,positions:i,stride:3,frustumCulled:!0,...s,children:e.jsx(B,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},_=()=>e.jsx("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:e.jsxs(f,{camera:{position:[0,0,1]},children:[e.jsx(r.Suspense,{fallback:null,children:e.jsx(H,{})}),e.jsx(u,{all:!0})]})}),G="data:image/svg+xml,%3csvg%20fill='%23FFFFFF'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cpath%20d='M%2024%204%20C%2012.972066%204%204%2012.972074%204%2024%20C%204%2035.027926%2012.972066%2044%2024%2044%20C%2035.027934%2044%2044%2035.027926%2044%2024%20C%2044%2012.972074%2035.027934%204%2024%204%20z%20M%2024%207%20C%2033.406615%207%2041%2014.593391%2041%2024%20C%2041%2031.66536%2035.956939%2038.122519%2029%2040.251953%20L%2029%2035.136719%20C%2029%2033.226635%2027.899316%2031.588619%2026.308594%2030.773438%20A%2010%208%200%200%200%2032.4375%2018.720703%20C%2032.881044%2017.355414%2033.376523%2014.960672%2032.199219%2013.076172%20C%2029.929345%2013.076172%2028.464667%2014.632086%2027.765625%2015.599609%20A%2010%208%200%200%200%2024%2015%20A%2010%208%200%200%200%2020.230469%2015.59375%20C%2019.529731%2014.625773%2018.066226%2013.076172%2015.800781%2013.076172%20C%2014.449711%2015.238817%2015.28492%2017.564557%2015.732422%2018.513672%20A%2010%208%200%200%200%2021.681641%2030.779297%20C%2020.3755%2031.452483%2019.397283%2032.674042%2019.097656%2034.15625%20L%2017.783203%2034.15625%20C%2016.486203%2034.15625%2015.98225%2033.629234%2015.28125%2032.740234%20C%2014.58925%2031.851234%2013.845172%2031.253859%2012.951172%2031.005859%20C%2012.469172%2030.954859%2012.144453%2031.321484%2012.564453%2031.646484%20C%2013.983453%2032.612484%2014.081391%2034.193516%2014.650391%2035.228516%20C%2015.168391%2036.160516%2016.229687%2037%2017.429688%2037%20L%2019%2037%20L%2019%2040.251953%20C%2012.043061%2038.122519%207%2031.66536%207%2024%20C%207%2014.593391%2014.593385%207%2024%207%20z'/%3e%3c/svg%3e",V="data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20fill='%23FFFFFF'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20width='48px'%20height='48px'%3e%3cpath%20d='M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z%20M9,17H6.477v-7H9%20V17z%20M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z%20M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977%20C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z'/%3e%3c/svg%3e",U="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cradialGradient%20id='yOrnnhliCrdS2gy~4tD8ma'%20cx='19.38'%20cy='42.035'%20r='44.899'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23fd5'/%3e%3cstop%20offset='.328'%20stop-color='%23ff543f'/%3e%3cstop%20offset='.348'%20stop-color='%23fc5245'/%3e%3cstop%20offset='.504'%20stop-color='%23e64771'/%3e%3cstop%20offset='.643'%20stop-color='%23d53e91'/%3e%3cstop%20offset='.761'%20stop-color='%23cc39a4'/%3e%3cstop%20offset='.841'%20stop-color='%23c837ab'/%3e%3c/radialGradient%3e%3cpath%20fill='url(%23yOrnnhliCrdS2gy~4tD8ma)'%20d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20%20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20%20C42.014,38.383,38.417,41.986,34.017,41.99z'/%3e%3cradialGradient%20id='yOrnnhliCrdS2gy~4tD8mb'%20cx='11.786'%20cy='5.54'%20r='29.813'%20gradientTransform='matrix(1%200%200%20.6663%200%201.849)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%234168c9'/%3e%3cstop%20offset='.999'%20stop-color='%234168c9'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cpath%20fill='url(%23yOrnnhliCrdS2gy~4tD8mb)'%20d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20%20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20%20C42.014,38.383,38.417,41.986,34.017,41.99z'/%3e%3cpath%20fill='%23fff'%20d='M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z%20M24,19c-2.757,0-5,2.243-5,5%20s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z'/%3e%3ccircle%20cx='31.5'%20cy='16.5'%20r='1.5'%20fill='%23fff'/%3e%3cpath%20fill='%23fff'%20d='M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12%20C37,33.86,33.859,37,30,37z%20M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z'/%3e%3c/svg%3e",$="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='48px'%20height='48px'%3e%3cpath%20fill='%238c9eff'%20d='M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z%20M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z%20M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z'/%3e%3c/svg%3e",q="/assets/programador-BeFnzMDD.svg",j="/assets/logo-C_6N-iG5.svg",b=({href:s,title:t})=>e.jsx("a",{href:s,className:"block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white",children:t}),J=({links:s,onClick:t,className:i})=>e.jsx("ul",{className:`flex flex-col py-4 items-center ${i}`,onClick:t,children:s.map((o,a)=>e.jsx("li",{children:e.jsx(b,{href:o.path,title:o.title})},a))}),W=[{title:"Sobre",path:"#about"},{title:"Projetos",path:"#projects"},{title:"Contato",path:"#contact"}],Q=({})=>e.jsx("ul",{className:"flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0",children:W.map((s,t)=>e.jsx("li",{children:e.jsx(b,{href:s.path,title:s.title})},t))}),g=[{title:"Sobre",path:"#about"},{title:"Projetos",path:"#projects"},{title:"Contato",path:"#contact"}],K=()=>{const[s,t]=r.useState(!1),i=()=>{t(!1)};return e.jsxs("nav",{className:"fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#050816] bg-opacity-100",children:[e.jsxs("div",{className:"flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2",children:[e.jsx("a",{href:"/",className:"text-2xl md:text-5xl text-white font-semibold",children:e.jsx("div",{style:{display:"flex",alignItems:"center"},children:e.jsxs("span",{style:{fontSize:"18px",verticalAlign:"middle"},children:["<",e.jsx("span",{style:{display:"inline-block",verticalAlign:"middle",marginLeft:"0px",marginRight:"auto"},children:e.jsx("img",{src:j,alt:"logo-anderson",width:40,height:40})}),"/>"]})})}),e.jsx("div",{className:"mobile-menu block md:hidden",children:s?e.jsx("button",{onClick:()=>t(!1),className:"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white",children:e.jsx(z,{className:"h-5 w-5"})}):e.jsx("button",{onClick:()=>t(!0),className:"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white",children:e.jsx(D,{className:"h-5 w-5"})})}),e.jsx("div",{className:"menu hidden md:block md:w-auto",id:"navbar",children:e.jsx(Q,{links:g,onClick:i})})]}),s?e.jsx(J,{links:g,onClick:i}):null]})},X=()=>e.jsx("section",{className:"lg:py-16",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-12",children:[e.jsxs(n.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},className:"col-span-8 place-self-center text-center sm:text-left justify-self-start",children:[e.jsxs("h1",{className:"text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold",children:[e.jsxs("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600",children:["Olá, eu sou"," "]}),e.jsx("br",{}),e.jsx(M,{sequence:["Anderson",1e3,"Full-Stack",1e3,"Ethical Hacker",1e3],wrapper:"span",speed:50,repeat:1/0})]}),e.jsx("div",{children:e.jsx("p",{className:"text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl",children:"(:"})}),e.jsxs("div",{className:"relative",children:[e.jsx("a",{href:"/#contact",className:"px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white",children:"Contrate-me"}),e.jsx("a",{href:"/",className:"px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3",children:e.jsx("span",{className:"block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2",children:"Download CV"})})]})]}),e.jsxs(n.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},className:"col-span-4 place-self-center mt-4 lg:mt-0",children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"z-10",children:[e.jsx("h5",{className:"text-xl font-bold text-white my-2",children:"Vamos nos conectar"}),e.jsxs("p",{className:"text-[#ADB7BE] mb-5 max-w-md text-justify",children:[" ","Atualmente estou em busca de novas oportunidades, minha caixa de entrada está sempre aberta. Se você tiver alguma dúvida ou apenas quiser dizer oi, farei o possível para entrar em contato com você!"]}),e.jsx("br",{}),e.jsxs("div",{className:"socials flex justify-center md:justify-start gap-2  ",children:[e.jsx("a",{className:"float",href:"https://www.instagram.com/oieanderson",target:"_blank",alt:"icon instagram",children:e.jsx("img",{src:U,alt:"Instagram Icon"})}),e.jsx("br",{}),e.jsx("a",{className:"float",href:"https://www.github.com/andersonodev",target:"_blank",alt:"icon instagram",children:e.jsx("img",{src:G,alt:"Github Icon"})}),e.jsx("br",{}),e.jsx("a",{className:"float",href:"./",target:"_blank",alt:"icon instagram",children:e.jsx("img",{src:V,alt:"Linkedin Icon"})}),e.jsx("br",{}),e.jsx("a",{className:"float",href:"https://discordapp.com/users/288341344685129731",target:"_blank",alt:"icon instagram",children:e.jsx("img",{src:$,alt:"Discord Icon"})})]})]}),e.jsx("br",{}),e.jsx("br",{})]})]})}),Y={default:{width:0},active:{width:"calc(100% - 0.75rem)"}},x=({active:s,selectTab:t,children:i})=>{const o=s?"text-white":"text-[#ADB7BE]";return e.jsxs("button",{onClick:t,children:[e.jsx("p",{className:`mr-3 font-semibold hover:text-white ${o}`,children:i}),e.jsx(n.div,{animate:s?"active":"default",variants:Y,className:"h-1 bg-primary-500 mt-2 mr-3"})]})},Z=[{title:"Skills",id:"skills",content:e.jsxs("div",{className:" flex flex-wrap justify-between mr-10 mx-5 m w-full",children:[e.jsxs("div",{className:"text-xl font-bold m-2 mb-2 mt-2 mr-8 ml-2 mx-2 my-2",children:[e.jsx("div",{className:"mx-2  m-2",children:e.jsx("h2",{children:"Linguagens de Programação"})}),e.jsxs("div",{className:"grid grid-cols-3 gap-0 m-0 ",children:[e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white&color=110D25",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&logo=swift&logoColor=white",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",alt:""})})]})]}),e.jsxs("div",{className:"text-xl font-bold m-2 mb-2 mt-2 mr-8 ml-2 mx-2 my-2",children:[e.jsx("div",{className:"mx-2  m-2",children:e.jsx("h2",{children:"Linguagens de Marcação"})}),e.jsxs("div",{className:"grid grid-cols-3 gap-0 m-0 ",children:[e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/Sass-000?style=for-the-badge&logo=sass",alt:""})})]})]}),e.jsxs("div",{className:"text-xl font-bold m-2 mb-2 mt-2 mr-8 ml-2 mx-2 my-2",children:[e.jsx("div",{className:"mx-2  m-2",children:e.jsx("h2",{children:"Bibliotecas e Frameworks"})}),e.jsxs("div",{className:"grid grid-cols-3 ",children:[e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/-boostrap-0D1117?style=for-the-badge&logo=bootstrap&labelColor=0D1117",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",alt:""})})]})]}),e.jsxs("div",{className:"text-xl font-bold m-2 mb-2 mt-2 mr-8 ml-2 mx-2 my-2",children:[e.jsx("div",{className:"mx-2  m-2",children:e.jsx("h2",{children:"Ferramentas"})}),e.jsxs("div",{className:"grid grid-cols-3 ",children:[e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white",alt:""})}),e.jsx("div",{children:e.jsx("img",{src:"https://img.shields.io/badge/Figma-696969?style=for-the-badge&logo=figma&logoColor=figma",alt:""})})]})]})]})},{title:"Education",id:"education",content:e.jsx("ul",{className:"list-disc pl-2",children:e.jsx("li",{children:"IBMEC - Bacharelado em Engenharia De Computação (Cursando)"})})},{title:"Certifications",id:"certifications",content:e.jsxs("ul",{className:"list-disc pl-2",children:[e.jsx("li",{children:"Google Professional Cloud Developer"}),e.jsx("li",{children:"Santander - Backend com Java"}),e.jsx("li",{children:"AWS Academy Cloud Foundations"}),e.jsx("li",{children:" Udemy: JavaScript e TypeScript do básico ao avançado"}),e.jsx("li",{children:" Udemy: React.Js e Next.Js"}),e.jsx("li",{children:" Udemy: Python e Django | Django Rest(DRF)"}),e.jsx("li",{children:" CS50: Introduction to Computer Science"})]})}],ee=()=>{const[s,t]=r.useState("skills"),[i,o]=r.useTransition(),a=l=>{o(()=>{t(l)})};return e.jsx("section",{className:"text-white",id:"about",children:e.jsxs("div",{className:"md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16",children:[e.jsx("img",{src:q,alt:"programador",width:800,height:800}),e.jsxs("div",{className:"mt-4 md:mt-0 text-left flex flex-col h-full",children:[e.jsx("h2",{className:"text-4xl font-bold text-white mb-4",children:"Sobre mim"}),e.jsx("p",{className:"text-base lg:text-lg text-justify",children:"Olá, meu nome é Anderson Lima, eu sou um desenvolvedor Full Stack apaixonado por criar aplicações. Aprendo rápido e estou sempre procurando expandir meus conhecimentos e conjunto de habilidades. Atualmente estou cursando Bacharel em Engenharia De Computação. Sou apaixonado por tecnologia e desenvolvimento. Amo a ideia de criar, inovar e inventar. Além disso, tenho um forte interesse em cibersegurança e hacking ético. Gosto de explorar técnicas e práticas para proteger sistemas e dados."}),e.jsxs("div",{className:"flex flex-row justify-start mt-8",children:[e.jsxs(x,{selectTab:()=>a("skills"),active:s==="skills",children:[" ","Skills"," "]}),e.jsxs(x,{selectTab:()=>a("education"),active:s==="education",children:[" ","Formação"," "]}),e.jsxs(x,{selectTab:()=>a("certifications"),active:s==="certifications",children:[" ","Certificados"," "]})]}),e.jsx("div",{className:"mt-8",children:Z.find(l=>l.id===s).content})]})]})})},h={paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",padding:"sm:px-16 px-6 sm:py-16 py-10",heroHeadText:"font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",heroSubText:"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",sectionHeadText:"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",sectionSubText:"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"},p=(s,t,i,o)=>({hidden:{x:s==="left"?"-100%":s==="right"?"100%":0,y:s==="up"||s==="down"?"100%":0},show:{x:0,y:0,transition:{type:t,delay:i,duration:o,ease:"easeOut"}}}),se=(s,t)=>({hidden:{},show:{transition:{staggerChildren:s,delayChildren:t||0}}}),te=(s,t)=>function(){return e.jsxs(n.section,{variants:se(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${h.padding} max-w-7xl mx-auto relative z-0`,children:[e.jsx("span",{className:"hash-span",id:t,children:" "}),e.jsx(s,{})]})},ae=()=>{const s=r.useRef(),[t,i]=r.useState({name:"",email:"",message:""}),[o,a]=r.useState(!1),l=d=>{const{target:m}=d,{name:v,value:y}=m;i({...t,[v]:y})},c=d=>{d.preventDefault(),a(!0),L.send(void 0,void 0,{from_name:t.name,to_name:"Portfolio | Anderson",from_email:t.email,to_email:"andersonodev@gmail.com",message:t.message},void 0).then(()=>{a(!1),alert("Obrigado. Entrarei em contato com você o mais rápido possível."),i({name:"",email:"",message:""})},m=>{a(!1),console.error(m),alert("Ah, algo deu errado. Por favor, tente novamente.")})};return e.jsxs("div",{className:"xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden",children:[e.jsxs(n.div,{variants:p("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 rounded-2xl",children:[e.jsx("p",{className:h.sectionSubText,children:"ENTRAR EM CONTATO"}),e.jsx("h3",{className:h.sectionHeadText,children:"Contato."}),e.jsxs("form",{ref:s,onSubmit:c,className:"mt-12 flex flex-col gap-8",children:[e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Seu Nome"}),e.jsx("input",{type:"text",name:"name",value:t.name,onChange:l,placeholder:"Qual é o seu nome?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Seu e-mail"}),e.jsx("input",{type:"email",name:"email",value:t.email,onChange:l,placeholder:"Qual é o seu endereço de e-mail?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Sua Mensagem"}),e.jsx("textarea",{rows:7,name:"message",value:t.message,onChange:l,placeholder:"O que você quer dizer?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e.jsx("button",{type:"submit",className:"bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary",children:o?"Sending...":"Enviar"})]})]}),e.jsx(n.div,{variants:p("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:e.jsx(I,{})})]})},le=te(ae,"contact"),ie=()=>e.jsx("footer",{className:"footer border z-10 border-t-[#110D25] border-l-transparent border-r-transparent text-white",children:e.jsxs("div",{className:"container p-4 md:p-8 lg:p-12 flex items-center justify-between",children:[e.jsxs("span",{style:{fontSize:"18px",verticalAlign:"middle"},children:["<",e.jsx("span",{style:{display:"inline-block",verticalAlign:"middle",marginLeft:"5px",marginRight:"5px"},children:e.jsx("img",{src:j,alt:"Linkedin Icon",width:40,height:40})}),"/>"]}),e.jsxs("span",{className:"text-slate-600",children:["Todos os direitos reservados. ",e.jsx("br",{}),"Copyright© 2024 Anderson Lima. ",e.jsx("br",{})]})]})}),oe=()=>e.jsx(O,{children:e.jsxs("main",{className:"flex min-h-screen flex-col bg-[#050816]",children:[e.jsx(K,{}),e.jsxs("div",{className:"container mt-24 mx-auto px-12 py-4",children:[e.jsx(X,{}),e.jsx(ee,{})]}),e.jsx("div",{className:"relative z-0 bg-primaryOne",children:e.jsxs("div",{className:"relative z-0",children:[e.jsx(le,{}),e.jsx(_,{})]})}),e.jsx(ie,{})]})});T.createRoot(document.getElementById("root")).render(e.jsx(E.StrictMode,{children:e.jsx(oe,{})}));
