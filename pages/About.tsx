import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="bg-brand-blue py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossa História</h1>
                <p className="text-xl max-w-3xl mx-auto px-4 opacity-90">
                    Há 25 anos educando gerações e formando líderes em Brasília.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-brand-blue mb-6">Tradição e Modernidade</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Fundado em 1999, o Colégio Reação nasceu do sonho de educadores que acreditavam em um ensino capaz de unir excelência acadêmica e formação humana.
                        </p>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Começamos em uma pequena casa na Asa Sul e hoje ocupamos uma estrutura moderna de mais de 5.000m², referência em tecnologia educacional e espaços de convivência.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Nossa essência permanece a mesma: olhar para cada aluno como um ser único, potencializando seus talentos e acolhendo suas dificuldades.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://picsum.photos/seed/schoolold/400/500" className="rounded-2xl shadow-lg mt-8" alt="História antiga" />
                        <img src="https://picsum.photos/seed/schoolnew/400/500" className="rounded-2xl shadow-lg" alt="Escola atual" />
                    </div>
                </div>

                {/* Mission Vision Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-brand-light p-8 rounded-2xl border-t-4 border-brand-primary text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-brand-primary">
                            <Target size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-blue mb-3">Missão</h3>
                        <p className="text-slate-600 text-sm">
                            Promover uma educação de excelência, formando cidadãos críticos, éticos e preparados para transformar a sociedade.
                        </p>
                    </div>
                    <div className="bg-brand-light p-8 rounded-2xl border-t-4 border-brand-accent text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-brand-accent">
                            <Eye size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-blue mb-3">Visão</h3>
                        <p className="text-slate-600 text-sm">
                            Ser referência nacional em educação básica, reconhecida pela inovação pedagógica e pelos resultados de seus alunos.
                        </p>
                    </div>
                    <div className="bg-brand-light p-8 rounded-2xl border-t-4 border-pink-500 text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-pink-500">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-blue mb-3">Valores</h3>
                        <p className="text-slate-600 text-sm">
                            Respeito, Solidariedade, Disciplina, Inovação e Acolhimento Humano.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
