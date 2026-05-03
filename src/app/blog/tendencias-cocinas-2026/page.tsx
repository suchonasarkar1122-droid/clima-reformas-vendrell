import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Tendencias en cocinas 2026 para pisos del Baix Penedès | CRV",
  description:
    "Tendencias en cocinas 2026: islas centrales, materiales hidrófugos, iluminación LED y soluciones para pisos costeros de El Vendrell, Coma-ruga y Calafell.",
  alternates: { canonical: "/blog/tendencias-cocinas-2026" },
  openGraph: {
    title: "Tendencias en cocinas 2026 para pisos del Baix Penedès",
    description: "Diseño, materiales y distribución para cocinas que duran junto al mar.",
    url: "/blog/tendencias-cocinas-2026",
    type: "article",
    images: ["/images/cocina-isla-tendencias-vendrell.webp"],
  },
};

export default function BlogTendenciasCocinas() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tendencias en cocinas 2026 para pisos del Baix Penedès",
    description: "Análisis de las tendencias de diseño y materiales en cocinas para pisos costeros del Baix Penedès.",
    image: "https://reformasvendrell.es/images/cocina-isla-tendencias-vendrell.webp",
    author: { "@type": "Organization", name: "Clima Reformas Vendrell" },
    publisher: {
      "@id": "https://reformasvendrell.es/#business",
      "@type": "Organization",
      name: "Clima Reformas Vendrell",
    },
    datePublished: "2026-02-26",
    dateModified: "2026-02-26",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Tendencias en cocinas 2026", url: "/blog/tendencias-cocinas-2026" },
      ]} />

      <section className="relative h-[400px] md:h-[480px] w-full overflow-hidden">
        <Image src="/images/cocina-isla-tendencias-vendrell.webp" alt="Cocina con isla central acogedora en piso reformado de El Vendrell" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <div className="max-w-[820px] flex flex-col items-center gap-4">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Tendencias</span>
            <h1 className="font-display font-extrabold text-[28px] md:text-[44px] lg:text-[56px] text-white leading-[1.1]">
              Tendencias en cocinas 2026 para pisos del Baix Penedès
            </h1>
            <p className="text-white/65 text-sm">26 febrero 2026 · 7 min de lectura</p>
          </div>
        </div>
      </section>

      <article className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[780px]">
          <div className="font-body text-dark space-y-6 text-base leading-relaxed">
            <p className="text-lg text-subtitle">
              Las cocinas que se proyectan en 2026 para los pisos costeros del Baix Penedès tienen una premisa clara: aprovechar la luz mediterránea, integrarse con el salón y resistir la humedad marina sin renunciar al diseño. Repasamos las tendencias que más nos están pidiendo en obras recientes en El Vendrell, Coma-ruga, Sant Salvador y Calafell Platja.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">1. Cocinas abiertas al salón</h2>
            <p>
              En pisos años 70-80 de primera línea, derribar el tabique entre cocina y salón es la intervención que más cambia la sensación de espacio. Aporta luz natural a una zona originalmente cerrada y permite cocinar mientras la familia sigue conectada. Eso sí, hay que verificar siempre que el muro no sea de carga: muchos pisos de Coma-ruga lo son.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">2. Isla central como protagonista</h2>
            <p>
              Cuando el piso tiene 80 m² o más, la isla con encimera porcelánica de gran formato se ha convertido en la pieza estrella. Suma superficie de trabajo, integra placa de inducción y se convierte en mesa informal de desayuno. En cocinas más pequeñas, una península sirve la misma función ocupando menos.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">3. Materiales pensados para la humedad marina</h2>
            <p>
              Lo que más hemos cambiado en los últimos años: dejar atrás los frentes laminados estándar y usar tableros hidrófugos con cantos sellados, herrajes inox 316 (no 304), encimeras porcelánicas o de cuarzo (la madera natural sufre demasiado con la sal) y silicones específicos antimoho. Cuesta un 8-12% más, pero la cocina dura el doble.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">4. Iluminación LED en capas</h2>
            <p>
              Tres tipos de luz: ambiental con tira LED en techo perimetral, focal con bañadores empotrados sobre la encimera y decorativa con suspensiones bajas sobre la isla. Toda regulable y con temperaturas de color cálidas (3000K) para que la cocina respire calma incluso al mediodía con persianas medio cerradas.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">5. Paletas naturales con un toque de color</h2>
            <p>
              Maderas claras combinadas con verdes mineralizados, terracotas suaves o azules petróleo. Salimos del blanco total y de los grises industriales. En pisos con vistas al mar, tonalidades arenosas y verdes pino se integran con el paisaje del Garraf y el Penedès. Es una decisión de diseño que envejece bien.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">6. Electrodomésticos integrados y de alta eficiencia</h2>
            <p>
              La placa con extracción integrada gana terreno en cocinas abiertas al salón porque elimina la campana visible. Frigoríficos panelables, lavavajillas integrados en el mobiliario y hornos compactos que combinan microondas y vapor son ya estándar en gama media. La eficiencia energética A o superior es prácticamente obligatoria.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">¿Quieres aplicar alguna en tu cocina?</h2>
            <p>
              Si vives en el Baix Penedès y estás pensando en renovar tu cocina este año, podemos visitar tu piso o casa, valorar qué tendencias encajan con tu espacio y entregarte una propuesta clara antes de empezar. <Link href="/contacto" className="text-accent font-semibold underline">Pídenos una valoración</Link> sin compromiso.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Renovamos tu cocina este año?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Visitamos tu piso o casa en El Vendrell o el Baix Penedès, te explicamos qué tendencias encajan con tu espacio y diseñamos la cocina contigo.</p>
          <Link href="/servicios/reformas-cocinas" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-dark-card transition-colors">
            Ver servicio de cocinas <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
