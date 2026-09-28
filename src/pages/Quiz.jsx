import { useState } from 'react';
import { hardwareData } from '../data/hardwareData';

export default function Quiz({ onNavigate }) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentItem = hardwareData[currentQuestionIdx];

  const handleAnswer = (selectedPieceId) => {
    if (selectedPieceId === currentItem.id) {
      setScore(score + 1); // Acertou!
    }
    
    // Passa para a próxima ou finaliza
    if (currentQuestionIdx + 1 < hardwareData.length) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIdx(0);
    setScore(0);
    setShowResult(false);
  };

  // TELA FINAL DO RESULTADO
  if (showResult) {
    return (
      <div className="text-center bg-slate-800 p-10 rounded-2xl border-2 border-cyan-500 max-w-lg w-full">
        <h2 className="text-4xl font-bold mb-4 text-yellow-400">Fim de Jogo!</h2>
        <p className="text-2xl text-white mb-6">
          Você acertou <span className="text-cyan-400 font-bold">{score}</span> de {hardwareData.length} perguntas.
        </p>
        <div className="flex gap-4 justify-center">
          <button onClick={restartQuiz} className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl text-lg">
            🔄 Jogar Novamente
          </button>
          <button onClick={() => onNavigate('home')} className="px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white font-bold rounded-xl text-lg">
            🏠 Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl flex flex-col items-center">
      <div className="mb-8 text-center bg-slate-800 p-6 rounded-2xl border-2 border-yellow-400 w-full shadow-lg">
        <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider">
          Pergunta {currentQuestionIdx + 1} de {hardwareData.length}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
          {currentItem.quizQuestion}
        </h2>
        {/* Futuramente o vídeo em Libras da pergunta pode entrar logo abaixo do texto aqui */}
      </div>

      <p className="text-slate-400 mb-4 font-medium">Selecione a peça correta:</p>

      {/* Grade com todas as peças como opções de resposta */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {hardwareData.map((item) => (
          <button
            key={item.id}
            onClick={() => handleAnswer(item.id)}
            className="bg-slate-800 border-2 border-slate-600 hover:border-cyan-400 rounded-xl p-4 flex flex-col items-center gap-2 transition-transform hover:scale-105"
          >
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-2xl">
              <img 
                src={item.imagePath} 
                alt={`Ícone da peça ${item.name}`} 
                className="w-full h-full object-contain drop-shadow-md" 
              />
            </div>
            <span className="text-white font-bold text-sm md:text-base">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}