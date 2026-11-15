import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Zonas de trabajo en el Baix Penedès",
  description:
    "Dónde reformamos: El Vendrell (centro, Coma-ruga, Sant Salvador, urbanizaciones) y municipios vecinos como Cunit, L'Arboç, Banyeres o Roda de Berà.",
  alternates: { canonical: "/zonas" },
  openGraph: {
    title: "Zonas donde reformamos desde El Vendrell",
    description: "Núcleos de El Vendrell y municipios vecinos del Baix Penedès y del Tarragonès en los que trabajamos con equipo propio.",
    url: "/zonas",
    images: ["/images/hero-reforma-luminosa-vendrell.webp"],
  },
};

const zones = [
  { name: "Calafell", slug: "reformas-calafell", description: "Municipio vecino por levante: apartamentos de playa, casas del pueblo y viviendas de urbanización." },
  { name: "Cunit", slug: "reformas-cunit", description: "Último pueblo de la comarca antes del Garraf. Pisos de verano que pasan a ser vivienda habitual y adosados." },
  { name: "L'Arboç", slug: "reformas-arboc", description: "Casas de pueblo de varias plantas con muros de piedra y vigas de madera. Rehabilitación con revisión de estructura." },
  { name: "Roda de Berà", slug: "reformas-roda-de-bera", description: "Ya en el Tarragonès: apartamentos en Roda de Mar, urbanizaciones y casas del pueblo, junto al Arc de Berà." },
  { name: "Banyeres del Penedès", slug: "reformas-banyeres-penedes", description: "Interior entre viñas: casas unifamiliares con jardín, casas de Saifores y del núcleo antiguo." },
];

export default function ZonasPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Zonas de servicio", url: "/zonas" },
      ]} />

      <HeroService
        title="Del centro del Vendrell a los pueblos de alrededor"
        h1Keyword="Zonas de servicio"
        subtitle="Nuestra oficina está en El Vendrell y desde aquí atendemos los núcleos del municipio y los pueblos vecinos de costa y de interior."
        image="/images/hero-reforma-luminosa-vendrell.webp"
        imageAlt="Reformas en el Baix Penedès"
        badge="Baix Penedès completo"
        showCTA
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Municipios donde trabajamos</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] text-dark leading-[1.1]">Municipios con página propia</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">Cada uno tiene su tipo de vivienda y su ayuntamiento; el equipo y la forma de trabajar son los mismos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/" className="bg-accent rounded-[20px] p-8 flex flex-col gap-4 text-white hover:bg-accent-dark transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <h3 className="font-body font-bold text-xl">El Vendrell</h3>
              <p className="text-white/85 text-sm leading-relaxed">Capital del Baix Penedès y nuestra base, en la calle Apel·les Fenosa. Casco antiguo, Coma-ruga, Sant Salvador, Sant Vicenç de Calders y urbanizaciones.</p>
              <span className="inline-flex items-center gap-1 text-white/70 text-xs font-bold uppercase tracking-wider mt-auto">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />Municipio principal
              </span>
            </Link>

            {zones.map((zone) => (
              <Link key={zone.slug} href={`/zonas/${zone.slug}`} className="group bg-white rounded-[20px] p-8 flex flex-col gap-4 border border-dark/5 hover:border-accent/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <h3 className="font-body font-bold text-dark text-xl group-hover:text-accent transition-colors">{zone.name}</h3>
                <p className="text-subtitle text-sm leading-relaxed">{zone.description}</p>
                <span className="font-body font-bold text-accent text-sm inline-flex items-center gap-1 mt-auto">
                  Ver zona <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px] space-y-5 font-body text-subtitle text-base leading-relaxed">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">El municipio del Vendrell</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Un término municipal con muchas realidades</h2>
          <p>
            El Vendrell no es un solo pueblo. Además del núcleo urbano, con el casco antiguo alrededor de la Rambla y la plaza Vella y los barrios que crecieron hacia la estación y las rondas, el término incluye la franja de costa de Coma-ruga y Sant Salvador, el núcleo de Sant Vicenç de Calders junto al nudo ferroviario, Els Masos y varias urbanizaciones de casas unifamiliares como El Tancat, Mas Borràs o Les Madrigueres. En cada una predominan viviendas distintas y, por tanto, reformas distintas.
          </p>
          <p>
            En la costa la mayor parte del trabajo son apartamentos de los años sesenta a ochenta que se renuevan para usarlos todo el año o para alquilarlos por temporadas, con especial atención a la humedad y al salitre; lo contamos en <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline">reformas de pisos</Link>. En el casco antiguo predominan las casas entre medianeras, donde la estructura y la conservación de elementos originales mandan. En las urbanizaciones, las viviendas unifamiliares piden cubierta, aislamiento, climatización y cocinas abiertas al jardín, y suelen resolverse con una <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline">reforma integral</Link>.
          </p>
          <h2 className="font-display font-extrabold text-[24px] md:text-[32px] text-dark leading-[1.1] pt-4">Los pueblos de alrededor</h2>
          <p>
            Hacia el interior, <Link href="/zonas/reformas-arboc" className="text-accent font-semibold underline">L&apos;Arboç</Link> y <Link href="/zonas/reformas-banyeres-penedes" className="text-accent font-semibold underline">Banyeres del Penedès</Link> concentran casas de pueblo con muros de piedra y viviendas unifamiliares rodeadas de viña, con un clima más frío en invierno que la costa. Siguiendo la playa hacia el norte, <Link href="/zonas/reformas-cunit" className="text-accent font-semibold underline">Cunit</Link> mezcla apartamentos de veraneo y adosados; hacia el sur, ya en el Tarragonès, <Link href="/zonas/reformas-roda-de-bera" className="text-accent font-semibold underline">Roda de Berà</Link> repite el modelo de costa con Roda de Mar y sus urbanizaciones.
          </p>
          <p>
            Trabajar cerca tiene ventajas concretas: podemos pasar por la obra varias veces por semana, resolver un imprevisto el mismo día y recibir el material sin recargos de transporte. Cada ayuntamiento tiene sus propios formularios y plazos para la comunicación previa y la licencia de obras, y nos encargamos de prepararlos en todos ellos.
          </p>
          <p>
            Si no sabes en qué categoría encaja tu obra, no importa: llámanos, cuéntanos dónde está la vivienda y qué quieres hacer, y en la visita te explicamos qué trámite corresponde, cuánto puede durar y qué conviene hacer primero. También puedes echar un vistazo a la página de <Link href="/servicios" className="text-accent font-semibold underline">servicios</Link> para ver cómo organizamos cada tipo de reforma.
          </p>
        </div>
      </section>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Tu pueblo no está en la lista?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Escríbenos igualmente. Si la vivienda está en Albinyana, Bellvei, Santa Oliva u otro municipio cercano, te decimos si podemos atenderla con nuestros plazos habituales.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-dark-card transition-colors">
            Consultar mi municipio <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
