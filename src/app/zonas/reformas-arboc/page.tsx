import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en L'Arboç · Casas y rehabilitación | CRV",
  description:
    "Reformas en L'Arboç: rehabilitación de casas tradicionales, reforma integral de viviendas y locales en el Centre y Arboçar. Presupuesto fijo. 877 278 163.",
  alternates: { canonical: "/zonas/reformas-arboc" },
  openGraph: {
    title: "Reformas en L'Arboç · Clima Reformas Vendrell",
    description: "Reformas y rehabilitaciones en L'Arboç. Trabajo de oficio en casas tradicionales del Penedès.",
    url: "/zonas/reformas-arboc",
    images: ["/images/casa-reformada-interior-vendrell.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Rehabilitamos casas de pueblo y viviendas unifamiliares en L'Arboç con respeto al patrimonio.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas funcionales en casas tradicionales: mantenemos vigas y carácter cuando merece la pena.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "Adaptación de baños en viviendas con instalaciones obsoletas; aislamiento, fontanería nueva y acabados duraderos.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Reforma completa de pisos en el Centre y Arboçar.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Adecuación de comercios, despachos y oficinas en la calle Major y vías principales.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Hacéis rehabilitaciones de casas antiguas en L'Arboç?", a: "Sí. L'Arboç tiene un casco antiguo bonito con casas de pueblo de muros gruesos, suelos hidráulicos y vigas vistas. Las rehabilitamos respetando lo que tiene valor patrimonial y modernizando instalaciones, aislamiento y acabados. Coordinamos con el ayuntamiento para los trámites en suelo urbano consolidado." },
  { q: "¿Qué distancia hay desde El Vendrell hasta L'Arboç?", a: "Apenas 9 km, unos 12-15 minutos en coche por la C-15. Esa cercanía nos permite trabajar con los mismos plazos y precios que en obras dentro del propio Vendrell." },
  { q: "¿Trabajáis con casas que tienen problemas de humedad ascendente?", a: "Es un problema habitual en casas de pueblo de L'Arboç por el contacto con el terreno. Aplicamos soluciones probadas: drenajes perimetrales, barreras antihumedad por inyección y morteros transpirables. Diagnosticamos primero, presupuestamos después." },
  { q: "¿Podemos vivir en la casa durante una reforma parcial?", a: "Si solo se interviene una zona (cocina, un baño, una habitación) sí, planificamos la obra para minimizar molestias. Para reformas integrales con cambio de instalaciones, lo recomendable es desalojar para acelerar plazos y reducir riesgos." },
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
        title="Reformas en L'Arboç — Rehabilitación de casas tradicionales"
        h1Keyword="Reformas en L'Arboç"
        subtitle="Rehabilitamos casas de pueblo del Centre y reformamos viviendas en Arboçar respetando vigas, suelos hidráulicos y muros originales cuando lo merecen."
        image="/images/casa-reformada-interior-vendrell.webp"
        imageAlt="Casa tradicional reformada en L'Arboç"
        badge="Zona de servicio"
        showCTA
        trustItems={["Cercanía: 9 km", "Casas tradicionales", "Patrimonio respetado"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">L'Arboç · Baix Penedès</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-3">Reformas en L&apos;Arboç y casas del Penedès interior</h2>
          <p className="font-body text-subtitle text-base md:text-lg leading-relaxed mb-6">A 9 km de El Vendrell, en pleno Baix Penedès interior.</p>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>L'Arboç tiene un perfil distinto al de los municipios costeros del Baix Penedès: aquí dominan las casas de pueblo con muros gruesos, fachadas de mampostería y patios interiores. Su casco antiguo, con su famosa réplica de la Giralda, conserva un urbanismo medieval donde reformar exige conocer la construcción tradicional.</p>
            <p>La mayoría de proyectos que nos llegan en L'Arboç son rehabilitaciones de viviendas heredadas o compradas a buen precio que necesitan modernización completa: instalaciones del siglo XX, aislamientos inexistentes, suelos originales que merecen recuperarse y baños donde no entra ni una ducha decente.</p>
            <p>Trabajamos con propietarios que viven en Barcelona o Tarragona y compran en L'Arboç buscando carácter y precio. Coordinamos a distancia, con visitas presenciales cuando hace falta, comunicación fluida durante la obra y un proyecto técnico claro que respete la normativa urbana del municipio.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] text-white leading-[1.05]">Reformas y rehabilitaciones en L'Arboç</h2>
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">FAQ</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Lo que preguntan en L'Arboç</h2>
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Una casa para rehabilitar en L'Arboç?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Te visitamos sin coste y te explicamos qué tiene sentido conservar y qué hay que sustituir, con presupuesto detallado por partidas.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
