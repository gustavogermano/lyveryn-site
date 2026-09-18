import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { galleryItems } from "@/data/gallery";
import { assetPath } from "@/utils/assetPath";

export function GallerySection() {
  return (
    <section id="galeria" className="bg-background py-24">
      <Container>
        <SectionHeading
          eyebrow="Galeria"
          title="Projetos que já"
          highlight="colocamos no ar."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <AnimatedReveal key={item.id} delay={index * 0.1}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary/10">
                <Image
                  src={assetPath(item.image)}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-secondary/80 via-secondary/0 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Badge variant="primary" className="mb-2 self-start">
                    {item.category}
                  </Badge>
                  <p className="font-semibold text-white">{item.title}</p>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
