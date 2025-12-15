import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CheckCircle, Clock, BookOpen, User } from 'lucide-react';

const EDUCATION_DATA: Record<string, any> = {
    infantil: {
        title: "Educação Infantil",
        subtitle: "Acolhimento e Descobertas",
        description: "Na Educação Infantil, a criança é protagonista. Promovemos experiências que estimulam a curiosidade, a autonomia e o desenvolvimento socioemocional em um ambiente seguro e lúdico.",
        image: "https://picsum.photos/seed/infantilpage/1200/400",
        highlights: [
            "Ensino Bilíngue",
            "Atividades Sensoriais",
            "Psicomotricidade",
            "Educação Socioemocional"
        ],
        projects: [
            { title: "Pequenos Cientistas", desc: "Experimentos práticos para despertar o amor pela ciência." },
            { title: "Horta Escolar", desc: "Contato com a natureza e alimentação saudável." }
        ],
        schedule: "Matutino ou Vespertino"
    },
    fundamental: {
        title: "Ensino Fundamental",
        subtitle: "Base Forte para o Futuro",
        description: "Do 1º ao 9º ano, consolidamos o aprendizado com um currículo forte, integrando tecnologia e humanização. Focamos no desenvolvimento de habilidades críticas e na resolução de problemas.",
        image: "https://picsum.photos/seed/fundamentalpage/1200/400",
        highlights: [
            "Robótica Educacional",
            "Redação e Leitura",
            "Matemática Aplicada",
            "Projetos Interdisciplinares"
        ],
        projects: [
            { title: "Feira Literária", desc: "Incentivo à produção textual e leitura de clássicos." },
            { title: "Olimpíadas de Matemática", desc: "Preparação e participação em competições nacionais." }
        ],
        schedule: "Matutino (todos) ou Integral (opcional)"
    },
    medio: {
        title: "Ensino Médio",
        subtitle: "Alta Performance e Resultado",
        description: "Prepara-se para os maiores desafios. Nosso Ensino Médio oferece suporte integral para o ENEM e os principais vestibulares do país, sem esquecer da formação humana e orientação vocacional.",
        image: "https://picsum.photos/seed/mediopage/1200/400",
        highlights: [
            "Simulados Semanais",
            "Monitorias Específicas",
            "Laboratórios de Ponta",
            "Orientação de Carreira"
        ],
        projects: [
            { title: "Projeto Vida", desc: "Orientação vocacional e planejamento de futuro." },
            { title: "Iniciação Científica", desc: "Desenvolvimento de pesquisas acadêmicas." }
        ],
        schedule: "Matutino com contra-turno obrigatório em dias específicos"
    }
};

const Education: React.FC = () => {
    const { level } = useParams<{ level: string }>();

    if (!level || !EDUCATION_DATA[level]) {
        return <Navigate to="/" replace />;
    }

    const data = EDUCATION_DATA[level];

    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="relative h-80">
                <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-brand-blue/70 flex items-center justify-center flex-col text-white text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">{data.title}</h1>
                    <p className="text-xl opacity-90">{data.subtitle}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold text-brand-blue mb-6">Nossa Proposta</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        {data.description}
                    </p>

                    <h3 className="text-2xl font-bold text-brand-blue mb-6">Diferenciais do Segmento</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        {data.highlights.map((item: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-3 bg-brand-light p-4 rounded-lg">
                                <CheckCircle className="text-brand-primary" size={24} />
                                <span className="font-medium text-slate-800">{item}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold text-brand-blue mb-6">Projetos Especiais</h3>
                    <div className="space-y-6">
                        {data.projects.map((proj: any, idx: number) => (
                            <div key={idx} className="border-l-4 border-brand-accent pl-6 py-2">
                                <h4 className="text-xl font-bold text-slate-800">{proj.title}</h4>
                                <p className="text-slate-600">{proj.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                        <h3 className="font-bold text-brand-blue text-lg mb-4">Informações Rápidas</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-600">
                                <Clock className="text-brand-accent" />
                                <div>
                                    <span className="block text-xs font-bold uppercase text-slate-400">Horário</span>
                                    <span>{data.schedule}</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <BookOpen className="text-brand-accent" />
                                <div>
                                    <span className="block text-xs font-bold uppercase text-slate-400">Material</span>
                                    <span>Sistema de Ensino Próprio + Plataforma Digital</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <User className="text-brand-accent" />
                                <div>
                                    <span className="block text-xs font-bold uppercase text-slate-400">Coordenação</span>
                                    <span>Equipe Especializada</span>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <a href="/matriculas" className="block w-full text-center bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition">
                                Agendar Visita
                            </a>
                        </div>
                    </div>

                    <div className="bg-brand-accent p-6 rounded-2xl text-white">
                        <h3 className="font-bold text-lg mb-2">Bolsas de Estudo</h3>
                        <p className="text-sm opacity-90 mb-4">
                            Inscreva-se para a prova de bolsas 2026 e garanta descontos especiais por mérito acadêmico.
                        </p>
                        <button className="text-sm font-bold underline hover:no-underline">Saiba mais</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
