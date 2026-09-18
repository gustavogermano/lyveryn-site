import { Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/common/BrandIcons";
import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";
import { navigationConfig } from "@/config/navigation.config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Navegação
          </h3>
          <ul className="flex flex-col gap-3">
            {navigationConfig.footer.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Contato
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              {siteConfig.contact.email}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              {siteConfig.contact.address.full}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Redes sociais
          </h3>
          <div className="flex gap-3">
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary hover:text-secondary"
            >
              <InstagramIcon width={18} height={18} />
            </a>
            <a
              href={siteConfig.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary hover:text-secondary"
            >
              <FacebookIcon width={18} height={18} />
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
          <span>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </span>
          <span>Tecnologia • Design • Resultados</span>
        </Container>
      </div>
    </footer>
  );
}
