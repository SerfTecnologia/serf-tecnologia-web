/**
 * Dados de contato da Serf Tecnologia
 * Centralize aqui para fácil manutenção
 *
 * INSTRUÇÕES DE EDIÇÃO:
 * 1. Email: Altere o valor de email
 * 2. Telefone: Altere phone (sem formatação) e phoneFormatted (com formatação)
 * 3. Mensagem WhatsApp: Altere whatsappMessage
 * 4. Localização: Altere city e state
 * 5. Redes Sociais: Altere linkedin e instagram com URLs completos
 */

export const CONTACT_INFO = {
  // Email institucional para recebimento de leads
  email: "serftecnologia@gmail.com",
  // Telefone/WhatsApp para contato (apenas números)
  phone: "14997821490",
  // Telefone formatado para exibição
  phoneFormatted: "(14) 99782-1490",
  // Mensagem padrão para WhatsApp
  whatsappMessage: "Olá! Gostaria de falar com a Serf Tecnologia sobre consultoria e suporte de TI.",
  // Informações da empresa
  companyName: "Serf Tecnologia",
  tagline: "Suporte que resolve.",
  // Localização
  city: "Bauru",
  state: "SP",
  // Redes sociais
  linkedin: "https://www.linkedin.com/company/110831288/",
  instagram: "https://www.instagram.com/serf_tecnologia/", // Link do Instagram da Serf Tecnologia
};

/**
 * Gera URL do WhatsApp com mensagem pré-preenchida
 * @param customMessage - Mensagem customizada (opcional)
 * @returns URL do WhatsApp
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const phone = CONTACT_INFO.phone;
  const message = customMessage || CONTACT_INFO.whatsappMessage;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/55${phone}?text=${encodedMessage}`;
}

/**
 * Gera link mailto com assunto pré-preenchido
 * @param subject - Assunto do email
 * @returns URL mailto
 */
export function getEmailUrl(subject?: string): string {
  const email = CONTACT_INFO.email;
  const defaultSubject = "Consultoria e Suporte de TI - Serf Tecnologia";
  const encodedSubject = encodeURIComponent(subject || defaultSubject);
  return `mailto:${email}?subject=${encodedSubject}`;
}
