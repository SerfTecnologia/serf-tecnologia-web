import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { CONTACT_INFO, getWhatsAppUrl, getEmailUrl } from "@shared/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2D5B] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#A3E635]">{CONTACT_INFO.companyName}</h3>
            <p className="text-gray-300 mb-4">
              {CONTACT_INFO.tagline}
            </p>
            <p className="text-sm text-gray-400">
              Consultoria e suporte de TI profissional para sua empresa funcionar sem parar.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#22C55E] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#22C55E] transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#22C55E] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-[#22C55E] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#22C55E] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-white">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#22C55E] transition-colors">
                  Consultoria de TI
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#22C55E] transition-colors">
                  Suporte Técnico
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#22C55E] transition-colors">
                  Manutenção Preventiva
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#22C55E] transition-colors">
                  Segurança
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#22C55E]" />
                <a href={getEmailUrl()} className="text-gray-300 hover:text-[#22C55E] transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#22C55E]" />
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#22C55E] transition-colors">
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#22C55E] mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  {CONTACT_INFO.city}, {CONTACT_INFO.state}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Logo watermark */}
        <div className="absolute top-8 right-8 opacity-5 pointer-events-none">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663295934776/ZakMAhCECGBRBVxz.png" alt="" className="h-24 w-auto" />
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-6 relative z-10">
          <p>
            &copy; {currentYear} Serf Tecnologia. Todos os direitos reservados.
          </p>
          
          {/* Social media links */}
          <div className="flex gap-4">
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#22C55E] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#22C55E] transition-colors"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#22C55E] transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-[#22C55E] transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
