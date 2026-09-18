export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marina Souza",
    role: "Proprietária, SeuSabor Hamburgueria",
    content:
      "Depois que colocamos o cardápio digital com pedido pelo WhatsApp, nossos pedidos aumentaram muito e o atendimento ficou muito mais rápido. A Lyveryn entendeu exatamente o que a gente precisava.",
    rating: 5,
  },
];
