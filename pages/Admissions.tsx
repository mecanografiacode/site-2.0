import React, { useState } from 'react';
import { FileText, Check, Download, AlertCircle } from 'lucide-react';

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
        setTimeout(() => setSubmitted(true), 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Header */}
            <div className="bg-brand-blue text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Matrículas 2026</h1>
                <p className="text-xl text-blue-200 max-w-2xl mx-auto px-4">
                    Garanta a vaga do seu filho em uma escola que prepara para a vida.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Steps & Info */}
                <div className="lg:col-span-2 space-y-8">
                    
                    {/* Steps */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold text-brand-blue mb-8">Processo de Admissão</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Preenchimento da Ficha", desc: "Preencha o formulário nesta página para iniciar o processo." },
                                { title: "Visita Guiada", desc: "Nossa equipe entrará em contato para agendar uma visita à escola." },
                                { title: "Entrevista Pedagógica", desc: "Momento para conhecermos melhor o aluno e alinharmos expectativas." },
                                { title: "Efetivação da Matrícula", desc: "Entrega da documentação e assinatura do contrato." }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold">
                                            {idx + 1}
                                        </div>
                                        {idx !== 3 && <div className="w-0.5 h-full bg-slate-200 my-2"></div>}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-800">{step.title}</h3>
                                        <p className="text-slate-600">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Documents */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold text-brand-blue mb-6">Documentação Necessária</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Certidão de Nascimento (cópia)",
                                "RG e CPF dos Pais/Responsáveis",
                                "Comprovante de Residência",
                                "Declaração de Transferência",
                                "Histórico Escolar",
                                "Carteira de Vacinação atualizada",
                                "2 Fotos 3x4 recentes",
                                "Atestado Médico (para Ed. Física)"
                            ].map((doc, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-slate-700">
                                    <Check size={16} className="text-green-500" />
                                    {doc}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 p-4 bg-brand-light border border-blue-100 rounded-lg flex gap-4 items-start">
                             <Download className="text-brand-primary shrink-0" />
                             <div>
                                 <h4 className="font-bold text-brand-primary">Manual do Aluno 2026</h4>
                                 <p className="text-sm text-slate-600 mb-2">Baixe o edital completo com todas as regras e valores.</p>
                                 <button className="text-sm font-bold text-brand-red hover:underline">Download PDF</button>
                             </div>
                        </div>
                    </div>
                    
                    {/* FAQ */}
                     <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold text-brand-blue mb-6">Dúvidas Frequentes</h2>
                        <div className="space-y-4">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-700">
                                    <span>Qual o horário das aulas?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <p className="text-slate-600 mt-3 group-open:animate-fadeIn">
                                    Matutino: 07h15 às 12h30. Vespertino: 13h15 às 18h30. Integral: 07h15 às 18h30.
                                </p>
                            </details>
                             <div className="border-t border-slate-100"></div>
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-700">
                                    <span>As duas unidades possuem o mesmo ensino?</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                    </span>
                                </summary>
                                <p className="text-slate-600 mt-3 group-open:animate-fadeIn">
                                    Sim, a metodologia e o material didático são padronizados em ambas as unidades (Qd 206 e Qd 201), garantindo a mesma qualidade de ensino.
                                </p>
                            </details>
                        </div>
                    </div>

                </div>

                {/* Form Column */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-brand-red sticky top-24">
                        {submitted ? (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-blue mb-2">Solicitação Enviada!</h3>
                                <p className="text-slate-600">Nossa equipe entrará em contato em até 24h úteis.</p>
                                <button onClick={() => setSubmitted(false)} className="mt-6 text-brand-primary font-bold underline">Nova solicitação</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <h3 className="text-xl font-bold text-brand-blue mb-2">Interesse de Matrícula</h3>
                                <p className="text-sm text-slate-500 mb-6">Preencha os dados abaixo e entraremos em contato.</p>
                                
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nome do Responsável</label>
                                    <input 
                                        type="text" 
                                        name="parentName"
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none"
                                        value={formData.parentName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Nome do Aluno</label>
                                    <input 
                                        type="text" 
                                        name="studentName"
                                        required
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none"
                                        value={formData.studentName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Telefone / WhatsApp</label>
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            required
                                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            required
                                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Unidade de Interesse</label>
                                    <select 
                                        name="unit"
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none bg-white"
                                        value={formData.unit}
                                        onChange={handleChange}
                                    >
                                        <option value="qd206">Unidade Qd 206</option>
                                        <option value="qd201">Unidade Qd 201</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Segmento de Interesse</label>
                                    <select 
                                        name="level"
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none bg-white"
                                        value={formData.level}
                                        onChange={handleChange}
                                    >
                                        <option value="infantil">Educação Infantil</option>
                                        <option value="fundamental1">Ensino Fundamental I</option>
                                        <option value="fundamental2">Ensino Fundamental II</option>
                                        <option value="medio">Ensino Médio</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Mensagem (Opcional)</label>
                                    <textarea 
                                        name="message"
                                        rows={3}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-3 rounded-lg transition shadow-md"
                                >
                                    Enviar Solicitação
                                </button>
                                <p className="text-xs text-center text-slate-400 mt-4">
                                    Ao enviar, você concorda com nossa política de privacidade.
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