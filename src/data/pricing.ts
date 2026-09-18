export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  highlighted?: boolean;
  features: string[];
  ctaLabel: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "site-institucional",
    name: "Site Institucional",
    description: "Presença profissional para sua empresa na internet.",
    features: [
      "Design moderno e responsivo",
      "Otimização para buscadores (SEO)",
      "Botão de contato via WhatsApp",
      "Integração com redes sociais",
      "Suporte para atualização de conteúdo",
    ],
    ctaLabel: "Quero um site",
  },
  {
    id: "cardapio-digital",
    name: "Cardápio Digital",
    description: "Praticidade para o cliente e mais pedidos para você.",
    highlighted: true,
    features: [
      "Cardápio online com fotos",
      "Pedido direto pelo WhatsApp",
      "Categorias e descrições dos itens",
      "Atualização simples de preços",
      "Design alinhado à sua marca",
    ],
    ctaLabel: "Quero um cardápio",
  },
  {
    id: "combo",
    name: "Combo Site + Cardápio",
    description: "A solução completa para o seu negócio digital.",
    features: [
      "Site institucional completo",
      "Cardápio digital integrado",
      "Identidade visual unificada",
      "Condição especial de investimento",
      "Atendimento próximo e personalizado",
    ],
    ctaLabel: "Quero o combo",
  },
];
