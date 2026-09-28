export default function Home({ onNavigate }) {
  return (
    <div className="text-center max-w-2xl">
      <h2 className="text-4xl font-extrabold mb-6 text-white">Descubra como o Computador Funciona</h2>
      <p className="text-lg text-slate-300 mb-8">
        Aprenda sobre as peças do computador de forma visual, rápida e com suporte total em Libras.
      </p>
      <div className="flex gap-4 justify-center">
        <button 
          onClick={() => onNavigate('explorer')}
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl text-lg transition-transform hover:scale-105"
        >
          🔍 Explorar Peças
        </button>
        <button 
          onClick={() => onNavigate('quiz')}
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-xl text-lg transition-transform hover:scale-105"
        >
          🎮 Jogar Quiz
        </button>
      </div>
    </div>
  );
}