import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Banyeres del Penedès",
  description:
    "Reformas en Banyeres del Penedès y Saifores: casas de pueblo, viviendas unifamiliares de urbanización y masías. Equipo propio desde El Vendrell.",
  alternates: { canonical: "/zonas/reformas-banyeres-penedes" },
  openGraph: {
    title: "Reformas en Banyeres del Penedès",
    description: "Casas tradicionales y viviendas unifamiliares en Banyeres del Penedès, Saifores y sus urbanizaciones.",
    url: "/zonas/reformas-banyeres-penedes",
    images: ["/images/reforma-integral-vivienda-vendrell.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Actualización completa de casas unifamiliares y rehabilitación de casas de pueblo, con mejora energética.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas abiertas al salón y al jardín, con isla o península cuando hay espacio.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "Baños completos, suites en el dormitorio principal y aseos nuevos en planta baja.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Viviendas plurifamiliares del núcleo: instalaciones, suelos, carpintería y pintura.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Pequeños comercios y espacios de trabajo en los núcleos del municipio.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Merece la pena aislar una casa de urbanización?", a: "En interior, sí. Las casas aisladas tienen mucha superficie expuesta y en invierno pierden mucho calor por cubierta y ventanas. Aislar la cubierta y cambiar la carpintería suelen ser las mejoras con más efecto en el confort y en la factura." },
  { q: "¿Podéis cambiar la caldera de gasoil por aerotermia?", a: "Sí, coordinamos el cambio de sistema con instaladores habilitados y adaptamos la obra para los nuevos equipos. Conviene revisar antes el aislamiento para dimensionar bien la instalación." },
  { q: "¿Qué permisos necesito para reformar en Banyeres?", a: "Comunicación previa para obras interiores sin afectar estructura ni fachada, y licencia con proyecto técnico cuando sí se afectan. En suelo rústico hay limitaciones adicionales que conviene consultar." },
  { q: "¿Trabajáis también en Saifores y en las urbanizaciones?", a: "Sí, en todo el término municipal: el núcleo de Banyeres, Saifores y las urbanizaciones de casas unifamiliares. Si el acceso a la calle es estrecho o hay limitaciones para el contenedor, lo resolvemos en la planificación." },
  { q: "¿Cuánto se tarda en reformar una casa unifamiliar?", a: "Depende mucho del alcance. Una actualización de cocina y baños puede llevar de 6 a 10 semanas; una reforma completa de casa de dos plantas, varios meses. Te damos el calendario por escrito antes de empezar." },
];

export default function ZonaBanyeresPenedesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Zonas", url: "/zonas" },
        { name: "Reformas en Banyeres del Penedès", url: "/zonas/reformas-banyeres-penedes" },
      ]} />

      <HeroService
        title="Reformas en Banyeres del Penedès y Saifores"
        h1Keyword="Reformas en Banyeres del Penedès"
        subtitle="Casas de pueblo, viviendas unifamiliares con jardín y construcciones rurales en el interior del Baix Penedès, a pocos minutos de El Vendrell."
        image="/images/reforma-integral-vivienda-vendrell.webp"
        imageAlt="Vivienda reformada en Banyeres del Penedès"
        badge="Zona de servicio"
        showCTA
        trustItems={["Cercanía: 7 km", "Casas tradicionales", "Plazos firmes"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Banyeres del Penedès · Baix Penedès</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-3">Reformar una casa en Banyeres del Penedès</h2>
          <p className="font-body text-subtitle text-base md:text-lg leading-relaxed mb-6">Municipio de interior entre viñas, con el núcleo de Banyeres, el de Saifores y varias urbanizaciones de casas unifamiliares.</p>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Banyeres del Penedès es uno de los municipios de interior más cercanos al Vendrell. Su paisaje es de viña y pequeños núcleos, y su vivienda se reparte entre las casas tradicionales del pueblo y de Saifores, las urbanizaciones de casas unifamiliares que crecieron en las últimas décadas, como el Priorat de Banyeres, y algunas masías y construcciones rurales. Mucha gente se ha instalado aquí buscando una casa con jardín sin alejarse de la costa ni de las vías de comunicación.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Viviendas unifamiliares de urbanización</h3>
            <p>Son la mayoría de los encargos. Casas de los ochenta, noventa y dos mil, con dos plantas, jardín y a veces piscina, que piden una actualización completa: cocina abierta al salón y al porche, baños nuevos, carpintería exterior eficiente, aislamiento de cubierta y un sistema de climatización mejor que los radiadores eléctricos o la caldera de gasoil originales. Al ser viviendas aisladas, en interior se nota mucho más el frío del invierno que en la costa, y la mejora energética se agradece desde el primer año. Algunas de estas partidas pueden encajar en las <Link href="/blog/ayudas-rehabilitacion-energetica-baix-penedes" className="text-accent font-semibold underline">ayudas a la rehabilitación energética</Link> cuando hay convocatoria abierta.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Casas del pueblo y de Saifores</h3>
            <p>En los núcleos antiguos hay casas entre medianeras con muros de piedra, forjados de madera y cubiertas de teja. Como en <Link href="/zonas/reformas-arboc" className="text-accent font-semibold underline">L&apos;Arboç</Link>, la obra empieza revisando la estructura y la humedad de la planta baja, y busca conservar los elementos con carácter mientras se renuevan instalaciones.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Masías y construcciones rurales</h3>
            <p>Cuando la vivienda está en suelo no urbanizable, las posibilidades de ampliar o cambiar el uso están muy limitadas por la normativa urbanística. Antes de comprar o de plantear una reforma importante, conviene comprobarlo con el Ajuntament y con un técnico.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Permisos y plazos</h3>
            <p>El Ajuntament de Banyeres del Penedès tramita las obras menores mediante comunicación previa y las mayores con licencia y proyecto. Desde nuestra oficina en El Vendrell tardamos menos de un cuarto de hora en llegar, lo que nos permite seguir la obra de cerca. Para ver cómo encaramos una renovación completa, visita <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline">reformas integrales</Link>.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Planificar con tiempo</h3>
            <p>En interior el invierno es más frío y húmedo de noche que en la costa, así que las obras que dejan la casa abierta, como cambiar ventanas o rehacer la cubierta, conviene programarlas en primavera u otoño. Las interiores, como cocina o baños, se pueden hacer en cualquier época.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] text-white leading-[1.05]">Qué reformamos en Banyeres del Penedès</h2>
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
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Preguntas sobre reformas en Banyeres del Penedès</h2>
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
              { name: "L'Arboç", slug: "/zonas/reformas-arboc" },
              { name: "Roda de Berà", slug: "/zonas/reformas-roda-de-bera" },
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Tienes una casa en Banyeres o Saifores?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Te visitamos sin coste y te proponemos una reforma a la medida de la casa y del presupuesto, por escrito.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
