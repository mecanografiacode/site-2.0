import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Calendar, Star, MapPin, ChevronRight, Play } from 'lucide-react';
import { TESTIMONIALS, NEWS, EVENTS, DIFFERENTIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[750px] flex items-center justify-center overflow-hidden bg-brand-blue">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
            alt="Estudantes felizes" 
            className="w-full h-full object-cover opacity-30 scale-105 animate-float"
            style={{ animationDuration: '20s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-primary/60" />
          {/* Abstract Shapes */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-primary rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-red rounded-full blur-[100px] opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-10 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md text-amber-400 px-4 py-1.5 rounded-full text-sm font-bold mb-8 animate-fade-in-up shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              MATRÍCULAS ABERTAS 2026
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              O futuro do seu filho <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200">
                começa aqui.
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Do infantil ao pré-vestibular, formamos cidadãos completos com excelência acadêmica e valores humanos nas nossas duas unidades no Recanto das Emas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <NavLink 
                to="/matriculas" 
                className="group bg-brand-red hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition-all shadow-xl shadow-red-900/30 hover:shadow-red-600/40 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Garantir Vaga
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </NavLink>
              <NavLink 
                to="/sobre" 
                className="group bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
              >
                <Play size={18} fill="currentColor" className="opacity-80" />
                Conhecer a Escola
              </NavLink>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
            </svg>
        </div>
      </section>

      {/* Floating Stats Section */}
      <section className="relative z-20 -mt-20 md:-mt-32 px-4 mb-20">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
                {[
                    { number: "25+", label: "Anos de História", color: "text-brand-blue" },
                    { number: "2", label: "Unidades Modernas", color: "text-brand-red" },
                    { number: "100%", label: "Professores Especialistas", color: "text-brand-primary" },
                    { number: "3", label: "Laboratórios Maker", color: "text-brand-accent" }
                ].map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center p-2 group">
                        <span className={`text-4xl md:text-5xl font-black ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>{stat.number}</span>
                        <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-brand-red font-bold text-sm tracking-[0.2em] uppercase mb-4">Diferenciais</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Educação que vai além da sala de aula</h3>
            <p className="text-slate-600">Nossa metodologia coloca o aluno como protagonista, desenvolvendo habilidades essenciais para o século XXI.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIALS.map((diff, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
                <div className="w-14 h-14 bg-blue-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                  <diff.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-brand-blue mb-3">{diff.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {diff.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Segments */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
                {[
                    { title: "Educação Infantil", img: "https://images.unsplash.com/photo-1587654780291-39c940483713?q=80&w=2070&auto=format&fit=crop", desc: "Descobertas e acolhimento.", link: "/ensino/infantil", color: "from-pink-500/90" },
                    { title: "Ensino Fundamental", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop", desc: "Construção do conhecimento.", link: "/ensino/fundamental", color: "from-brand-primary/90" },
                    { title: "Ensino Médio", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop", desc: "Foco no futuro e aprovação.", link: "/ensino/medio", color: "from-brand-blue/90" }
                ].map((level, idx) => (
                    <div key={idx} className="relative group overflow-hidden rounded-3xl cursor-pointer h-[300px] md:h-full shadow-lg">
                        <img src={level.img} alt={level.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                        <div className={`absolute inset-0 bg-gradient-to-t ${level.color} via-transparent to-transparent opacity-80 transition-opacity`} />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                        
                        <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-3xl font-bold text-white mb-2">{level.title}</h3>
                            <p className="text-white/90 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 max-w-[80%]">{level.desc}</p>
                            <NavLink to={level.link} className="inline-flex items-center bg-white/20 backdrop-blur-sm hover:bg-white text-white hover:text-brand-blue px-6 py-2 rounded-full font-bold transition-all gap-2 text-sm border border-white/30">
                                SAIBA MAIS <ArrowRight size={16} />
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-light relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/50 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-center text-brand-blue mb-16">
                O que dizem as <span className="text-brand-red">nossas famílias</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative hover:shadow-lg transition">
                        <div className="absolute -top-4 right-8 bg-brand-accent text-white p-2 rounded-lg shadow-lg">
                            <Star size={20} fill="currentColor" />
                        </div>
                        <p className="text-slate-600 italic mb-8 flex-1 leading-relaxed">"{t.text}"</p>
                        
                        <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100" />
                            <div>
                                <h4 className="font-bold text-brand-blue text-sm">{t.name}</h4>
                                <span className="text-xs text-brand-primary font-medium">{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Events Column */}
            <div className="lg:col-span-4">
                <div className="flex justify-between items-end mb-8 border-b border-slate-100 pb-4">
                    <h3 className="text-2xl font-bold text-brand-blue flex items-center gap-2">
                        <Calendar className="text-brand-red" /> Agenda
                    </h3>
                    <a href="#" className="text-sm font-semibold text-slate-500 hover:text-brand-primary transition">Ver tudo</a>
                </div>
                <div className="space-y-4">
                    {EVENTS.map(ev => (
                        <div key={ev.id} className="group flex gap-5 p-5 bg-white border border-slate-100 rounded-2xl hover:border-brand-primary/30 hover:shadow-md transition cursor-pointer relative overflow-hidden">
                            <div className="absolute left-0 top-0 w-1 h-full bg-slate-200 group-hover:bg-brand-primary transition-colors"></div>
                            <div className="flex flex-col items-center justify-center bg-slate-50 rounded-xl w-16 h-16 shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                                <span className="text-[10px] font-bold uppercase tracking-wider">{ev.month}</span>
                                <span className="text-2xl font-black">{ev.day}</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 group-hover:text-brand-primary transition-colors">{ev.title}</h4>
                                <p className="text-sm text-slate-500 mt-1">{ev.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* News Column */}
            <div className="lg:col-span-8">
                 <div className="flex justify-between items-end mb-8 border-b border-slate-100 pb-4">
                    <h3 className="text-2xl font-bold text-brand-blue">Últimas Notícias</h3>
                    <NavLink to="/blog" className="text-brand-primary text-sm font-semibold hover:underline flex items-center gap-1">
                        Acessar Blog <ChevronRight size={16} />
                    </NavLink>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {NEWS.slice(0, 2).map(news => (
                        <article key={news.id} className="group cursor-pointer flex flex-col h-full">
                            <div className="overflow-hidden rounded-2xl mb-4 h-56 relative">
                                <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-blue shadow-sm">
                                    {news.category}
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col">
                                <div className="text-xs text-slate-400 mb-2 flex items-center gap-2">
                                    <Calendar size={12} /> {news.date}
                                </div>
                                <h4 className="font-bold text-xl text-brand-blue mb-3 group-hover:text-brand-red transition-colors leading-tight">{news.title}</h4>
                                <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-1">{news.summary}</p>
                                <span className="text-brand-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Ler notícia <ArrowRight size={16} />
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/4"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Pronto para transformar o futuro?</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Venha conhecer nossa estrutura completa e converse com nossa equipe pedagógica. As matrículas para 2026 já começaram!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <NavLink to="/matriculas" className="bg-white text-brand-primary hover:bg-slate-50 text-lg font-bold px-10 py-4 rounded-xl shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2">
                    Quero Matricular Agora
                </NavLink>
                <a href="https://wa.me/556133330000" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 text-lg font-bold px-10 py-4 rounded-xl transition flex items-center justify-center gap-2">
                    Falar no WhatsApp
                </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-white/40 text-sm font-medium">
                <span className="flex items-center gap-2"><MapPin size={16} /> Qd 206, Recanto das Emas</span>
                <span className="hidden sm:inline">|</span>
                <span className="flex items-center gap-2"><MapPin size={16} /> Qd 201, Recanto das Emas</span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;