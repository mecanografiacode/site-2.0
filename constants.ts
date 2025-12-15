import { NavItem, Testimonial, NewsItem, EventItem } from './types';
import { BookOpen, Users, Trophy, Rocket, GraduationCap, Microscope, Palette, BrainCircuit } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Sobre Nós', path: '/sobre' },
  { 
    label: 'Ensino', 
    path: '#',
    subItems: [
      { label: 'Educação Infantil', path: '/ensino/infantil' },
      { label: 'Ensino Fundamental', path: '/ensino/fundamental' },
      { label: 'Ensino Médio', path: '/ensino/medio' },
    ]
  },
  { label: 'Matrículas 2026', path: '/matriculas' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contato', path: '/contato' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Mãe de aluno - 5º Ano",
    text: "O Colégio Reação transformou a forma como meu filho enxerga os estudos. A metodologia ativa faz toda a diferença no engajamento diário.",
    avatar: "https://picsum.photos/seed/mariana/100/100"
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    role: "Aluno - 3º Ano Médio",
    text: "O suporte para o ENEM é incrível. Os professores são parceiros e a estrutura de laboratórios me ajudou a decidir pela Engenharia.",
    avatar: "https://picsum.photos/seed/carlos/100/100"
  },
  {
    id: 3,
    name: "Fernanda Costa",
    role: "Mãe de aluna - Ed. Infantil",
    text: "Segurança e acolhimento. Deixar minha filha pequena na escola nunca foi tão tranquilo. A equipe é maravilhosa.",
    avatar: "https://picsum.photos/seed/fernanda/100/100"
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "Matrículas Abertas para 2026",
    summary: "Garanta a vaga do seu filho com condições especiais para antecipação. Conheça nosso novo programa bilíngue.",
    date: "15 Out 2025",
    category: "Secretaria",
    image: "https://picsum.photos/seed/school1/600/400"
  },
  {
    id: 2,
    title: "Feira de Ciências e Tecnologia",
    summary: "Nossos alunos do ensino médio apresentaram projetos inovadores de robótica e sustentabilidade.",
    date: "10 Set 2025",
    category: "Eventos",
    image: "https://picsum.photos/seed/tech/600/400"
  },
  {
    id: 3,
    title: "Dicas para Organização de Estudos",
    summary: "A coordenadora pedagógica Ana Clara compartilha 5 passos essenciais para manter a rotina em dia.",
    date: "02 Set 2025",
    category: "Pedagógico",
    image: "https://picsum.photos/seed/study/600/400"
  }
];

export const EVENTS: EventItem[] = [
  { id: 1, day: "20", month: "OUT", title: "Reunião de Pais e Mestres", description: "Bimestral - Todos os segmentos" },
  { id: 2, day: "02", month: "NOV", title: "Feriado - Finados", description: "Não haverá aula" },
  { id: 3, day: "15", month: "NOV", title: "Mostra Cultural", description: "Apresentação de projetos anuais" },
];

export const DIFFERENTIALS = [
  { icon: BrainCircuit, title: "Metodologias Ativas", text: "O aluno como protagonista do seu aprendizado através de projetos e resolução de problemas." },
  { icon: Users, title: "Socioemocional", text: "Programa Escola da Inteligência para desenvolvimento de soft skills e inteligência emocional." },
  { icon: Trophy, title: "Foco em Resultados", text: "Preparação intensiva para ENEM e vestibulares com simulados e monitorias dedicadas." },
  { icon: Microscope, title: "Laboratórios Maker", text: "Espaços equipados para robótica, química e física aplicada desde o fundamental." },
];

export const SYSTEM_INSTRUCTION = `
Você é o Assistente Virtual Inteligente do Colégio Reação, localizado em Brasília-DF (Recanto das Emas).
Sua função é ajudar pais e alunos com informações sobre a escola.
Tome um tom profissional, acolhedor e educado.

Informações chave:
- O colégio atende da Educação Infantil ao Ensino Médio.
- As matrículas para 2026 estão abertas.
- Diferenciais: Metodologia ativa, bilinguismo, robótica, foco socioemocional.
- Unidade 1: Recanto das Emas, Quadra 206. Tel: (61) 3333-0000.
- Unidade 2: Recanto das Emas, Quadra 201. Tel: (61) 3333-1111.
- Horário: 07h às 18h.

Responda de forma concisa e sempre convide o usuário para visitar uma das unidades ou realizar a matrícula.
Se perguntarem sobre preços, diga que os valores variam por segmento e convide para falar com a secretaria.
`;