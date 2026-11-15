import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Blog de Reformas en El Vendrell",
  description:
    "Guías para reformar en El Vendrell: humedad en pisos de playa, precios orientativos, cocinas y ayudas energéticas, escritas desde la obra.",
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
    slug: "humedad-condensacion-pisos-playa-invierno",
    title: "Humedad y condensación en pisos de playa en invierno",
    excerpt:
      "Por qué aparece moho en los apartamentos de Coma-ruga y Sant Salvador que pasan el invierno cerrados, cómo distinguirlo de una filtración y qué se puede hacer con y sin obra.",
    image: "/images/blog/humedad-condensacion-pisos-playa-invierno.webp",
    imageAlt: "Humedad y condensación en pisos de playa en invierno en El Vendrell",
    date: "15 noviembre 2026",
    category: "Mantenimiento",
  },
  {
    slug: "cuanto-cuesta-reformar-piso-vendrell",
    title: "¿Cuánto cuesta reformar un piso en El Vendrell en 2026?",
    excerpt:
      "Rangos orientativos por metro cuadrado y por estancia, partidas que encarecen los pisos de la costa y cómo comparar presupuestos sin llevarte sorpresas.",
    image: "/images/blog/cuanto-cuesta-reformar-piso-vendrell.webp",
    imageAlt: "¿Cuánto cuesta reformar un piso en El Vendrell en 2026?",
    date: "10 marzo 2026",
    category: "Guía de precios",
  },
  {
    slug: "tendencias-cocinas-2026",
    title: "Tendencias en cocinas 2026: ideas para pisos costeros",
    excerpt:
      "Penínsulas, encimeras compactas, colores cálidos y luz por zonas: qué ideas de 2026 funcionan en un apartamento junto al mar y cuáles conviene evitar.",
    image: "/images/blog/tendencias-cocinas-2026.webp",
    imageAlt: "Tendencias en cocinas 2026 para pisos del Baix Penedès",
    date: "26 febrero 2026",
    category: "Tendencias",
  },
  {
    slug: "ayudas-rehabilitacion-energetica-baix-penedes",
    title: "Ayudas a la rehabilitación energética en el Baix Penedès",
    excerpt:
      "Tipos de ayuda y deducción para ventanas, aislamiento, aerotermia o placas solares, qué obras suelen encajar y cómo prepararse antes de pedirlas.",
    image: "/images/blog/ayudas-rehabilitacion-energetica-baix-penedes.webp",
    imageAlt: "Ayudas a la rehabilitación energética en el Baix Penedès",
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
            Lo que aprendemos en cada obra, contado para quien está pensando en reformar en El Vendrell y alrededores.
          </p>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="bg-beige px-5 pt-16 md:pt-20">
        <div className="mx-auto max-w-[860px] space-y-4 font-body text-subtitle text-base leading-relaxed">
          <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark leading-[1.1]">Para qué sirve este blog</h2>
          <p>
            Muchas de las preguntas que nos hacen se repiten de una visita a otra: por qué sale moho en el piso de la playa cuando llega el frío, qué precio tiene más o menos reformar un apartamento de los setenta, si se puede abrir la cocina al comedor sin pedir licencia o si hay alguna ayuda para cambiar las ventanas. Aquí respondemos con calma a esas dudas, con ejemplos de los pisos de Coma-ruga y Sant Salvador, de las casas del casco antiguo y de los adosados de las urbanizaciones del municipio.
          </p>
          <p>
            No publicamos por publicar. Cada artículo nace de algo que hemos visto en obra o que nos han preguntado varias veces, y lo revisamos cuando cambian los precios, la normativa o las convocatorias de ayudas. Si quieres profundizar en un tipo de trabajo concreto, encontrarás más detalle en las páginas de <Link href="/servicios" className="text-accent font-semibold underline">servicios de reforma</Link>, y si tu vivienda está fuera del término municipal, en las de <Link href="/zonas" className="text-accent font-semibold underline">zonas donde trabajamos</Link>.
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
