import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en L'Arboç · Casas de pueblo",
  description:
    "Reformas en L'Arboç: casas de pueblo con muros de piedra, viviendas del Arboçar y locales del centro. Estructura revisada, permisos y coste por partidas.",
  alternates: { canonical: "/zonas/reformas-arboc" },
  openGraph: {
    title: "Reformas en L'Arboç",
    description: "Rehabilitación de casas tradicionales y reformas de viviendas y locales en L'Arboç y el Arboçar.",
    url: "/zonas/reformas-arboc",
    images: ["/images/casa-reformada-interior-vendrell.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Rehabilitación de casas de pueblo con revisión de estructura, instalaciones nuevas y elementos originales conservados.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas en casas antiguas, a menudo junto al patio, aprovechando la altura de los techos.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "Baños nuevos en plantas altas, con impermeabilización y desagües bien resueltos sobre forjados antiguos.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Viviendas más recientes del pueblo y del Arboçar: instalaciones, suelos y carpintería.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Comercios del centro y bajos que cambian de actividad, con los trámites incluidos.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Podéis conservar el suelo hidráulico y las vigas?", a: "Siempre que estén en buen estado, sí. El suelo hidráulico se puede restaurar y pulir, y las vigas se tratan y se dejan vistas. Si alguna pieza está dañada, buscamos la manera de reponerla o reforzarla." },
  { q: "¿Cómo sé si las vigas están bien?", a: "Hay que verlas de cerca, sobre todo en los apoyos en los muros. En la visita revisamos las zonas accesibles y, si hay dudas, abrimos catas puntuales o pedimos la opinión de un técnico antes de presupuestar." },
  { q: "¿Se puede quitar la humedad de la planta baja?", a: "Se puede reducir mucho tratando el muro, mejorando la ventilación y usando revocos transpirables. Lo importante es identificar bien el origen antes de actuar." },
  { q: "¿Cuánto tiempo lleva rehabilitar una casa de pueblo?", a: "Depende del tamaño y del estado. Como referencia, una casa de tres plantas puede llevar entre 14 y 20 semanas de obra, más el tiempo de permisos si necesita proyecto." },
];

export default function ZonaArbocPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Zonas", url: "/zonas" },
        { name: "Reformas en L'Arboç", url: "/zonas/reformas-arboc" },
      ]} />

      <HeroService
        title="Reformas en L'Arboç, entre viñas y casas de piedra"
        h1Keyword="Reformas en L'Arboç"
        subtitle="Casas de pueblo de varias plantas, viviendas del Arboçar y negocios del centro. Rehabilitación con respeto por lo antiguo e instalaciones de hoy."
        image="/images/casa-reformada-interior-vendrell.webp"
        imageAlt="Casa tradicional reformada en L'Arboç"
        badge="Zona de servicio"
        showCTA
        trustItems={["Cercanía: 9 km", "Casas tradicionales", "Patrimonio respetado"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">L&apos;Arboç · Baix Penedès</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-3">Rehabilitar una casa en L&apos;Arboç</h2>
          <p className="font-body text-subtitle text-base md:text-lg leading-relaxed mb-6">Pueblo de interior del Baix Penedès, conocido por su Giralda y rodeado de viñedos, con un casco antiguo de casas tradicionales.</p>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>L&apos;Arboç tiene un carácter muy distinto al de la costa. Aquí no hay apartamentos de veraneo, sino casas familiares que han pasado de generación en generación, muchas con planta baja que fue almacén o bodega, una o dos plantas de vivienda y un terrado o una golfa bajo la cubierta. Alrededor del núcleo están el Arboçar y viviendas más recientes, y a las afueras, masías y construcciones ligadas a la viña.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Lo primero: la estructura</h3>
            <p>En una casa antigua del centro, antes de elegir azulejos hay que saber cómo están las vigas, los muros y la cubierta. Las cabezas de las vigas de madera empotradas en muros húmedos pueden estar dañadas; las bovedillas a veces han perdido cohesión; y las cubiertas de teja, si llevan años sin revisión, filtran en los encuentros con las medianeras. Revisamos todo esto en la primera visita y, si hace falta, contamos con un técnico para valorar refuerzos.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Conservar lo que tiene valor</h3>
            <p>Suelos hidráulicos, vigas vistas, arcos de piedra, puertas de madera maciza: muchas casas de L&apos;Arboç tienen elementos que vale la pena mantener. Los integramos en el proyecto y pasamos las instalaciones nuevas por donde menos se ven. El resultado es una casa con carácter, pero con electricidad, agua, calefacción y aislamiento actuales. Lo explicamos con más detalle en <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline">reformas integrales</Link>.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Humedad en planta baja</h3>
            <p>En las casas más antiguas es frecuente la humedad que sube desde el terreno por los muros. Se reconoce por las sales blanquecinas y la pintura que se desprende a una altura bastante regular. Tapar con pintura no funciona; hay que tratar el muro, ventilar y usar revocos transpirables.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Trámites y comercio local</h3>
            <p>Las obras se tramitan en el Ajuntament de L&apos;Arboç con comunicación previa o licencia según su alcance. Si la casa está en una zona con protección o la fachada da a una calle del casco antiguo, puede haber condiciones sobre materiales y colores. También acondicionamos comercios del centro del pueblo; lo contamos en <Link href="/servicios/reformas-locales" className="text-accent font-semibold underline">reformas de locales</Link>. Desde El Vendrell llegamos en poco más de diez minutos, lo mismo que a <Link href="/zonas/reformas-banyeres-penedes" className="text-accent font-semibold underline">Banyeres del Penedès</Link>.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Antes de comprar una casa antigua</h3>
            <p>Si estás pensando en comprar una casa en el centro de L&apos;Arboç para reformarla, te recomendamos hacer una visita técnica antes de firmar. En una hora se puede tener una idea del estado de cubierta, forjados, muros e instalaciones, y de si la distribución que imaginas es viable. Esa información sirve para negociar el precio y para no llevarse sorpresas después.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] text-white leading-[1.05]">Qué hacemos en L&apos;Arboç</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="group bg-white/5 border border-white/10 rounded-[16px] p-7 flex flex-col gap-3 hover:border-accent/40 transition-colors">
                <h3 className="font-body font-bold text-white text-lg group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                <span className="font-body font-bold text-accent text-sm inline-flex items-center gap-1 mt-auto pt-2">Ver detalles <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Dudas habituales</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Preguntas sobre reformas en L&apos;Arboç</h2>
          </div>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-[16px] border border-dark/5 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-body font-bold text-dark text-base list-none">
                  {faq.q}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" className="flex-shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <div className="px-6 pb-6 font-body text-subtitle text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-12">
        <div className="mx-auto max-w-[1200px]">
          <h3 className="font-body font-bold text-dark text-base uppercase mb-6 text-center">También trabajamos en</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "El Vendrell", slug: "/" },
              { name: "Calafell", slug: "/zonas/reformas-calafell" },
              { name: "Cunit", slug: "/zonas/reformas-cunit" },
              { name: "Roda de Berà", slug: "/zonas/reformas-roda-de-bera" },
              { name: "Banyeres del Penedès", slug: "/zonas/reformas-banyeres-penedes" },
            ].map((z) => (
              <Link key={z.slug} href={z.slug} className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full font-body font-semibold text-dark text-sm border border-dark/10 hover:border-accent hover:text-accent transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Reformas en {z.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Tienes una casa en L&apos;Arboç por rehabilitar?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">La visitamos sin coste, revisamos estructura e instalaciones y te entregamos una propuesta por escrito.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
