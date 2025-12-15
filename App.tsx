import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Admissions from './pages/Admissions';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// Contact Page Component
const Contact = () => (
    <div className="bg-slate-50 min-h-screen">
        <div className="bg-brand-blue py-20 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Nossas Unidades</h1>
            <p className="text-blue-200">Visite o Colégio Reação no Recanto das Emas</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Unit Qd 206 */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group">
                     <div className="h-64 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="Unidade 206" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent flex items-end p-8">
                            <h2 className="text-2xl font-bold text-white">Unidade Quadra 206</h2>
                        </div>
                     </div>
                     <div className="p-8 space-y-6">
                         <p className="text-slate-600 leading-relaxed">
                             Nossa sede principal, com ampla estrutura voltada para o Ensino Fundamental II e Ensino Médio. Conta com laboratórios, biblioteca e quadra poliesportiva.
                         </p>
                         <div className="space-y-4">
                             <div className="flex items-start gap-4">
                                 <div className="bg-brand-light p-2 rounded-lg text-brand-primary"><MapPin size={20} /></div>
                                 <div>
                                     <strong className="block text-brand-blue text-sm">Endereço</strong>
                                     <span className="text-slate-600 text-sm">Quadra 206, Conjunto A, Lote 1<br/>Recanto das Emas, DF</span>
                                 </div>
                             </div>
                             <div className="flex items-center gap-4">
                                 <div className="bg-brand-light p-2 rounded-lg text-brand-primary"><Phone size={20} /></div>
                                 <div>
                                     <strong className="block text-brand-blue text-sm">Telefone</strong>
                                     <span className="text-slate-600 text-sm">(61) 3333-0000</span>
                                 </div>
                             </div>
                             <div className="flex items-center gap-4">
                                 <div className="bg-brand-light p-2 rounded-lg text-brand-primary"><Clock size={20} /></div>
                                 <div>
                                     <strong className="block text-brand-blue text-sm">Horário de Atendimento</strong>
                                     <span className="text-slate-600 text-sm">Seg a Sex: 07h às 18h</span>
                                 </div>
                             </div>
                         </div>
                         <a href="https://maps.google.com" target="_blank" className="block w-full text-center bg-brand-primary/10 text-brand-primary font-bold py-3 rounded-xl hover:bg-brand-primary hover:text-white transition">
                             Ver no Mapa
                         </a>
                     </div>
                </div>

                {/* Unit Qd 201 */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group">
                     <div className="h-64 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="Unidade 201" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent flex items-end p-8">
                            <h2 className="text-2xl font-bold text-white">Unidade Quadra 201</h2>
                        </div>
                     </div>
                     <div className="p-8 space-y-6">
                         <p className="text-slate-600 leading-relaxed">
                             Espaço exclusivo e acolhedor dedicado à Educação Infantil e Fundamental I. Ambientes lúdicos planejados para o desenvolvimento da criança.
                         </p>
                         <div className="space-y-4">
                             <div className="flex items-start gap-4">
                                 <div className="bg-brand-light p-2 rounded-lg text-brand-accent"><MapPin size={20} /></div>
                                 <div>
                                     <strong className="block text-brand-blue text-sm">Endereço</strong>
                                     <span className="text-slate-600 text-sm">Quadra 201, Conjunto B, Lote 5<br/>Recanto das Emas, DF</span>
                                 </div>
                             </div>
                             <div className="flex items-center gap-4">
                                 <div className="bg-brand-light p-2 rounded-lg text-brand-accent"><Phone size={20} /></div>
                                 <div>
                                     <strong className="block text-brand-blue text-sm">Telefone</strong>
                                     <span className="text-slate-600 text-sm">(61) 3333-1111</span>
                                 </div>
                             </div>
                             <div className="flex items-center gap-4">
                                 <div className="bg-brand-light p-2 rounded-lg text-brand-accent"><Clock size={20} /></div>
                                 <div>
                                     <strong className="block text-brand-blue text-sm">Horário de Atendimento</strong>
                                     <span className="text-slate-600 text-sm">Seg a Sex: 07h às 18h</span>
                                 </div>
                             </div>
                         </div>
                         <a href="https://maps.google.com" target="_blank" className="block w-full text-center bg-brand-accent/10 text-brand-accent font-bold py-3 rounded-xl hover:bg-brand-accent hover:text-white transition">
                             Ver no Mapa
                         </a>
                     </div>
                </div>
            </div>
        </div>
    </div>
);

const Blog = () => (
    <div className="bg-slate-50 min-h-screen pb-20">
        <div className="bg-white border-b border-slate-100 py-20 text-center">
            <h1 className="text-4xl font-bold text-brand-blue mb-4">Blog e Notícias</h1>
            <p className="text-slate-500">Fique por dentro de tudo que acontece no Colégio Reação</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 -mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 group cursor-pointer">
                        <div className="h-48 overflow-hidden relative">
                            <img src={`https://picsum.photos/seed/blog${i}/500/300`} alt="Blog" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-blue">
                                NOVIDADE
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="text-xs text-slate-400 mb-2">12 OUT 2025</div>
                            <h3 className="font-bold text-lg text-brand-blue mb-3 group-hover:text-brand-primary transition-colors">A importância da tecnologia e inovação na sala de aula moderna</h3>
                            <p className="text-slate-600 text-sm mb-6 line-clamp-2">Como as novas ferramentas estão moldando o futuro da educação e preparando os alunos para...</p>
                            <span className="text-brand-primary font-bold text-sm hover:underline flex items-center gap-1">Ler artigo completo <span className="group-hover:translate-x-1 transition-transform">→</span></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-slate-50">
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