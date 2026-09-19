export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "Quanto tempo leva para meu site ficar pronto?",
    answer:
      "O prazo varia de acordo com o projeto, mas trabalhamos com agilidade e organização para entregar o mais rápido possível, sem abrir mão da qualidade.",
  },
  {
    id: "2",
    question: "O cardápio digital funciona no celular?",
    answer:
      "Sim. Todos os nossos cardápios são construídos para funcionar perfeitamente em celulares, tablets e computadores, já que a maioria dos clientes acessa pelo WhatsApp no celular.",
  },
  {
    id: "3",
    question: "Como funciona o pedido pelo WhatsApp?",
    answer:
      "O cliente escolhe os itens no cardápio digital e, com um clique, o pedido é montado automaticamente em uma mensagem pronta para ser enviada no WhatsApp da sua empresa.",
  },
  {
    id: "4",
    question: "Posso atualizar os preços e produtos sozinho?",
    answer:
      "Não. É necessário contar com o nosso suporte para realizar essas atualizações.",
  },
  {
    id: "5",
    question: "Vocês atendem empresas fora de Piracicaba?",
    answer:
      "Sim! Atendemos empresas de todo o Brasil de forma 100% online, do planejamento à entrega do projeto.",
  },
];
