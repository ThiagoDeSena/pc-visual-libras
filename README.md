# 🤟 Hardware em Sinais (PC Visual)

<img width="1359" height="650" alt="image" src="https://github.com/user-attachments/assets/99fddf8f-c759-43cf-b09d-e21ef1f2865c" />

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![VLibras](https://img.shields.io/badge/VLibras-Gov.BR-00A859?style=for-the-badge)

**Hardware em Sinais** é uma aplicação web educacional, bilíngue (Português/Libras) e gamificada, desenvolvida para ensinar os fundamentos físicos da computação (hardware) para estudantes surdos.

🔗 **[Acesse a aplicação online aqui](https://thiagodesena.github.io/pc-visual-libras/)**

## 🎯 O Problema e a Solução
A maioria dos materiais educacionais sobre tecnologia depende fortemente de textos longos e jargões técnicos não acessíveis ou de explicações em áudio. 

Esta aplicação resolve esse problema oferecendo uma **experiência digital visual, interativa e independente do som**, onde o aluno aprende sobre os componentes de um computador explorando suas imagens, lendo textos objetivos em português e consumindo a tradução em tempo real para a Língua Brasileira de Sinais (Libras) através de um avatar 3D.

## ✨ Funcionalidades Principais
* **Exploração Interativa:** O usuário clica em componentes (Placa-Mãe, Processador, RAM, etc.) e descobre suas funções de forma visual.
* **Bilinguismo Nativo (VLibras):** Integração com o widget oficial do Governo Federal. O usuário seleciona o texto na tela e o avatar (Ícaro) traduz o conteúdo para Libras em tempo real.
* **Quiz Visual Gamificado:** Avaliação baseada em associação visual (imagem x contexto), eliminando a carga cognitiva de múltiplas escolhas textuais longas.
* **Acessibilidade (a11y) First:**
  * Interface de alto contraste (fundo escuro, destaques em amarelo/cyan).
  * Navegação 100% funcional via teclado (Focus states otimizados).
  * Zero dependência de feedback sonoro.

## 🛠️ Tecnologias e Arquitetura

O projeto foi construído focando em **performance, manutenibilidade e disponibilidade offline-first (conceitual)** para ambientes escolares.

* **Front-end:** ReactJS + Vite. Escolhido pela velocidade de compilação (HMR) e ecossistema moderno.
* **Estilização:** Tailwind CSS. Utilizado para construção rápida de UI, mantendo o bundle CSS minúsculo e focando em classes utilitárias para responsividade e alto contraste.
* **Gerenciamento de Estado e Rotas:** Em vez de utilizar bibliotecas pesadas (como `react-router-dom`), a navegação entre as 3 telas principais (Home, Explorer, Quiz) é gerenciada por estado no `App.jsx`, garantindo trocas de tela instantâneas e sem quebras no deploy estático.
* **Armazenamento de Dados:** Arquitetura *Backendless*. Os dados dos componentes ficam em uma estrutura JSON estática (`hardwareData.js`). Isso garante que o site nunca fique fora do ar por falhas em banco de dados ou APIs terceiras, além de zerar os custos de infraestrutura.
* **Integração VLibras (WebGL):** O script do Widget foi injetado diretamente no `index.html` para evitar conflitos de ciclo de vida e re-renderização com o DOM virtual do React, garantindo que a aplicação Unity/WebGL do avatar 3D rode fluidamente sobreposta a todas as telas.

## 🚀 Como executar o projeto localmente

### Pré-requisitos
* Node.js (v18 ou superior)
* NPM ou Yarn

### Passos
1. Clone este repositório:
   ```bash
   git clone https://github.com/ThiagoDeSena/pc-visual-libras.git

<img width="1360" height="653" alt="image" src="https://github.com/user-attachments/assets/cf525ce8-2e28-4d7b-80be-2b824f1cd22e" />

<img width="1359" height="649" alt="image" src="https://github.com/user-attachments/assets/4fd93cb8-fa2a-40cc-9074-9af2a61ce0ff" />
