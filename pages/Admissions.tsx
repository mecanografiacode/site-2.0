import React, { useState } from 'react';
import { FileText, Check, Download, ChevronDown, ArrowRight } from 'lucide-react';

const Admissions: React.FC = () => {
    const [formData, setFormData] = useState({
        parentName: '',
        studentName: '',
        email: '',
        phone: '',
        unit: 'qd206',
        level: 'infantil',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setSubmitted(true), 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20 font-sans">
            {/* Header */}
            <div className="bg-brand-blue relative py-24 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="relative z-10 px-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-brand-accent text-xs font-bold mb-4 uppercase tracking-wider">Ano Letivo 2026</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Matrículas Abertas</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Garanta a vaga do seu filho em uma escola que une tradição, inovação e resultados.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20">
                
                {/* Steps & Info */}
                <div className="lg:col-span-2 space-y-8">
                    
                    {/* Steps */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                        <h2 className="text-2xl font-bold text-brand-blue mb-10 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center text-white text-sm">01</span>
                            Passo a Passo
                        </h2>
                        <div className="space-y-0 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-100"></div>

                            {[
                                { title: "Preenchimento da Ficha", desc: "Preencha o formulário nesta página para iniciar o processo de reserva." },
                                { title: "Agendamento da Visita", desc: "Nossa secretaria entrará em contato para agendar um horário presencial." },
                                { title: "Entrevista Pedagógica", desc: "Um momento acolhedor para conhecermos o perfil e necessidades do aluno." },
                                { title: "Efetivação", desc: "Assinatura do contrato e entrega da documentação na secretaria." }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-6 relative pb-10 last:pb-0">
                                    <div className="relative z-10">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-sm border-4 border-white ${idx === 0 ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                                            {idx + 1}
                                        </div>
                                    </div>
                                    <div className="pt-1">
                                        <h3 className="font-bold text-lg text-brand-blue mb-1">{step.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Documents */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
                         <h2 className="text-2xl font-bold text-brand-blue mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-white text-sm">02</span>
                            Documentação
                        </h2>
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                {[
                                    "Certidão de Nascimento",
                                    "RG e CPF dos Pais",
                                    "Comprovante de Residência",
                                    "Declaração de Transferência",
                                    "Histórico Escolar",
                                    "Carteira de Vacinação",
                                    "2 Fotos 3x4",
                                    "Tipo Sanguíneo"
                                ].map((doc, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                                        <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        {doc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-6 flex items-center gap-4 p-4 rounded-xl border border-brand-primary/20 bg-brand-primary/5 hover:bg-brand-primary/10 transition cursor-pointer group">
                             <div className="bg-white p-3 rounded-lg text-brand-primary shadow-sm group-hover:scale-110 transition-transform">
                                <FileText size={24} />
                             </div>
                             <div>
                                 <h4 className="font-bold text-brand-primary">Edital de Matrículas 2026</h4>
                                 <p className="text-xs text-slate-600">Consulte todas as regras, valores e prazos no documento oficial.</p>
                             </div>
                             <Download className="ml-auto text-brand-primary opacity-50 group-hover:opacity-100" />
                        </div>
                    </div>
                </div>

                {/* Form Column */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-slate-300/50 sticky top-24 border border-slate-100">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-red to-orange-500 rounded-t-3xl"></div>
                        {submitted ? (
                            <div className="text-center py-12 animate-fade-in-up">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <Check size={40} strokeWidth={3} />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-blue mb-3">Solicitação Enviada!</h3>
                                <p className="text-slate-600 mb-8">Nossa equipe entrará em contato em breve pelo telefone informado.</p>
                                <button onClick={() => setSubmitted(false)} className="text-brand-primary font-bold hover:underline flex items-center justify-center gap-2 mx-auto">
                                    Fazer nova solicitação
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-brand-blue">Interesse de Vaga</h3>
                                    <p className="text-sm text-slate-500">Preencha para receber nosso contato.</p>
                                </div>
                                
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Responsável</label>
                                        <input 
                                            type="text" 
                                            name="parentName"
                                            placeholder="Nome completo do pai/mãe"
                                            required
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-all placeholder:text-slate-400 text-sm"
                                            value={formData.parentName}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Aluno</label>
                                        <input 
                                            type="text" 
                                            name="studentName"
                                            placeholder="Nome completo do aluno"
                                            required
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all placeholder:text-slate-400 text-sm"
                                            value={formData.studentName}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Contato</label>
                                            <input 
                                                type="tel" 
                                                name="phone"
                                                placeholder="(61) 99999-9999"
                                                required
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all placeholder:text-slate-400 text-sm"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Email</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                placeholder="seu@email.com"
                                                required
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all placeholder:text-slate-400 text-sm"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Unidade</label>
                                            <div className="relative">
                                                <select 
                                                    name="unit"
                                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none appearance-none text-sm font-medium text-slate-700"
                                                    value={formData.unit}
                                                    onChange={handleChange}
                                                >
                                                    <option value="qd206">Qd 206</option>
                                                    <option value="qd201">Qd 201</option>
                                                </select>
                                                <ChevronDown className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" size={16} />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Segmento</label>
                                            <div className="relative">
                                                <select 
                                                    name="level"
                                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none appearance-none text-sm font-medium text-slate-700"
                                                    value={formData.level}
                                                    onChange={handleChange}
                                                >
                                                    <option value="infantil">Ed. Infantil</option>
                                                    <option value="fundamental1">Fund. Anos Iniciais</option>
                                                    <option value="fundamental2">Fund. Anos Finais</option>
                                                    <option value="medio">Ensino Médio</option>
                                                </select>
                                                <ChevronDown className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" size={16} />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Observações</label>
                                        <textarea 
                                            name="message"
                                            rows={3}
                                            placeholder="Alguma dúvida específica ou necessidade especial?"
                                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all placeholder:text-slate-400 text-sm"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-1 flex items-center justify-center gap-2 mt-4"
                                >
                                    Enviar Solicitação <ArrowRight size={18} />
                                </button>
                                <p className="text-[10px] text-center text-slate-400 leading-tight">
                                    Seus dados estão protegidos. Entraremos em contato apenas para fins de matrícula.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admissions;