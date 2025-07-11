"use client";
import React, { useRef, useState } from "react";
import EmailFeedback from "./EmailFeedback";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles.js";
import { EarthCanvas } from "./canvas/index.js";
import { SectionWrapper } from "../hoc/index.js";
import { slideIn } from "../utils/motion.js";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null); // null | 'success' | 'error'

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Portfolio | Anderson",
          from_email: form.email,
          to_email: "andersonodev@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        () => {
          setLoading(false);
          setFeedback("success");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setFeedback("error");
          console.error(error);
        }
      );
  };

  return (
    <>
      {feedback && (
        <EmailFeedback type={feedback} onClose={() => setFeedback(null)} />
      )}
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>ENTRAR EM CONTATO</p>
          <h3 className={styles.sectionHeadText}>Contato.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Seu Nome</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Qual é o seu nome?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Seu e-mail</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Qual é o seu endereço de e-mail?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Sua Mensagem</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="O que você quer dizer?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
