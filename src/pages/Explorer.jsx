import { useState } from 'react';
import { hardwareData } from '../data/hardwareData';
import Modal from '../components/ui/Modal';

export default function Explorer({ onNavigate }) {
  const [selectedPiece, setSelectedPiece] = useState(null);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-2 text-cyan-400">Explorador de Hardware</h2>
      <p className="text-slate-400 mb-8">Clique em uma peça para descobrir o que ela faz.</p>
      
      {/* Grade de Peças */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {hardwareData.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedPiece(item)}
            className="bg-slate-800 border-2 border-slate-600 hover:border-yellow-400 rounded-xl p-4 flex flex-col items-center gap-4 transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(250,204,21,0.3)] focus:outline-none focus:ring-4 focus:ring-yellow-400"
          >
            {/* Como ainda não temos as imagens SVGs, criei um bloco visual temporário */}
            <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center text-4xl shadow-inner">
              <img 
                src={item.imagePath} 
                alt={`Ícone da peça ${item.name}`} 
                className="w-full h-full object-contain drop-shadow-md" 
              />
            </div>
            <span className="text-lg font-bold text-white">{item.name}</span>
          </button>
        ))}
      </div>

      {/* Modal que abre ao clicar na peça */}
      <Modal 
        isOpen={!!selectedPiece} // Só abre se tiver uma peça selecionada
        onClose={() => setSelectedPiece(null)} 
        title={selectedPiece?.name}
      >
        <div className="flex flex-col md:flex-row gap-6 items-center">
          
          {/* ESPAÇO RESERVADO PARA O VÍDEO EM LIBRAS */}
          <div className="w-full md:w-1/2 aspect-video bg-slate-900 border-2 border-dashed border-slate-500 rounded-xl flex items-center justify-center text-slate-500 font-bold">
            🎥 Área do Vídeo em Libras
          </div>

          {/* EXPLICAÇÃO EM PORTUGUÊS */}
          <div className="w-full md:w-1/2">
            <p className="text-xl text-slate-200 leading-relaxed">
              {selectedPiece?.description}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}