export type NavItem = {
  label: string;
  href: string;
};

export const navigationConfig: {
  main: NavItem[];
  footer: NavItem[];
} = {
  main: [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#servicos" },
    { label: "Por que a Lyveryn", href: "#por-que" },
    { label: "Processo", href: "#processo" },
    { label: "Planos", href: "#planos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
  footer: [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#servicos" },
    { label: "Planos", href: "#planos" },
    { label: "Contato", href: "#contato" },
  ],
};
