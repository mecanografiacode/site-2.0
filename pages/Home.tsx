import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar } from 'lucide-react';
import { TESTIMONIALS, NEWS, EVENTS, DIFFERENTIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/schoolhero/1920/1080" 
            alt="Estudantes felizes" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-blue/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center sm:text-left w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold mb-6 animate-fade-in-up shadow-lg shadow-red-500/30">
              MATRÍCULAS ABERTAS 2026
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
              O futuro do seu filho <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                começa aqui.
              </span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 leading-relaxed">
              Do infantil ao pré-vestibular, formamos cidadãos completos com excelência acadêmica nas nossas unidades no Recanto das Emas (Qd 206 e Qd 201).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink 
                to="/matriculas" 
                className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition shadow-lg shadow-red-500/30 flex items-center justify-center gap-2"
              >
                Garantir Vaga
                <ArrowRight size={20} />
              </NavLink>
              <NavLink 
                to="/sobre" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition border border-white/30"
              >
                Conhecer a Escola
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-primary py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
                { number: "25+", label: "Anos de História" },
                { number: "2", label: "Unidades Modernas" },
                { number: "100%", label: "Professores Especialistas" },
                { number: "3", label: "Laboratórios Maker" }
            ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl font-extrabold text-brand-accent mb-2">{stat.number}</span>
                    <span className="text-sm md:text-base font-medium opacity-90">{stat.label}</span>
                </div>
            ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-brand-red font-bold text-sm tracking-widest uppercase mb-2">Por que escolher o Reação?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue">Educação que vai além da sala de aula</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DIFFERENTIALS.map((diff, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 group">
                <div className="w-14 h-14 bg-blue-50 text-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition">
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

      {/* Segments/Levels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Educação Infantil", img: "https://picsum.photos/seed/kids/600/800", desc: "Descobertas e acolhimento.", link: "/ensino/infantil" },
                { title: "Ensino Fundamental", img: "https://picsum.photos/seed/teens/600/800", desc: "Construção do conhecimento.", link: "/ensino/fundamental" },
                { title: "Ensino Médio", img: "https://picsum.photos/seed/high/600/800", desc: "Foco no futuro e aprovação.", link: "/ensino/medio" }
            ].map((level, idx) => (
                <div key={idx} className="relative h-[400px] group overflow-hidden rounded-2xl cursor-pointer">
                    <img src={level.img} alt={level.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                        <h3 className="text-2xl font-bold text-white mb-2">{level.title}</h3>
                        <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{level.desc}</p>
                        <NavLink to={level.link} className="inline-flex items-center text-brand-accent font-bold hover:text-white transition gap-2 text-sm">
                            SAIBA MAIS <ArrowRight size={16} />
                        </NavLink>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">O que dizem as famílias</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <h4 className="font-bold text-brand-blue">{t.name}</h4>
                                <span className="text-xs text-slate-500">{t.role}</span>
                            </div>
                        </div>
                        <p className="text-slate-600 italic flex-1">"{t.text}"</p>
                        <div className="flex text-brand-accent mt-4">
                            {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Events & News Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Events Column */}
            <div className="lg:col-span-1">
                <div className="flex justify-between items-end mb-8">
                    <h3 className="text-2xl font-bold text-brand-blue">Agenda</h3>
                    <a href="#" className="text-brand-primary text-sm font-semibold hover:underline">Ver calendário completo</a>
                </div>
                <div className="space-y-4">
                    {EVENTS.map(ev => (
                        <div key={ev.id} className="flex gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition cursor-pointer">
                            <div className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-lg w-16 h-16 shrink-0">
                                <span className="text-xs font-bold text-slate-500 uppercase">{ev.month}</span>
                                <span className="text-2xl font-extrabold text-brand-red">{ev.day}</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800">{ev.title}</h4>
                                <p className="text-sm text-slate-500">{ev.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* News Column */}
            <div className="lg:col-span-2">
                 <div className="flex justify-between items-end mb-8">
                    <h3 className="text-2xl font-bold text-brand-blue">Últimas Notícias</h3>
                    <NavLink to="/blog" className="text-brand-primary text-sm font-semibold hover:underline">Ver blog</NavLink>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {NEWS.slice(0, 2).map(news => (
                        <article key={news.id} className="group cursor-pointer">
                            <div className="overflow-hidden rounded-xl mb-4 h-48">
                                <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                            </div>
                            <span className="text-xs font-bold text-brand-red uppercase mb-2 block">{news.category}</span>
                            <h4 className="font-bold text-lg text-brand-blue mb-2 group-hover:text-brand-primary transition">{news.title}</h4>
                            <p className="text-slate-600 text-sm line-clamp-2">{news.summary}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-primary py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-700 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-red rounded-full opacity-20 blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para fazer parte da nossa história?</h2>
            <p className="text-blue-100 text-lg mb-10">
                Agende uma visita em uma de nossas unidades (Qd 206 ou Qd 201) e venha conhecer de perto nossa estrutura.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <NavLink to="/matriculas" className="bg-brand-red hover:bg-red-700 text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg transition transform hover:scale-105">
                    Quero Matricular
                </NavLink>
                <a href="https://wa.me/556133330000" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary text-lg font-bold px-10 py-4 rounded-full transition">
                    Falar no WhatsApp
                </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;