import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Admissions from './pages/Admissions';

// Contact Page Component
const Contact = () => (
    <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-brand-blue mb-12 text-center">Nossas Unidades no Recanto das Emas</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Unit Qd 206 */}
            <div className="space-y-6">
                 <h2 className="text-2xl font-bold text-brand-primary border-l-4 border-brand-red pl-4">Unidade Quadra 206</h2>
                 <p className="text-slate-600">Ampla estrutura voltada para o Ensino Fundamental e Médio, com laboratórios e áreas de convivência.</p>
                 <div className="bg-brand-light p-8 rounded-xl space-y-4 border border-slate-100 shadow-sm">
                     <div>
                         <strong className="block text-brand-blue">Endereço</strong>
                         <span className="text-slate-600">Quadra 206, Conjunto A, Lote 1 - Recanto das Emas, DF</span>
                     </div>
                     <div>
                         <strong className="block text-brand-blue">Telefone</strong>
                         <span className="text-slate-600">(61) 3333-0000</span>
                     </div>
                     <div>
                         <strong className="block text-brand-blue">Email</strong>
                         <span className="text-slate-600">contato206@colegioreacao.com.br</span>
                     </div>
                 </div>
                 <div className="bg-slate-200 rounded-xl h-64 flex items-center justify-center overflow-hidden">
                    <img src="https://picsum.photos/seed/map206/600/400" className="w-full h-full object-cover opacity-80" alt="Mapa Quadra 206" />
                 </div>
            </div>

            {/* Unit Qd 201 */}
            <div className="space-y-6">
                 <h2 className="text-2xl font-bold text-brand-primary border-l-4 border-brand-red pl-4">Unidade Quadra 201</h2>
                 <p className="text-slate-600">Espaço dedicado à Educação Infantil e Fundamental I, com parquinhos e salas lúdicas.</p>
                 <div className="bg-brand-light p-8 rounded-xl space-y-4 border border-slate-100 shadow-sm">
                     <div>
                         <strong className="block text-brand-blue">Endereço</strong>
                         <span className="text-slate-600">Quadra 201, Conjunto B, Lote 5 - Recanto das Emas, DF</span>
                     </div>
                     <div>
                         <strong className="block text-brand-blue">Telefone</strong>
                         <span className="text-slate-600">(61) 3333-1111</span>
                     </div>
                     <div>
                         <strong className="block text-brand-blue">Email</strong>
                         <span className="text-slate-600">contato201@colegioreacao.com.br</span>
                     </div>
                 </div>
                 <div className="bg-slate-200 rounded-xl h-64 flex items-center justify-center overflow-hidden">
                    <img src="https://picsum.photos/seed/map201/600/400" className="w-full h-full object-cover opacity-80" alt="Mapa Quadra 201" />
                 </div>
            </div>
        </div>
    </div>
);

const Blog = () => (
    <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-brand-blue mb-8 text-center">Blog e Notícias</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition">
                    <img src={`https://picsum.photos/seed/blog${i}/400/250`} alt="Blog" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <span className="text-xs font-bold text-brand-primary mb-2 block">EDUCACIONAL</span>
                        <h3 className="font-bold text-xl text-slate-800 mb-2">A importância da tecnologia na sala de aula</h3>
                        <p className="text-slate-600 text-sm mb-4">Como as novas ferramentas estão moldando o futuro da educação...</p>
                        <a href="#" className="text-brand-accent font-bold text-sm hover:underline">Ler mais</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/ensino/:level" element={<Education />} />
            <Route path="/matriculas" element={<Admissions />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
};

export default App;