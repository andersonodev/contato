import React from "react";

const EmailFeedback = ({ type, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60`}>
      <div className={`rounded-2xl shadow-lg p-8 max-w-sm w-full text-center animate-fade-in bg-gradient-to-br ${type === "success" ? "from-green-400 to-green-600" : "from-red-400 to-red-600"}`}>
        <h2 className="text-2xl font-bold text-white mb-2">
          {type === "success" ? "Mensagem enviada!" : "Erro ao enviar"}
        </h2>
        <p className="text-white mb-6">
          {type === "success"
            ? "Obrigado. Entrarei em contato com você o mais rápido possível."
            : "Ah, algo deu errado. Por favor, tente novamente."}
        </p>
        <button
          onClick={onClose}
          className="bg-white text-gray-800 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default EmailFeedback;
