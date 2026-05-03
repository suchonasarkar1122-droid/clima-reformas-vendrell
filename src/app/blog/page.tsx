import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Blog de Reformas en El Vendrell · Consejos y Tendencias | CRV",
  description:
    "Blog de Clima Reformas Vendrell: precios de reforma en el Baix Penedès, tendencias en cocinas y baños, ayudas a la rehabilitación y guías prácticas.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog · Clima Reformas Vendrell",
    description: "Consejos y guías sobre reformas en El Vendrell, Calafell, Cunit y todo el Baix Penedès.",
    url: "/blog",
    images: ["/images/reforma-integral-vivienda-vendrell.webp"],
  },
};

const posts = [
  {
    slug: "cuanto-cuesta-reformar-piso-vendrell",
    title: "¿Cuánto cuesta reformar un piso en El Vendrell en 2026?",
    excerpt:
      "Guía actualizada con rangos por metro cuadrado para pisos costeros y casas de pueblo del Baix Penedès, desglose por estancias y consejos para reducir el coste sin perder calidad.",
    image: "/images/piso-reformado-completo-vendrell.webp",
    imageAlt: "Reforma de piso costero en El Vendrell - precios 2026",
    date: "10 marzo 2026",
    category: "Guía de precios",
  },
  {
    slug: "tendencias-cocinas-2026",
    title: "Tendencias en cocinas 2026: ideas para pisos costeros",
    excerpt:
      "Cocinas abiertas al salón, islas centrales, materiales que aguantan la humedad marina y soluciones de iluminación LED. Cómo aplicarlas en pisos del Baix Penedès.",
    image: "/images/cocina-isla-tendencias-vendrell.webp",
    imageAlt: "Cocina con isla central acogedora - tendencias en reformas 2026 para El Vendrell",
    date: "26 febrero 2026",
    category: "Tendencias",
  },
  {
    slug: "ayudas-rehabilitacion-energetica-baix-penedes",
    title: "Ayudas a la rehabilitación energética en el Baix Penedès",
    excerpt:
      "Fondos Next Generation, programas de la Generalitat y subvenciones del IDAE para mejorar la eficiencia energética de pisos y casas en El Vendrell, Calafell y Cunit.",
    image: "/images/casa-eficiencia-energetica-vendrell.webp",
    imageAlt: "Casa moderna con jardín - ayudas para rehabilitación energética en el Baix Penedès",
    date: "12 febrero 2026",
    category: "Ayudas y subvenciones",
  },
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
      ]} />

      {/* ============ HERO ============ */}
      <section className="relative h-[340px] md:h-[420px] w-full overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <span className="font-body font-bold text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Clima Reformas Vendrell
          </span>
          <h1 className="font-display font-extrabold text-[28px] sm:text-[36px] md:text-[52px] lg:text-[64px] text-white leading-[1] px-2">
            Blog — Consejos y Guías sobre Reformas en El Vendrell
          </h1>
          <p className="text-white/65 text-base md:text-lg mt-4 max-w-[560px]">
            Precios, tendencias y trámites prácticos para reformar pisos y casas en el Baix Penedès.
          </p>
        </div>
      </section>

      {/* ============ POSTS GRID ============ */}
      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-[20px] overflow-hidden border border-dark/5 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <span className="text-subtitle text-xs font-body uppercase tracking-wider">
                    {post.date}
                  </span>
                  <h2 className="font-body font-bold text-dark text-lg leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-subtitle text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="font-body font-bold text-accent text-sm inline-flex items-center gap-1 mt-2">
                    Leer artículo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
