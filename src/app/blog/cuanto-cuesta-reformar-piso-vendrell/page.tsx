import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "¿Cuánto cuesta reformar un piso en El Vendrell en 2026? | CRV",
  description:
    "Precios reales 2026 para reformar un piso en El Vendrell, Coma-ruga y el Baix Penedès: rangos por m², desglose por estancia y consejos para ajustar el coste.",
  alternates: { canonical: "/blog/cuanto-cuesta-reformar-piso-vendrell" },
  openGraph: {
    title: "¿Cuánto cuesta reformar un piso en El Vendrell en 2026?",
    description: "Guía de precios actualizada por estancias para pisos costeros del Baix Penedès.",
    url: "/blog/cuanto-cuesta-reformar-piso-vendrell",
    type: "article",
    images: ["/images/piso-reformado-completo-vendrell.webp"],
  },
};

export default function BlogPrecioReformaPiso() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Cuánto cuesta reformar un piso en El Vendrell en 2026?",
    description:
      "Guía completa con precios actualizados por metro cuadrado para pisos costeros y casas del Baix Penedès.",
    image: "https://reformasvendrell.es/images/piso-reformado-completo-vendrell.webp",
    author: { "@type": "Organization", name: "Clima Reformas Vendrell" },
    publisher: {
      "@id": "https://reformasvendrell.es/#business",
      "@type": "Organization",
      name: "Clima Reformas Vendrell",
    },
    datePublished: "2026-03-10",
    dateModified: "2026-03-10",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "¿Cuánto cuesta reformar un piso en El Vendrell?", url: "/blog/cuanto-cuesta-reformar-piso-vendrell" },
      ]} />

      <section className="relative h-[400px] md:h-[480px] w-full overflow-hidden">
        <Image src="/images/piso-reformado-completo-vendrell.webp" alt="Piso costero reformado en El Vendrell" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <div className="max-w-[820px] flex flex-col items-center gap-4">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Guía de precios</span>
            <h1 className="font-display font-extrabold text-[28px] md:text-[44px] lg:text-[56px] text-white leading-[1.1]">
              ¿Cuánto cuesta reformar un piso en El Vendrell en 2026?
            </h1>
            <p className="text-white/65 text-sm">10 marzo 2026 · 8 min de lectura</p>
          </div>
        </div>
      </section>

      <article className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[780px]">
          <div className="font-body text-dark space-y-6 text-base leading-relaxed">
            <p className="text-lg text-subtitle">
              Reformar un piso costero en El Vendrell, Coma-ruga o Sant Salvador es una decisión que mucha gente del Baix Penedès retrasa por miedo a no controlar el presupuesto. La buena noticia es que, con el desglose adecuado, los costes son perfectamente predecibles. En esta guía actualizada a 2026 te enseñamos qué partidas marcan el precio total y qué rangos manejamos en obras reales en la comarca.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Rangos generales por metro cuadrado</h2>
            <p>
              Para un piso costero estándar de 60 a 90 m² (la tipología más habitual en Coma-ruga, Sant Salvador, Calafell Platja y Cunit Platja), los rangos en gama media-alta se mueven entre <strong>450 y 700 €/m²</strong> en reforma integral. Eso incluye demolición, instalaciones nuevas, suelos, alicatados, sanitarios, mobiliario de cocina básico, carpintería interior y pintura.
            </p>
            <p>
              Si el piso parte de un estado muy degradado (humedad ascendente, instalación eléctrica anterior a los años 80, ventanas sin rotura de puente térmico) o se quieren acabados premium, el coste puede subir hasta <strong>900 €/m²</strong>. En cambio, una reforma parcial bien planificada (cocina, dos baños y suelos) puede salir por unos <strong>20.000-30.000 €</strong> en un piso pequeño.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Desglose por estancias</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Cocina (8-12 m²):</strong> entre 7.000 y 14.000 € incluyendo encimera porcelánica, mobiliario hidrófugo, electrodomésticos básicos y fontanería renovada.</li>
              <li><strong>Baño completo (4-6 m²):</strong> entre 4.500 y 8.000 € sustituyendo bañera por plato de obra, mampara fija, sanitarios suspendidos y alicatado floor-to-ceiling.</li>
              <li><strong>Salón (20-25 m²):</strong> 3.500-6.000 € si solo cambian suelos y pintura; sube si se redistribuye con la cocina.</li>
              <li><strong>Dormitorios (12-16 m² cada uno):</strong> 1.800-3.500 € por estancia: suelo, pintura y armarios empotrados básicos.</li>
              <li><strong>Carpintería exterior:</strong> ventanas con rotura de puente térmico para piso de 80 m² entre 6.000 y 11.000 € según fabricante.</li>
            </ul>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Particularidades de los pisos costeros del Baix Penedès</h2>
            <p>
              Los pisos años 70-80 de primera línea de Coma-ruga, Calafell Platja o Cunit suelen arrastrar problemas comunes que conviene presupuestar desde el principio: humedades por condensación, instalación eléctrica con dos circuitos como mucho, ventanas correderas de aluminio sin rotura térmica y fontanería de plomo o hierro galvanizado. Sumar estas partidas puede añadir <strong>5.000-9.000 €</strong> al presupuesto base.
            </p>
            <p>
              Otra particularidad: los materiales tienen que aguantar la humedad marina. Sellados con poliuretanos resistentes, herrajes inox, pinturas hidrófugas y madera tratada para exteriores aunque vayan dentro. Es un sobrecoste pequeño pero evita problemas a los dos años.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Cómo ajustar el coste sin perder calidad</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Conserva la distribución</strong> si funciona. Mover tabiques, sobre todo en pisos con paredes maestras de los años 70, encarece la obra entre un 15 y un 25%.</li>
              <li><strong>Elige porcelánicos de stock.</strong> Hay piezas excelentes en gamas comerciales por menos de 20 €/m² que aguantan perfectamente.</li>
              <li><strong>Reutiliza la cocina si está sana</strong> (frentes y herrajes) y cambia solo encimera y electrodomésticos: ahorras 4.000-6.000 €.</li>
              <li><strong>Negocia plazos en temporada baja</strong> (octubre-marzo). En el Baix Penedès la demanda baja y los proveedores tienen margen para ajustar.</li>
            </ul>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Solicita tu valoración detallada</h2>
            <p>
              En Clima Reformas Vendrell te visitamos sin coste, evaluamos el estado real de tu piso en El Vendrell, Coma-ruga, Sant Salvador o cualquier municipio del Baix Penedès, y te entregamos un presupuesto detallado por partidas. <Link href="/contacto" className="text-accent font-semibold underline">Contáctanos</Link> y empezamos.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Quieres una valoración real de tu piso?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Pasamos por tu vivienda sin compromiso y te entregamos un presupuesto detallado por partidas, por escrito.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-dark-card transition-colors">
            Pedir valoración gratuita <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
