import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: { absolute: "¿Cuánto cuesta reformar un piso en El Vendrell en 2026?" },
  description:
    "Rangos orientativos 2026 para reformar un piso en El Vendrell, Coma-ruga y Sant Salvador: precio por m², por estancia y qué partidas hacen subir la cifra.",
  alternates: { canonical: "/blog/cuanto-cuesta-reformar-piso-vendrell" },
  openGraph: {
    title: "¿Cuánto cuesta reformar un piso en El Vendrell en 2026?",
    description: "Qué mueve el precio de una reforma de piso en la costa y el centro del Vendrell, con rangos por metro cuadrado y por estancia.",
    url: "/blog/cuanto-cuesta-reformar-piso-vendrell",
    type: "article",
    images: ["/images/blog/cuanto-cuesta-reformar-piso-vendrell.webp"],
  },
};

export default function BlogPrecioReformaPiso() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Cuánto cuesta reformar un piso en El Vendrell en 2026?",
    description:
      "Rangos orientativos por metro cuadrado y por estancia para reformar pisos en El Vendrell, con las partidas que más hacen variar el presupuesto.",
    image: "https://reformasvendrell.es/images/blog/cuanto-cuesta-reformar-piso-vendrell.webp",
    author: { "@type": "Organization", name: "Clima Reformas Vendrell" },
    publisher: {
      "@id": "https://reformasvendrell.es/#business",
      "@type": "Organization",
      name: "Clima Reformas Vendrell",
    },
    datePublished: "2026-03-10",
    dateModified: "2026-11-15",
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
        <Image src="/images/blog/cuanto-cuesta-reformar-piso-vendrell.webp" alt="¿Cuánto cuesta reformar un piso en El Vendrell en 2026?" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <div className="max-w-[820px] flex flex-col items-center gap-4">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Guía de precios</span>
            <h1 className="font-display font-extrabold text-[28px] md:text-[44px] lg:text-[56px] text-white leading-[1.1]">
              ¿Cuánto cuesta reformar un piso en El Vendrell en 2026?
            </h1>
            <p className="text-white/65 text-sm">10 marzo 2026 · Actualizado el 15 noviembre 2026 · 9 min de lectura</p>
          </div>
        </div>
      </section>

      <article className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[780px]">
          <div className="font-body text-dark space-y-6 text-base leading-relaxed">
            <p className="text-lg text-subtitle">
              Es la primera pregunta de casi todas las llamadas y la más difícil de contestar por teléfono. Dos pisos de 75 m² en la misma calle de Sant Salvador pueden tener presupuestos muy distintos si uno conserva la instalación eléctrica original y el otro se renovó hace diez años. Aun así, hay rangos que se repiten y partidas que siempre pesan lo mismo. Aquí te explicamos cómo leer un presupuesto de reforma en El Vendrell, con cifras orientativas para que llegues a la primera visita sabiendo de qué orden de magnitud hablamos.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">El precio por metro cuadrado, con matices</h2>
            <p>
              Para un apartamento típico de la costa del municipio, de 60 a 90 m², una reforma completa con acabados de gama media-alta se sitúa normalmente entre <strong>450 y 700 €/m²</strong>. En esa horquilla entran el derribo, la retirada de escombros, electricidad y fontanería nuevas, suelos, alicatados, sanitarios, una cocina de gama correcta, puertas interiores y pintura.
            </p>
            <p>
              Cuando el punto de partida es malo (humedad en muros, instalación eléctrica sin protecciones, ventanas que no cierran) o se eligen materiales de gama alta, la cifra puede acercarse a los <strong>900 €/m²</strong>. En el lado contrario, una actuación parcial bien elegida, por ejemplo cocina, dos baños y suelos en un piso pequeño, suele quedar en torno a <strong>20.000-30.000 €</strong>.
            </p>
            <p>
              El metro cuadrado es útil para orientarse, pero engaña en los pisos pequeños: un estudio de 40 m² tiene cocina y baño igual que uno de 90, y esas dos estancias concentran buena parte del coste. Por eso, en viviendas pequeñas, el precio por metro sale más alto.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Qué cuesta cada estancia</h2>
            <p>Como referencia, en obras con acabados de gama media:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Cocina de 8 a 12 m²:</strong> de 7.000 a 14.000 €, con muebles resistentes a la humedad, encimera porcelánica, electrodomésticos básicos y agua y electricidad renovadas.</li>
              <li><strong>Baño de 4 a 6 m²:</strong> de 4.500 a 8.000 €, sustituyendo la bañera por ducha, con impermeabilización, mampara, sanitarios suspendidos y alicatado hasta el techo.</li>
              <li><strong>Salón de 20 a 25 m²:</strong> de 3.500 a 6.000 € si se cambia suelo y pintura; más si se une con la cocina.</li>
              <li><strong>Dormitorio de 12 a 16 m²:</strong> de 1.800 a 3.500 € cada uno, con suelo, pintura y un armario empotrado sencillo.</li>
              <li><strong>Ventanas:</strong> para un piso de unos 80 m², de 6.000 a 11.000 € con carpintería con rotura de puente térmico, según material y fabricante.</li>
            </ul>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Las partidas que más suben el presupuesto en la costa</h2>
            <p>
              En los bloques levantados entre los años sesenta y ochenta en Coma-ruga, Sant Salvador o Els Masos encontramos una y otra vez los mismos problemas: tuberías de hierro galvanizado o tramos de plomo, cuadros eléctricos con muy pocos circuitos, ventanas correderas que dejan pasar aire y agua, y techos con manchas de condensación. Resolverlo todo puede sumar entre <strong>5.000 y 9.000 €</strong> a la reforma base, y es dinero bien gastado: es justo lo que evita problemas cuando el piso ya está terminado.
            </p>
            <p>
              El ambiente marino también influye en la elección de materiales. Herrajes de acero inoxidable, tableros hidrófugos en la cocina, sellados de calidad y pinturas transpirables cuestan algo más que sus equivalentes básicos, pero en primera línea la diferencia se nota en pocos años. Si el piso tiene historial de moho en invierno, te recomendamos leer nuestra guía sobre <Link href="/blog/humedad-condensacion-pisos-playa-invierno" className="text-accent font-semibold underline">humedad y condensación en pisos de playa</Link> antes de decidir acabados.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Y en el centro y las urbanizaciones</h2>
            <p>
              En los pisos del núcleo urbano del Vendrell el patrón es parecido, aunque con menos problemas de salitre y más casos de fincas sin ascensor, donde subir y bajar material encarece la mano de obra. En adosados de urbanizaciones como El Tancat o Mas Borràs, la superficie es mayor y suelen aparecer partidas de cubierta, fachada o jardín que no existen en un piso. Para casas entre medianeras del casco antiguo, el estado de la estructura manda, y el precio se fija siempre después de revisarla.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Costes que a veces se olvidan</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Trámites municipales:</strong> la comunicación previa o la licencia de obra llevan asociadas tasas e impuesto de construcciones que fija el Ajuntament según el presupuesto de la obra.</li>
              <li><strong>Contenedor en la calle:</strong> si ocupa vía pública necesita su propio permiso.</li>
              <li><strong>Técnico:</strong> cuando se toca estructura o fachada hace falta proyecto y dirección de obra.</li>
              <li><strong>Mobiliario y electrodomésticos:</strong> conviene aclarar si están incluidos o no en cada presupuesto que compares.</li>
            </ul>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Cinco maneras de ajustar la cifra sin perder calidad</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Mantén la distribución si funciona.</strong> Mover tabiques y llevar desagües a otro sitio puede encarecer la obra entre un 15 y un 25 %.</li>
              <li><strong>Escoge cerámica de serie.</strong> Hay porcelánicos de catálogo muy resistentes por menos de 20 €/m².</li>
              <li><strong>Aprovecha la cocina si está sana.</strong> Cambiar solo encimera, frentes o electrodomésticos puede ahorrar entre 4.000 y 6.000 €.</li>
              <li><strong>Reforma fuera de temporada.</strong> De octubre a marzo hay más disponibilidad de equipos y proveedores, y la comunidad pone menos pegas.</li>
              <li><strong>Prioriza lo oculto.</strong> Si el presupuesto no llega para todo, mejor instalaciones y ventanas ahora y acabados decorativos más adelante, que al revés.</li>
            </ul>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Cómo comparar presupuestos</h2>
            <p>
              Pide siempre presupuestos desglosados por partidas y con las mismas calidades. Un precio global sin detalle no permite saber si incluye el boletín eléctrico, la gestión de residuos o la limpieza final. Pregunta también por el calendario y por quién coordina los oficios. En nuestra página de <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline">reformas de pisos</Link> explicamos cómo lo hacemos nosotros.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Tu presupuesto, con cifras reales</h2>
            <p>
              Los rangos de este artículo son orientativos. Para saber cuánto costará tu piso necesitamos verlo: visitamos la vivienda sin coste en El Vendrell o en el municipio cercano donde esté y te entregamos un presupuesto separado por partidas. <Link href="/contacto" className="text-accent font-semibold underline">Pide la visita aquí</Link>.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Ponemos números a tu piso?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Lo visitamos sin compromiso y te dejamos por escrito un presupuesto con cada partida separada.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-dark-card transition-colors">
            Pedir valoración gratuita <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
