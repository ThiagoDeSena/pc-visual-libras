export default function Header({ onNavigate }) {
  return (
    <header className="w-full bg-slate-800 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-yellow-400">🤟 PC Visual</h1>
      <button 
        onClick={() => onNavigate('home')}
        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors font-medium"
      >
        Início
      </button>
    </header>
  );
}