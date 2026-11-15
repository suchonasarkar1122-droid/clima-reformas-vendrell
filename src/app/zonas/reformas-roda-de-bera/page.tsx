import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Roda de Berà · Casas y pisos",
  description:
    "Reformas en Roda de Berà y Roda de Mar: apartamentos de playa, casas de urbanización y viviendas del pueblo. Equipo propio desde El Vendrell. 877 278 163.",
  alternates: { canonical: "/zonas/reformas-roda-de-bera" },
  openGraph: {
    title: "Reformas en Roda de Berà",
    description: "Apartamentos en Roda de Mar, viviendas de urbanización y casas del pueblo de Roda de Berà.",
    url: "/zonas/reformas-roda-de-bera",
    images: ["/images/cocina-amplia-reforma-vendrell.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Renovación completa de apartamentos de Roda de Mar y viviendas de urbanización, con instalaciones nuevas.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas que se abren al comedor y aguantan el ambiente salino de la primera línea.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "Duchas a ras de suelo en lugar de bañera, con impermeabilización y buena ventilación.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Ventanas, electricidad, suelos y pintura para segundas residencias que pasan a usarse todo el año.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Comercios y negocios de temporada preparados para abrir antes del verano.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Trabajáis en Roda de Berà aunque sea otra comarca?", a: "Sí. Está en el Tarragonès, pero muy cerca de nuestra oficina en El Vendrell por la N-340. Trabajamos con el mismo equipo y los mismos plazos que en el resto de municipios." },
  { q: "¿Cuándo conviene reformar un apartamento de Roda de Mar?", a: "Entre octubre y abril. El piso no se usa, las comunidades permiten obras con más facilidad y hay margen para tenerlo listo antes de Semana Santa o del verano." },
  { q: "¿Qué hacéis con el moho de los baños en pisos cerrados?", a: "Ventilación mecánica con sensor de humedad, juntas que no absorben agua y, si hace falta, mejora de las ventanas y aislamiento de las paredes frías. Primero comprobamos si es condensación o una filtración." },
  { q: "¿Gestionáis la licencia en el Ajuntament de Roda de Berà?", a: "Sí, preparamos la comunicación previa o, cuando corresponde, el proyecto técnico y la solicitud de licencia." },
];

export default function ZonaRodaDeBeraPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Zonas", url: "/zonas" },
        { name: "Reformas en Roda de Berà", url: "/zonas/reformas-roda-de-bera" },
      ]} />

      <HeroService
        title="Reformas en Roda de Berà, junto al arco romano"
        h1Keyword="Reformas en Roda de Berà"
        subtitle="Apartamentos en Roda de Mar, casas en urbanizaciones y viviendas del pueblo. Llegamos por la N-340 desde El Vendrell y trabajamos con el mismo método."
        image="/images/cocina-amplia-reforma-vendrell.webp"
        imageAlt="Reforma de cocina en piso de Roda de Berà"
        badge="Zona de servicio"
        showCTA
        trustItems={["Vecino por el sur", "Costa Daurada", "Coste cerrado"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Roda de Berà · Tarragonès</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-3">Obras en Roda de Berà: playa, urbanización y pueblo</h2>
          <p className="font-body text-subtitle text-base md:text-lg leading-relaxed mb-6">Primer municipio del Tarragonès al salir del Baix Penedès por la costa, conocido por el Arc de Berà, junto a la antigua Via Augusta.</p>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Aunque administrativamente pertenece al Tarragonès, Roda de Berà forma parte del mismo tramo de costa que Coma-ruga y comparte con ella muchas cosas: playas largas, mucha vivienda de veraneo y una población que en verano se multiplica. El municipio tiene tres caras bien distintas. El pueblo, algo retirado de la costa, con casas tradicionales; Roda de Mar, en primera línea, con bloques de apartamentos y paseo; y una serie de urbanizaciones de viviendas unifamiliares y adosadas repartidas por el término.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Apartamentos de Roda de Mar</h3>
            <p>Los pisos de la costa son, en su mayoría, segundas residencias de los años setenta a noventa. Las reformas más frecuentes son cambio de bañera por ducha, cocina nueva abierta al comedor, ventanas que cierren de verdad y una instalación eléctrica capaz de soportar aire acondicionado, placa de inducción y horno a la vez. Como en el resto de la costa, el salitre obliga a elegir bien herrajes, carpinterías y pinturas. Tienes más detalle sobre cocinas en <Link href="/servicios/reformas-cocinas" className="text-accent font-semibold underline">reformas de cocinas</Link>.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Viviendas de urbanización</h3>
            <p>Las casas unifamiliares y adosadas de las urbanizaciones suelen tener más superficie y jardín, y sus necesidades son otras: cubiertas e impermeabilizaciones, fachadas que piden mantenimiento, calefacción poco eficiente, porches cerrados con el tiempo sin mucho criterio. En muchas el mejor resultado sale de plantear la obra de forma global, revisando también aislamiento y climatización.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Casas del pueblo</h3>
            <p>En el núcleo de Roda de Berà quedan casas entre medianeras de construcción tradicional. Aquí la prioridad es revisar estructura, cubierta y humedades antes de diseñar la distribución nueva, y conservar lo que tenga valor.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Trámites y logística</h3>
            <p>Las obras se tramitan en el Ajuntament de Roda de Berà, con comunicación previa para las intervenciones menores y licencia con proyecto técnico cuando se afecta a estructura, fachada o distribución de forma importante. En verano, algunas calles de la costa tienen limitaciones de carga y descarga y muchas comunidades restringen las obras, así que conviene planificar entre otoño y primavera. Si estás comparando con la costa del Vendrell, consulta también nuestra página de <Link href="/servicios/reformas-banos" className="text-accent font-semibold underline">reformas de baños</Link>, que es el encargo más repetido en estos apartamentos.</p>
            <h3 className="font-body font-bold text-dark text-xl pt-4">Antes de empezar</h3>
            <p>Para un apartamento de la costa, pide a la administración de la finca las normas de obra de la comunidad y comprueba si el edificio tiene pendiente alguna reparación de fachada o bajantes. Para una casa de urbanización, revisa el estado de la cubierta y de la impermeabilización de terrazas, que es lo primero que hay que resolver antes de invertir en acabados interiores.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] text-white leading-[1.05]">Qué reformamos en Roda de Berà</h2>
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
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Preguntas sobre reformas en Roda de Berà</h2>
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Reformas en Roda de Berà o Roda de Mar?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Pasamos a ver la vivienda sin coste y te entregamos un presupuesto desglosado con el calendario de obra.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
