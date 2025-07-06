import React from "react";

const EmailFeedback = ({ type, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 backdrop-blur-sm">
      <div
        className={`relative rounded-3xl shadow-2xl p-10 max-w-md w-full text-center animate-fade-in bg-gradient-to-br border-2 border-white/20 ${
          type === "success"
            ? "from-green-400/90 via-green-500/80 to-emerald-600/90"
            : "from-red-400/90 via-rose-500/80 to-rose-600/90"
        }`}
      >
        <div className="flex justify-center mb-4">
          {type === "success" ? (
            <svg className="w-16 h-16 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#22c55e" />
              <path stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M8 12.5l2.5 2.5 5-5" />
            </svg>
          ) : (
            <svg className="w-16 h-16 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#ef4444" />
              <path stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9.5 9.5l5 5m0-5l-5 5" />
            </svg>
          )}
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-2 drop-shadow">
          {type === "success" ? "Mensagem enviada!" : "Erro ao enviar"}
        </h2>
        <p className="text-white/90 mb-8 text-lg">
          {type === "success"
            ? "Obrigado! Entrarei em contato com você o mais rápido possível."
            : "Ah, algo deu errado. Por favor, tente novamente."}
        </p>
        <button
          onClick={onClose}
          className="bg-white/90 text-gray-900 font-bold px-8 py-2 rounded-xl shadow-lg hover:bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/60"
        >
          Fechar
        </button>
        <div className="absolute -top-4 -right-4">
          <button
            onClick={onClose}
            className="bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/60"
            aria-label="Fechar modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailFeedback;
