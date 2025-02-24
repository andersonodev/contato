import{u as v,j as e,H as w,C as h,r as o,O as N,P as f,a as C,i as S,b as O,c as P,d as k,F as A,e as L,m as x,f as R,B as F,g as z,R as T}from"./vendor-yZCudRNR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();const E=()=>{const{progress:s}=v();return e.jsxs(w,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e.jsx("span",{className:"canvas-loader"}),e.jsxs("p",{style:{fontSize:14,color:"#F1F1F1",fontWeight:800,marginTop:40},children:[s.toFixed(2),"%"]})]})},I=()=>{const s=C("./planet/scene.gltf");return e.jsx("primitive",{object:s.scene,scale:2.5,"position-y":0,"rotation-y":0})},M=()=>e.jsx(h,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:e.jsxs(o.Suspense,{fallback:e.jsx(E,{}),children:[e.jsx(N,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e.jsx(I,{}),e.jsx(f,{all:!0})]})}),B=s=>{const t=o.useRef(),[r]=o.useState(()=>S(new Float32Array(5e3),{radius:1.2}));return O((l,a)=>{t.current.rotation.x-=a/10,t.current.rotation.y-=a/15}),e.jsx("group",{rotation:[0,0,Math.PI/4],children:e.jsx(P,{ref:t,positions:r,stride:3,frustumCulled:!0,...s,children:e.jsx(k,{transparent:!0,color:"#f272c8",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},H=()=>e.jsx("div",{className:"w-full h-auto absolute inset-0 z-[-1]",children:e.jsxs(h,{camera:{position:[0,0,1]},children:[e.jsx(o.Suspense,{fallback:null,children:e.jsx(B,{})}),e.jsx(f,{all:!0})]})}),g="/assets/logo-C_6N-iG5.svg",j=({href:s,title:t})=>e.jsx("a",{href:s,className:"block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white",children:t}),D=({links:s,onClick:t,className:r})=>e.jsx("ul",{className:`flex flex-col py-4 items-center ${r}`,onClick:t,children:s.map((l,a)=>e.jsx("li",{children:e.jsx(j,{href:l.path,title:l.title})},a))}),_=[{title:"Sobre",path:"#about"},{title:"Projetos",path:"#projects"},{title:"Contato",path:"#contact"}],$=({})=>e.jsx("ul",{className:"flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0",children:_.map((s,t)=>e.jsx("li",{children:e.jsx(j,{href:s.path,title:s.title})},t))}),p=[{title:"Sobre",path:"#about"},{title:"Projetos",path:"#projects"},{title:"Contato",path:"#contact"}],q=()=>{const[s,t]=o.useState(!1),r=()=>{t(!1)};return e.jsxs("nav",{className:"fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#050816] bg-opacity-100",children:[e.jsxs("div",{className:"flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2",children:[e.jsx("a",{href:"/",className:"text-2xl md:text-5xl text-white font-semibold",children:e.jsx("div",{style:{display:"flex",alignItems:"center"},children:e.jsxs("span",{style:{fontSize:"18px",verticalAlign:"middle"},children:["<",e.jsx("span",{style:{display:"inline-block",verticalAlign:"middle",marginLeft:"0px",marginRight:"auto"},children:e.jsx("img",{src:g,alt:"logo-anderson",width:40,height:40})}),"/>"]})})}),e.jsx("div",{className:"mobile-menu block md:hidden",children:s?e.jsx("button",{onClick:()=>t(!1),className:"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white",children:e.jsx(L,{className:"h-5 w-5"})}):e.jsx("button",{onClick:()=>t(!0),className:"flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white",children:e.jsx(A,{className:"h-5 w-5"})})}),e.jsx("div",{className:"menu hidden md:block md:w-auto",id:"navbar",children:e.jsx($,{links:p,onClick:r})})]}),s?e.jsx(D,{links:p,onClick:r}):null]})},m={paddingX:"sm:px-16 px-6",paddingY:"sm:py-16 py-6",padding:"sm:px-16 px-6 sm:py-16 py-10",heroHeadText:"font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",heroSubText:"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",sectionHeadText:"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",sectionSubText:"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"},u=(s,t,r,l)=>({hidden:{x:s==="left"?"-100%":s==="right"?"100%":0,y:s==="up"||s==="down"?"100%":0},show:{x:0,y:0,transition:{type:t,delay:r,duration:l,ease:"easeOut"}}}),W=(s,t)=>({hidden:{},show:{transition:{staggerChildren:s,delayChildren:t||0}}}),G=(s,t)=>function(){return e.jsxs(x.section,{variants:W(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${m.padding} max-w-7xl mx-auto relative z-0`,children:[e.jsx("span",{className:"hash-span",id:t,children:" "}),e.jsx(s,{})]})},Q=()=>{const s=o.useRef(),[t,r]=o.useState({name:"",email:"",message:""}),[l,a]=o.useState(!1),n=c=>{const{target:d}=c,{name:b,value:y}=d;r({...t,[b]:y})},i=c=>{c.preventDefault(),a(!0),R.send(void 0,void 0,{from_name:t.name,to_name:"Portfolio | Anderson",from_email:t.email,to_email:"andersonodev@gmail.com",message:t.message},void 0).then(()=>{a(!1),alert("Obrigado. Entrarei em contato com você o mais rápido possível."),r({name:"",email:"",message:""})},d=>{a(!1),console.error(d),alert("Ah, algo deu errado. Por favor, tente novamente.")})};return e.jsxs("div",{className:"xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden",children:[e.jsxs(x.div,{variants:u("left","tween",.2,1),className:"flex-[0.75] bg-black-100 p-8 rounded-2xl",children:[e.jsx("p",{className:m.sectionSubText,children:"ENTRAR EM CONTATO"}),e.jsx("h3",{className:m.sectionHeadText,children:"Contato."}),e.jsxs("form",{ref:s,onSubmit:i,className:"mt-12 flex flex-col gap-8",children:[e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Seu Nome"}),e.jsx("input",{type:"text",name:"name",value:t.name,onChange:n,placeholder:"Qual é o seu nome?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Seu e-mail"}),e.jsx("input",{type:"email",name:"email",value:t.email,onChange:n,placeholder:"Qual é o seu endereço de e-mail?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e.jsxs("label",{className:"flex flex-col",children:[e.jsx("span",{className:"text-white font-medium mb-4",children:"Sua Mensagem"}),e.jsx("textarea",{rows:7,name:"message",value:t.message,onChange:n,placeholder:"O que você quer dizer?",className:"bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"})]}),e.jsx("button",{type:"submit",className:"bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary",children:l?"Sending...":"Enviar"})]})]}),e.jsx(x.div,{variants:u("right","tween",.2,1),className:"xl:flex-1 xl:h-auto md:h-[550px] h-[350px]",children:e.jsx(M,{})})]})},K=G(Q,"contact"),V=()=>e.jsx("footer",{className:"footer border z-10 border-t-[#110D25] border-l-transparent border-r-transparent text-white",children:e.jsxs("div",{className:"container p-4 md:p-8 lg:p-12 flex items-center justify-between",children:[e.jsxs("span",{style:{fontSize:"18px",verticalAlign:"middle"},children:["<",e.jsx("span",{style:{display:"inline-block",verticalAlign:"middle",marginLeft:"5px",marginRight:"5px"},children:e.jsx("img",{src:g,alt:"Linkedin Icon",width:40,height:40})}),"/>"]}),e.jsxs("span",{className:"text-slate-600",children:["Todos os direitos reservados. ",e.jsx("br",{}),"Copyright© 2024 Anderson Lima. ",e.jsx("br",{})]})]})}),X=()=>e.jsx(F,{children:e.jsxs("main",{className:"flex min-h-screen flex-col bg-[#050816]",children:[e.jsx(q,{}),e.jsx("div",{className:"relative z-0 bg-primaryOne",children:e.jsxs("div",{className:"relative z-0",children:[e.jsx(K,{}),e.jsx(H,{})]})}),e.jsx(V,{})]})});z.createRoot(document.getElementById("root")).render(e.jsx(T.StrictMode,{children:e.jsx(X,{})}));
