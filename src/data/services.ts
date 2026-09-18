export type Service = {
  id: string;
  icon: "monitor" | "utensils" | "layers";
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "sites-institucionais",
    icon: "monitor",
    title: "Sites Institucionais",
    description:
      "Design moderno, responsivo e otimizado para todos os dispositivos. Ideal para empresas que querem mais credibilidade e visibilidade.",
    features: [
      "Layout personalizado",
      "Responsivo (mobile e desktop)",
      "Otimização para buscadores (SEO)",
      "Fácil de atualizar",
    ],
  },
  {
    id: "cardapios-digitais",
    icon: "utensils",
    title: "Cardápios Digitais",
    description:
      "Cardápios online modernos, com fotos, descrição dos itens e integração com o WhatsApp para pedidos.",
    features: [
      "Visual limpo e intuitivo",
      "Fotos e descrições dos pratos",
      "Botão de pedido no WhatsApp",
      "Atualização simples",
    ],
  },
  {
    id: "combo",
    icon: "layers",
    title: "Combo Completo",
    description:
      "O melhor dos dois mundos: site institucional para apresentar sua empresa e cardápio digital para vender mais, tudo integrado.",
    features: [
      "Site + Cardápio Digital",
      "Identidade visual única",
      "Integração completa com WhatsApp",
      "Condição especial de investimento",
    ],
  },
];
