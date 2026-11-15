import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Calafell · Pisos y casas",
  description:
    "Reformas en Calafell desde El Vendrell: pisos de Calafell Platja, casas del pueblo y viviendas de Segur de Calafell. Visita sin coste. 877 278 163.",
  alternates: { canonical: "/zonas/reformas-calafell" },
  openGraph: {
    title: "Reformas en Calafell",
    description: "Pisos, casas y locales en Calafell, Segur de Calafell y Calafell Poble con equipo propio desde El Vendrell.",
    url: "/zonas/reformas-calafell",
    images: ["/images/salon-luminoso-mediterraneo-vendrell.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Renovación completa de pisos de playa, casas del pueblo y viviendas de urbanización.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas abiertas o cerradas con materiales que soportan la humedad de la costa.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "Cambio de bañera por ducha, impermeabilización y ventilación en baños interiores.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Ventanas, instalaciones, suelos y pintura en pisos de los años setenta y ochenta.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Acondicionamiento de comercios y negocios con los trámites municipales incluidos.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Qué precio orientativo tiene una reforma integral en Calafell?", a: "Como referencia por metro cuadrado, un piso de playa en gama media-alta parte de unos 450 €/m² y una vivienda unifamiliar de unos 480 €/m², según el estado de instalaciones y carpintería. El precio cerrado lo damos tras la visita, partida por partida." },
  { q: "¿Los plazos son distintos que en El Vendrell?", a: "No. Trabajamos con el mismo equipo y la distancia es corta. Lo que cambia los plazos es el estado de la vivienda y el tipo de permiso, no el municipio." },
  { q: "¿Gestionáis los permisos en el Ajuntament de Calafell?", a: "Sí. Preparamos la comunicación previa para obra menor y, cuando hace falta, el proyecto técnico y la solicitud de licencia." },
  { q: "¿Podéis reformar mientras sigo viviendo en el piso?", a: "Si la obra es de una o dos estancias, sí, organizándola para que siempre tengas cocina o baño disponibles. En una reforma completa, con días sin agua ni luz, no lo recomendamos." },
  { q: "¿Trabajáis en cualquier zona del municipio?", a: "Sí: Calafell Platja, Segur de Calafell, el pueblo y las urbanizaciones. Si la calle tiene restricciones de acceso o de carga en verano, lo tenemos en cuenta en la planificación." },
];

export default function ZonaCalafellPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Zonas", url: "/zonas" },
        { name: "Reformas en Calafell", url: "/zonas/reformas-calafell" },
      ]} />

      <HeroService
        title="Reformas en Calafell, a un paso de nuestra oficina"
        h1Keyword="Reformas en Calafell"
        subtitle="Pisos frente al mar, casas del pueblo bajo el castillo y viviendas de urbanización. El mismo equipo y el mismo método que en El Vendrell."
        image="/images/salon-luminoso-mediterraneo-vendrell.webp"
        imageAlt="Reforma de vivienda costera en Calafell"
        badge="Zona de servicio"
        showCTA
        trustItems={["Cercanía: 8 km", "Pisos y casas", "Coste pactado"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Calafell · Baix Penedès</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-3">Reformar en Calafell: tres núcleos, tres tipos de obra</h2>
          <p className="font-body text-subtitle text-base md:text-lg leading-relaxed mb-6">Municipio vecino del Vendrell por el lado de levante, con un frente marítimo largo y un pueblo histórico en el interior.</p>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Calafell es un municipio muy repartido. El pueblo antiguo, en lo alto, conserva el castillo de la Santa Creu y calles de casas tradicionales; en la costa, Calafell Platja creció con bloques de apartamentos y paseo marítimo; y Segur de Calafell, hacia Cunit, mezcla edificios de playa con calles de unifamiliares. Entre unos y otros hay urbanizaciones de viviendas aisladas y adosadas. Cada zona tiene sus propias necesidades de obra.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Pisos de playa</h3>
            <p>En el frente marítimo los problemas son los mismos que en la costa del Vendrell: instalaciones con décadas, ventanas sin rotura de puente térmico, baños interiores sin ventilación y humedad de condensación en invierno cuando el piso está cerrado. La reforma busca convertir un apartamento pensado para el verano en una vivienda cómoda todo el año.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Casas del pueblo y viviendas unifamiliares</h3>
            <p>En el núcleo antiguo hay casas entre medianeras con muros gruesos y forjados de madera o de viguetas antiguas; conviene revisar la estructura antes de hablar de acabados. En las urbanizaciones, las viviendas de los ochenta y noventa suelen necesitar cubierta, aislamiento, climatización y cocina abierta al jardín.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Permisos</h3>
            <p>El Ajuntament de Calafell tramita las obras menores mediante comunicación previa y las que afectan a estructura, fachada o distribución importante con licencia y proyecto técnico. Nos encargamos de preparar la documentación y de coordinar la fecha de inicio con la respuesta municipal.</p>
            <p>Desde nuestra oficina en El Vendrell llegamos en pocos minutos, así que la obra en Calafell se organiza igual que cualquier otra del municipio. Si buscas información general sobre cómo trabajamos un piso completo, la tienes en <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline">reformas de pisos</Link>; si lo tuyo es un local, en <Link href="/servicios/reformas-locales" className="text-accent font-semibold underline">reformas de locales</Link>.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Qué preguntar antes de reformar un piso de playa</h3>
            <p>Antes de pedir presupuesto conviene reunir algunos datos: si la comunidad tiene normas para obras en verano, si el edificio ha renovado bajantes o fachada recientemente, qué potencia eléctrica tiene contratada el piso y si ha habido filtraciones desde la terraza o el piso de arriba. Con esa información la primera visita es más útil y el presupuesto, más ajustado. Si el piso coge moho en invierno, revisa también nuestra guía sobre <Link href="/blog/humedad-condensacion-pisos-playa-invierno" className="text-accent font-semibold underline">condensación en pisos de playa</Link>.</p>
            <p>En las viviendas unifamiliares, lo que más conviene revisar antes es la cubierta y el estado de la carpintería exterior, porque condicionan tanto el confort como el orden en que se deben hacer los trabajos.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] text-white leading-[1.05]">Qué reformamos en Calafell</h2>
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
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Preguntas sobre reformas en Calafell</h2>
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
              { name: "Cunit", slug: "/zonas/reformas-cunit" },
              { name: "L'Arboç", slug: "/zonas/reformas-arboc" },
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Reformas tu vivienda en Calafell?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Te visitamos sin coste y te entregamos un presupuesto detallado por escrito, con el responsable de obra desde el primer día.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
