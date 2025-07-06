import React from "react";

const EmailFeedback = ({ type, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#050816]/80 backdrop-blur-sm px-2">
      <div
        className={`relative rounded-2xl shadow-xl p-6 sm:p-8 max-w-xs sm:max-w-sm w-full text-center animate-fade-in border border-white/10 bg-gradient-to-br ${
          type === "success"
            ? "from-primary-500/90 via-primary-400/80 to-secondary-500/90"
            : "from-rose-700/90 via-rose-600/80 to-rose-800/90"
        }`}
      >
        <div className="flex justify-center mb-3">
          {type === "success" ? (
            <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#22c55e" />
              <path stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M8 12.5l2.5 2.5 5-5" />
            </svg>
          ) : (
            <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#ef4444" />
              <path stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9.5 9.5l5 5m0-5l-5 5" />
            </svg>
          )}
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow">
          {type === "success" ? "Mensagem enviada!" : "Erro ao enviar"}
        </h2>
        <p className="text-white/80 mb-6 text-base sm:text-lg">
          {type === "success"
            ? "Obrigado! Entrarei em contato com você o mais rápido possível."
            : "Ah, algo deu errado. Por favor, tente novamente."}
        </p>
        <button
          onClick={onClose}
          className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500/60"
        >
          Fechar
        </button>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500/60"
          aria-label="Fechar modal"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EmailFeedback;
