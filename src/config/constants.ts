/**
 * CONFIGURAÇÕES DO SITE - PERSONALIZE AQUI!
 * 
 * Este arquivo centraliza todas as informações personalizáveis do site.
 * Troque os textos, links e informações conforme sua necessidade.
 */

// ====== INFORMAÇÕES DO NEGÓCIO ======
export const SITE_CONFIG = {
  // TROCAR: Nome do negócio/profissional
  businessName: "Seu Negócio",
  
  // TROCAR: Descrição breve do negócio
  tagline: "Soluções profissionais para o seu sucesso",
  
  // TROCAR: Telefone (formato: (XX) XXXXX-XXXX)
  phone: "(11) 99999-9999",
  
  // TROCAR: Email de contato
  email: "contato@seunegocio.com.br",
  
  // TROCAR: Endereço completo
  address: "Rua Exemplo, 123 - São Paulo, SP",
};

// ====== LINKS DE REDES SOCIAIS ======
export const SOCIAL_LINKS = {
  // TROCAR: Link do WhatsApp (formato: https://wa.me/5511999999999)
  // Para obter seu link: use seu número com DDI + DDD + número (sem espaços)
  whatsapp: "https://wa.me/5511999999999",
  
  // TROCAR: Link do Instagram (formato: https://instagram.com/seuperfil)
  instagram: "https://instagram.com/seuperfil",
  
  // TROCAR: Link do Facebook (opcional)
  facebook: "https://facebook.com/seuperfil",
  
  // TROCAR: Link do LinkedIn (opcional)
  linkedin: "https://linkedin.com/in/seuperfil",
};

// ====== TEXTOS DO CARROSSEL (HERO) ======
export const CAROUSEL_SLIDES = [
  {
    // TROCAR: Título do primeiro slide
    title: "Bem-vindo ao Nosso Espaço",
    // TROCAR: Subtítulo/descrição do primeiro slide
    subtitle: "Oferecemos serviços de excelência para você",
    // TROCAR: Texto do botão
    buttonText: "Saiba Mais",
  },
  {
    // TROCAR: Título do segundo slide
    title: "Qualidade e Profissionalismo",
    // TROCAR: Subtítulo/descrição do segundo slide
    subtitle: "Sua satisfação é nossa prioridade",
    // TROCAR: Texto do botão
    buttonText: "Entre em Contato",
  },
  {
    // TROCAR: Título do terceiro slide
    title: "Transforme Sua Experiência",
    // TROCAR: Subtítulo/descrição do terceiro slide
    subtitle: "Descubra o que podemos fazer por você",
    // TROCAR: Texto do botão
    buttonText: "Agende Agora",
  },
];

// ====== SERVIÇOS/DESTAQUES ======
export const SERVICES = [
  {
    // TROCAR: Título do serviço 1
    title: "Serviço Premium",
    // TROCAR: Descrição do serviço 1
    description: "Atendimento personalizado com foco em resultados excepcionais",
    // TROCAR: Ícone (use nomes do Lucide React)
    icon: "Star",
  },
  {
    // TROCAR: Título do serviço 2
    title: "Consultoria Especializada",
    // TROCAR: Descrição do serviço 2
    description: "Orientação profissional para alcançar seus objetivos",
    // TROCAR: Ícone
    icon: "Target",
  },
  {
    // TROCAR: Título do serviço 3
    title: "Suporte Contínuo",
    // TROCAR: Descrição do serviço 3
    description: "Acompanhamento próximo em cada etapa do processo",
    // TROCAR: Ícone
    icon: "Heart",
  },
];

// ====== MENSAGEM DO BOTÃO FLUTUANTE WHATSAPP ======
export const WHATSAPP_MESSAGE = {
  // TROCAR: Texto que aparece no botão flutuante
  buttonText: "Fale Conosco",
  // TROCAR: Mensagem pré-preenchida ao clicar (opcional, deixe vazio se não quiser)
  defaultMessage: "Olá! Gostaria de saber mais sobre os serviços.",
};

// ====== CONFIGURAÇÃO DO CARROSSEL ======
export const CAROUSEL_CONFIG = {
  // TROCAR: Tempo de transição automática em milissegundos (5000 = 5 segundos)
  autoPlayInterval: 5000,
  // TROCAR: Ativar/desativar transição automática
  autoPlay: true,
};
