export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    // Fundo escuro (Overlay)
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      
      
      <div className="bg-slate-800 border-2 border-cyan-500 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Cabeçalho do Modal */}
        <div className="bg-slate-900 p-4 flex justify-between items-center border-b border-slate-700">
          <h3 className="text-2xl font-bold text-yellow-400">{title}</h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-slate-700 hover:bg-red-500 px-4 py-1 rounded-lg font-bold transition-colors"
          >
            X Fechar
          </button>
        </div>

        {/* Conteúdo (Aqui entrará o texto e depois o vídeo em Libras) */}
        <div className="p-6 flex flex-col gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}