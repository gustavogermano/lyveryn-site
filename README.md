# Lyveryn — Site Institucional

Site institucional da **Lyveryn**, construído com a base arquitetural padrão da agência (Next.js 15 + App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons).

## Stack

- Next.js 15 (App Router, Server Components)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion (micro animações)
- Lucide React (ícones)

## Estrutura

```
src/
├── app/            # rotas, layout, metadata, robots.ts, sitemap.ts
├── components/
│   ├── common/     # Logo, WhatsAppButton, AnimatedReveal
│   ├── layout/     # Header, Footer
│   ├── sections/   # Hero, Sobre, Serviços, Planos, Depoimentos, FAQ, Contato...
│   └── ui/         # Button, Card, Input, Modal, Accordion...
├── config/         # site.config.ts, theme.config.ts, navigation.config.ts, seo.config.ts
├── data/           # services.ts, pricing.ts, testimonials.ts, faq.ts, gallery.ts
├── hooks/
├── lib/
├── services/
├── types/
└── utils/
```

Para criar um novo site de cliente reaproveitando essa base, basta alterar `config/`, `data/`, imagens, cores (`theme.config.ts` + `globals.css`) e a fonte — sem tocar na arquitetura.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção (export estático)

```bash
npm run build
```

O resultado estático é gerado na pasta `out/`.

## Publicação no GitHub Pages

1. Crie o repositório no GitHub.
2. **Importante:** abra `next.config.mjs` e ajuste a constante `REPO_NAME` para o nome exato do repositório (usado em `basePath`/`assetPrefix`). Por padrão está como `lyveryn-site`.
3. Em **Settings → Pages**, defina a fonte como **GitHub Actions**.
4. Faça push para a branch `main` — o workflow em `.github/workflows/deploy.yml` builda e publica automaticamente.

## Configuração da empresa

Todos os dados de contato, redes sociais e SEO ficam centralizados em `src/config/site.config.ts`. As cores da marca (extraídas do mídia kit) estão em `src/config/theme.config.ts`:

- Verde Tech (primária): `#A3FF6B`
- Azul Grafite (secundária): `#1F2937`
- Cinza (apoio): `#94A3BB`
- Cinza Claro (fundo): `#E5E7EB`
- Tipografia: Montserrat

## Observações

- As imagens em `public/images/gallery/` e `public/images/og-image.jpg` são placeholders — substitua pelas artes reais do cliente antes de publicar.
- O depoimento em `src/data/testimonials.ts` é fictício, conforme solicitado no briefing, e deve ser substituído por depoimentos reais quando disponíveis.
