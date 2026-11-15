import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: { absolute: "Tendencias en cocinas 2026 para pisos del Baix Penedès" },
  description:
    "Cocinas 2026 en El Vendrell: cocina abierta con cabeza, penínsulas, encimeras compactas, colores cálidos y luz por zonas, adaptadas a pisos junto al mar.",
  alternates: { canonical: "/blog/tendencias-cocinas-2026" },
  openGraph: {
    title: "Tendencias en cocinas 2026 para pisos del Baix Penedès",
    description: "Qué tendencias de cocina tienen sentido en un apartamento de playa o una casa del centro del Vendrell, y cuáles conviene evitar.",
    url: "/blog/tendencias-cocinas-2026",
    type: "article",
    images: ["/images/blog/tendencias-cocinas-2026.webp"],
  },
};

export default function BlogTendenciasCocinas() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tendencias en cocinas 2026 para pisos del Baix Penedès",
    description: "Tendencias de distribución, materiales, color e iluminación en cocinas, filtradas para pisos de costa y casas del Vendrell.",
    image: "https://reformasvendrell.es/images/blog/tendencias-cocinas-2026.webp",
    author: { "@type": "Organization", name: "Clima Reformas Vendrell" },
    publisher: {
      "@id": "https://reformasvendrell.es/#business",
      "@type": "Organization",
      name: "Clima Reformas Vendrell",
    },
    datePublished: "2026-02-26",
    dateModified: "2026-11-15",
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
        <Image src="/images/blog/tendencias-cocinas-2026.webp" alt="Tendencias en cocinas 2026 para pisos del Baix Penedès" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <div className="max-w-[820px] flex flex-col items-center gap-4">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Tendencias</span>
            <h1 className="font-display font-extrabold text-[28px] md:text-[44px] lg:text-[56px] text-white leading-[1.1]">
              Tendencias en cocinas 2026 para pisos del Baix Penedès
            </h1>
            <p className="text-white/65 text-sm">26 febrero 2026 · Actualizado el 15 noviembre 2026 · 8 min de lectura</p>
          </div>
        </div>
      </section>

      <article className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[780px]">
          <div className="font-body text-dark space-y-6 text-base leading-relaxed">
            <p className="text-lg text-subtitle">
              Cada año las revistas de interiorismo anuncian nuevas tendencias en cocinas, y cada año alguna de ellas llega a las obras que hacemos en El Vendrell. No todas encajan igual en un apartamento de 65 m² a dos calles de la playa de Coma-ruga que en un adosado con jardín o en una casa estrecha del casco antiguo. En este artículo repasamos las ideas que más nos piden en 2026 y te contamos, desde la obra, cuáles funcionan junto al mar y cuáles conviene tomarse con calma.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">1. La cocina abierta, pero con matices</h2>
            <p>
              Abrir la cocina al comedor sigue siendo la petición estrella en los pisos de playa, porque las cocinas originales de esos bloques son pequeñas y oscuras. La novedad es que cada vez más gente quiere poder cerrarla a ratos: una puerta corredera de vidrio, un panel plegable o un tabique a media altura que separe sin aislar del todo. Así se gana luz y conversación, pero el olor de la fritura no llega al sofá ni el ruido del lavavajillas al salón.
            </p>
            <p>
              Antes de tirar nada hay que confirmar que el tabique no es de carga y qué trámite pide el Ajuntament; en la página de <Link href="/servicios/reformas-cocinas" className="text-accent font-semibold underline">reformas de cocinas</Link> explicamos cómo lo gestionamos.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">2. Península antes que isla en pisos pequeños</h2>
            <p>
              La isla central queda espectacular en las fotos, pero necesita espacio alrededor para circular y abrir cajones. En la mayoría de pisos de la costa no lo hay. La alternativa que más estamos instalando es la península: un brazo de encimera unido al resto de la cocina que sirve de barra de desayuno, separa visualmente del comedor y aporta superficie de trabajo y almacenaje sin robar paso. En los chalets de urbanización, con cocinas de más de quince metros, la isla sí tiene sentido, sobre todo si se conecta con el porche o el jardín.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">3. Encimeras que no piden cuidados</h2>
            <p>
              El mármol y la madera maciza siguen gustando, pero en una vivienda de costa que pasa meses cerrada dan más trabajo del que la mayoría quiere asumir. Lo que se impone son las superficies compactas sinterizadas y los porcelánicos de gran formato: no absorben manchas, toleran el calor y no cambian de color con el sol de poniente que entra por la terraza. Los acabados que imitan piedra natural o cemento, en tonos arena y grises cálidos, son los más elegidos este año.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">4. Colores cálidos y madera, sin miedo a la humedad</h2>
            <p>
              Después de años de cocinas blancas y grises, vuelven los verdes suaves, los terracota apagados y la madera clara. Encaja bien con la luz mediterránea y con el carácter de las casas del centro. El truco en primera línea es elegir frentes con acabado de madera sobre tablero hidrófugo, o madera natural bien barnizada, y reservar la madera maciza para zonas alejadas del fregadero. Los tiradores integrados o de perfil en acero inoxidable evitan los herrajes que el salitre oxida.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">5. Almacenaje hasta el techo y despensa escondida</h2>
            <p>
              En cocinas pequeñas, cada centímetro cuenta. Los muebles altos que llegan hasta el techo, las columnas con despensa extraíble y los rincones con herrajes giratorios permiten guardar mucho más sin ocupar suelo. En las casas del casco antiguo, donde los techos son altos, aprovechar esa altura con un segundo nivel de armarios para lo que se usa poco es una solución que repetimos a menudo.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">6. Luz pensada por zonas</h2>
            <p>
              El fluorescente en el centro del techo ha desaparecido de nuestras obras. Ahora se diseña la iluminación en capas: tira LED bajo los muebles altos para trabajar sin sombras, focos empotrados para la luz general, una lámpara colgante sobre la península o la mesa y, a veces, una luz indirecta en el zócalo que sirve de piloto por la noche. Lo importante es dejar circuitos separados y la preinstalación hecha antes de alicatar.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">7. Electrodomésticos integrados y extracción seria</h2>
            <p>
              Los frigoríficos y lavavajillas integrados detrás de un frente igual al resto de muebles siguen ganando terreno, porque en una cocina abierta reducen el ruido visual. La otra cara de la cocina abierta es la extracción: una campana bien dimensionada, con salida al exterior si el edificio lo permite, es imprescindible. En bloques sin conducto propio buscamos alternativas, pero conviene saberlo antes de decidir la distribución.
            </p>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Lo que no recomendamos junto al mar</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Herrajes y tiradores de acero sin tratar o latón barato: se oxidan en pocas temporadas.</li>
              <li>Tableros de aglomerado normal en los módulos bajos del fregadero y el lavavajillas.</li>
              <li>Encimeras porosas sin sellar en viviendas que pasan meses sin uso.</li>
              <li>Cocinas abiertas sin una campana adecuada: el olor acaba en toda la casa.</li>
            </ul>

            <h2 className="font-display font-extrabold text-[26px] md:text-[34px] text-dark mt-12 mb-4">Cómo aplicarlo a tu cocina</h2>
            <p>
              Una tendencia solo merece la pena si mejora cómo usas la cocina. Nuestro consejo es empezar por la distribución y las instalaciones, elegir después los materiales que aguantan el ambiente de la costa y dejar para el final los detalles de moda, que son los más fáciles de cambiar dentro de unos años. Si la cocina forma parte de una renovación más amplia del piso, plantéalo junto con el resto; lo explicamos en <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline">reformas de pisos</Link>.
            </p>
            <p>
              Si tienes una cocina en El Vendrell o en el Baix Penedès y quieres saber qué tendría sentido hacer, <Link href="/contacto" className="text-accent font-semibold underline">escríbenos</Link>: pasamos a medirla y te enseñamos opciones sobre plano.
            </p>
          </div>
        </div>
      </article>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Diseñamos tu nueva cocina?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Vamos a medirla sin coste y te proponemos una distribución que funcione en tu casa.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-dark-card transition-colors">
            Pedir visita <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
