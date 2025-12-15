import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div>
            <div className="mb-6">
                <div className="bg-white p-3 rounded-lg inline-block shadow-lg">
                    <img 
                      src="/logo.png"
                      alt="Colégio Reação" 
                      className="h-10 w-auto object-contain" 
                    />
                </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Transformando vidas através de uma educação inovadora, humanizada e voltada para o futuro. Sua melhor escolha no Recanto das Emas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition"><Instagram size={18} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition"><Facebook size={18} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-red transition"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-brand-red inline-block pb-1">Navegação</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li><NavLink to="/sobre" className="hover:text-brand-red transition">Sobre Nós</NavLink></li>
              <li><NavLink to="/ensino/infantil" className="hover:text-brand-red transition">Educação Infantil</NavLink></li>
              <li><NavLink to="/ensino/fundamental" className="hover:text-brand-red transition">Ensino Fundamental</NavLink></li>
              <li><NavLink to="/ensino/medio" className="hover:text-brand-red transition">Ensino Médio</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-brand-red transition">Blog e Notícias</NavLink></li>
              <li><NavLink to="/matriculas" className="hover:text-brand-red transition">Trabalhe Conosco</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Contact Unit 1 */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-brand-red inline-block pb-1">Unidade Qd 206</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-brand-red" size={18} />
                <span>Quadra 206, Lote X<br/>Recanto das Emas - DF</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-brand-red" size={18} />
                <span>(61) 3333-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-brand-red" size={18} />
                <span>contato206@colegioreacao.com.br</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Unit 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-brand-red inline-block pb-1">Unidade Qd 201</h4>
             <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-brand-red" size={18} />
                <span>Quadra 201, Lote Y<br/>Recanto das Emas - DF</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-brand-red" size={18} />
                <span>(61) 3333-1111</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-brand-red" size={18} />
                <span>contato201@colegioreacao.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2025 Colégio Reação. Todos os direitos reservados.</p>
          <div className="flex gap-4">
             <a href="#" className="hover:text-white">Política de Privacidade</a>
             <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;