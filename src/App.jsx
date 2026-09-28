import { useState } from 'react';
import Home from './pages/Home';
import Explorer from './pages/Explorer';
import Quiz from './pages/Quiz';
import Header from './components/layout/Header';

function App() {
  // Estado que controla qual tela está aparecendo: 'home', 'explorer' ou 'quiz'
  const [currentPage, setCurrentPage] = useState('home');

  return (
    // flex-col garante que o Header fique no topo e o main estique no resto da tela
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col">
      
      {/* Passamos o onNavigate para o Header poder ter um botão "Voltar" */}
      <Header onNavigate={setCurrentPage} />
      
      {/* flex-1 faz o conteúdo ocupar o espaço livre */}
      <main className="flex-1 p-4 md:p-8 flex flex-col justify-center items-center">
        {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
        {currentPage === 'explorer' && <Explorer onNavigate={setCurrentPage} />}
        {currentPage === 'quiz' && <Quiz onNavigate={setCurrentPage} />}
      </main>

      {/* 
        ========================================================
        ÁREA RESERVADA PARA O VLIBRAS (Se usarem a API)
        Se decidirem usar o plugin oficial do VLibras (React-VLibras), 
        coloquem o componente dele aqui, solto no final do App. 
        Assim ele aparece em todas as telas sem quebrar!
        ========================================================
      */}
    </div>
  );
}

export default App;