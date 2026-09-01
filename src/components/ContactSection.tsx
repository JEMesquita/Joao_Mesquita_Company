import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  Globe, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  Clock,
  Sparkles
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ContactFormData } from '../types';
import { useTheme } from '../context/ThemeContext';

export const ContactSection: React.FC = () => {
  const { currentPalette } = useTheme();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: servicesData[0].title,
    message: '',
    urgency: 'media'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable transmission and prepare direct mailto & WhatsApp options
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleOpenWhatsAppFromForm = () => {
    const text = `*NOVA MENSAGEM VIA SITE COMERCIAL - JOÃO MESQUITA TIC*
Nome: ${formData.name}
Empresa: ${formData.company || 'Não informado'}
E-mail: ${formData.email}
Telefone: ${formData.phone}
Serviço de Interesse: ${formData.service}
Mensagem: ${formData.message}`;

    window.open(`https://wa.me/5585920015069?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`Contato Comercial: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmpresa: ${formData.company}\nTelefone: ${formData.phone}\nE-mail: ${formData.email}\nServiço: ${formData.service}\n\nMensagem:\n${formData.message}`
    );
    window.location.href = `mailto:contato@joaomesquita.com.br?cc=esmerinomesquita@gmail.com&subject=${subject}&body=${body}`;
  };

  return (
    <section 
      id="contato" 
      className="py-20 md:py-28 transition-colors duration-300 relative"
      style={{ backgroundColor: currentPalette.bgCanvas }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold mb-4"
            style={{
              backgroundColor: `${currentPalette.accentPrimary}15`,
              borderColor: currentPalette.borderAccent,
              color: currentPalette.accentPrimary
            }}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Fale Conosco &bull; Atendimento Comercial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-4">
            Pronto para Transformar a TI da sua Empresa?
          </h2>

          <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed">
            Entre em contato pelos nossos canais oficiais para solicitar propostas, tirar dúvidas técnicas ou agendar uma reunião presencial ou remota.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Official Channels & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contacts Box */}
            <div 
              className="p-6 sm:p-8 rounded-2xl border shadow-2xl space-y-6"
              style={{
                backgroundColor: currentPalette.bgCard,
                borderColor: currentPalette.borderSubtle
              }}
            >
              <h3 className="text-xl font-bold text-white font-display border-b pb-3" style={{ borderColor: currentPalette.borderSubtle }}>
                Canais de Atendimento Direto
              </h3>

              <div className="space-y-4 text-sm">
                
                {/* WhatsApp / Tel Principal */}
                <div className="flex items-start gap-3.5">
                  <div 
                    className="p-2.5 rounded-xl border shrink-0 mt-0.5"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderAccent,
                      color: currentPalette.accentPrimary
                    }}
                  >
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#94a3b8] block font-medium">
                      WhatsApp & Telefone Principal (Novo)
                    </span>
                    <a
                      href="https://wa.me/5585920015069"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold transition-colors font-mono"
                      style={{ color: currentPalette.accentPrimary }}
                    >
                      (85) 92001-5069
                    </a>
                  </div>
                </div>

                {/* Tel Secundário */}
                <div className="flex items-start gap-3.5">
                  <div 
                    className="p-2.5 rounded-xl border shrink-0 mt-0.5"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderAccent,
                      color: currentPalette.accentPrimary
                    }}
                  >
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#94a3b8] block font-medium">
                      Telefone Secundário (Ativo)
                    </span>
                    <a
                      href="https://wa.me/5585996613303"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-slate-200 hover:text-white transition-colors font-mono"
                    >
                      (85) 99661-3303
                    </a>
                  </div>
                </div>

                {/* E-mails */}
                <div className="flex items-start gap-3.5">
                  <div 
                    className="p-2.5 rounded-xl border shrink-0 mt-0.5"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderAccent,
                      color: currentPalette.accentPrimary
                    }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#94a3b8] block font-medium">
                      E-mail Comercial & Pessoal
                    </span>
                    <a
                      href="mailto:contato@joaomesquita.com.br"
                      className="text-sm font-semibold transition-colors block"
                      style={{ color: currentPalette.accentPrimary }}
                    >
                      contato@joaomesquita.com.br
                    </a>
                    <a
                      href="mailto:esmerinomesquita@gmail.com"
                      className="text-xs text-[#94a3b8] hover:text-slate-200 transition-colors block mt-0.5"
                    >
                      esmerinomesquita@gmail.com
                    </a>
                  </div>
                </div>

                {/* Websites */}
                <div className="flex items-start gap-3.5">
                  <div 
                    className="p-2.5 rounded-xl border shrink-0 mt-0.5"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderAccent,
                      color: currentPalette.accentPrimary
                    }}
                  >
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#94a3b8] block font-medium">
                      Website Oficial
                    </span>
                    <a
                      href="https://www.joaomesquita.com.br"
                      className="text-sm font-bold text-white hover:underline transition-colors"
                    >
                      www.joaomesquita.com.br
                    </a>
                    <span className="text-[11px] text-[#94a3b8] block mt-0.5">
                      (Redirecionamento integrado de <em>joaomesquita.net.br</em>)
                    </span>
                  </div>
                </div>

                {/* Localização */}
                <div className="flex items-start gap-3.5">
                  <div 
                    className="p-2.5 rounded-xl border text-slate-300 shrink-0 mt-0.5"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderSubtle
                    }}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#94a3b8] block font-medium">
                      Sede e Atuação
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Ceará, Brasil
                    </span>
                    <span className="text-xs text-[#94a3b8] block">
                      Atendimento presencial no Ceará e remoto para todo o Brasil
                    </span>
                  </div>
                </div>

              </div>

              {/* Social links grid */}
              <div className="pt-4 border-t" style={{ borderColor: currentPalette.borderSubtle }}>
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-3">
                  Redes Sociais e Perfil Acadêmico
                </span>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <a
                    href="https://www.linkedin.com/in/joao-mesquita-30560b29/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border flex items-center justify-center text-slate-200 hover:text-white transition-all shadow"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderSubtle
                    }}
                    title="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in text-base"></i>
                  </a>

                  <a
                    href="https://www.facebook.com/JEMesquita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border flex items-center justify-center text-slate-200 hover:text-white transition-all shadow"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderSubtle
                    }}
                    title="Facebook"
                  >
                    <i className="fab fa-facebook-f text-base"></i>
                  </a>

                  <a
                    href="https://www.instagram.com/esmerinomesquita/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border flex items-center justify-center text-slate-200 hover:text-white transition-all shadow"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderSubtle
                    }}
                    title="Instagram"
                  >
                    <i className="fab fa-instagram text-base"></i>
                  </a>

                  <a
                    href="mailto:esmerinomesquita@gmail.com"
                    className="w-10 h-10 rounded-lg border flex items-center justify-center text-slate-200 hover:text-white transition-all shadow"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderSubtle
                    }}
                    title="E-mail direto"
                  >
                    <i className="fas fa-envelope text-base"></i>
                  </a>

                  <a
                    href="https://lattes.cnpq.br/3630898583941744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border flex items-center justify-center text-slate-200 hover:text-white transition-all shadow"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderSubtle
                    }}
                    title="Currículo Lattes CNPq"
                  >
                    <i className="fas fa-graduation-cap text-base"></i>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div 
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border shadow-2xl"
            style={{
              backgroundColor: currentPalette.bgCard,
              borderColor: currentPalette.borderSubtle
            }}
          >
            
            {submitted ? (
              <div className="p-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Mensagem Pronta para Envio!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Obrigado, <strong>{formData.name}</strong>! Escolha como prefere finalizar o contato para obter resposta imediata:
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <button
                    onClick={handleOpenWhatsAppFromForm}
                    className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm shadow-md cursor-pointer ${currentPalette.buttonClass}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Concluir via WhatsApp</span>
                  </button>

                  <button
                    onClick={handleOpenMailto}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl border text-white font-semibold text-sm shadow-md cursor-pointer"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderSubtle
                    }}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Enviar por E-mail</span>
                  </button>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#94a3b8] hover:text-slate-200 underline pt-4 block mx-auto cursor-pointer"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-display mb-1">
                    Formulário de Contato & Proposta
                  </h3>
                  <p className="text-xs text-[#94a3b8] mb-4">
                    Preencha os campos abaixo para receber nosso retorno em até 2 horas úteis.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Carlos Silva"
                      className="w-full px-3.5 py-2.5 rounded-xl border text-white text-sm focus:outline-none placeholder:text-slate-600"
                      style={{
                        backgroundColor: currentPalette.bgCanvas,
                        borderColor: currentPalette.borderSubtle
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Empresa / Instituição
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ex: Empresa XYZ Ltda"
                      className="w-full px-3.5 py-2.5 rounded-xl border text-white text-sm focus:outline-none placeholder:text-slate-600"
                      style={{
                        backgroundColor: currentPalette.bgCanvas,
                        borderColor: currentPalette.borderSubtle
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contato@empresa.com.br"
                      className="w-full px-3.5 py-2.5 rounded-xl border text-white text-sm focus:outline-none placeholder:text-slate-600"
                      style={{
                        backgroundColor: currentPalette.bgCanvas,
                        borderColor: currentPalette.borderSubtle
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(85) 99999-9999"
                      className="w-full px-3.5 py-2.5 rounded-xl border text-white text-sm focus:outline-none placeholder:text-slate-600"
                      style={{
                        backgroundColor: currentPalette.bgCanvas,
                        borderColor: currentPalette.borderSubtle
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Serviço de TIC de Interesse
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border text-white text-sm focus:outline-none"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderSubtle
                    }}
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.cnaeCode})
                      </option>
                    ))}
                    <option value="Outro / Pacote Integrado">Outro / Pacote Integrado sob Demanda</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Detalhes do Projeto / Mensagem *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva brevemente suas necessidades, desafios atuais ou expectativas de prazo..."
                    className="w-full px-3.5 py-2.5 rounded-xl border text-white text-sm focus:outline-none placeholder:text-slate-600 resize-none"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderSubtle
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  id="contact-form-submit"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm shadow-lg transition-all disabled:opacity-50 cursor-pointer ${currentPalette.buttonClass}`}
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Processando...' : 'Enviar Solicitação de Orçamento'}</span>
                </button>
                <p className="text-[11px] text-center text-[#94a3b8]">
                  Seus dados estão protegidos conforme as diretrizes da LGPD.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
