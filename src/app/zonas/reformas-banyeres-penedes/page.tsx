import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Banyeres del Penedès · Casas y reformas | CRV",
  description:
    "Reformas en Banyeres del Penedès: rehabilitación de casas, reformas integrales y locales. Equipo propio desde El Vendrell. Llama: 877 278 163.",
  alternates: { canonical: "/zonas/reformas-banyeres-penedes" },
  openGraph: {
    title: "Reformas en Banyeres del Penedès · Clima Reformas Vendrell",
    description: "Empresa de reformas en Banyeres del Penedès y Saifores. Casas tradicionales y viviendas modernas.",
    url: "/zonas/reformas-banyeres-penedes",
    images: ["/images/reforma-integral-vivienda-vendrell.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Reforma completa de casas y viviendas en Banyeres centre y Saifores con equipo propio.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas funcionales pensadas para la vida en pueblo: durabilidad y materiales naturales.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "Baños cómodos en viviendas familiares, con instalación nueva y aislamiento mejorado.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Renovación de pisos y plantas independientes en casas multifamiliares del centro.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Adecuación de comercios y oficinas en la calle Mayor y polígonos próximos.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Reformáis casas en Saifores y la zona rural de Banyeres?", a: "Sí. Saifores tiene un urbanismo más disperso, con casas más alejadas y a veces problemas de acceso para camiones grandes. Hacemos la valoración técnica antes y planificamos la logística (suministros parciales, traslado de escombros) para que la obra fluya." },
  { q: "¿Qué tipo de reformas son habituales en Banyeres del Penedès?", a: "Lo más frecuente son reformas integrales en casas heredadas que llevan años sin actualizarse: instalaciones obsoletas, baños sin ventilación, cocinas pequeñas y aislamiento térmico inexistente. También adecuaciones de locales para nuevos negocios en la zona del centro." },
  { q: "¿La proximidad a las viñas del Penedès afecta a alguna obra?", a: "En las casas que lindan con campos de viña sí planificamos los plazos para no coincidir con vendimia o tareas agrícolas que generen polvo o restricciones de paso. Es un detalle local que tenemos en cuenta de oficio." },
  { q: "¿Cuánto tarda una reforma de casa en Banyeres?", a: "Para una vivienda unifamiliar de unos 120 m² con reforma integral (instalaciones, distribución parcial, cocina, baños, suelos, pintura) calcula entre 12 y 16 semanas. Si solo se interviene en cocina y baños, entre 5 y 7 semanas." },
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
        title="Reformas en Banyeres del Penedès — Casas y viviendas"
        h1Keyword="Reformas en Banyeres del Penedès"
        subtitle="Reformamos casas en el centre y viviendas en Saifores con equipo propio y precio cerrado. Comarca interior del Baix Penedès con carácter."
        image="/images/reforma-integral-vivienda-vendrell.webp"
        imageAlt="Vivienda reformada en Banyeres del Penedès"
        badge="Zona de servicio"
        showCTA
        trustItems={["Cercanía: 7 km", "Casas tradicionales", "Plazos firmes"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Banyeres del Penedès · Interior del Baix Penedès</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-3">Reformas en Banyeres del Penedès y Saifores</h2>
          <p className="font-body text-subtitle text-base md:text-lg leading-relaxed mb-6">A 7 km de El Vendrell, entre viñas del Baix Penedès interior.</p>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Banyeres del Penedès es un municipio interior del Baix Penedès, rodeado de viñas y cultivos, con un casco urbano tranquilo y zonas dispersas como Saifores. La población supera los 3.000 habitantes y se mantiene estable durante todo el año, sin la estacionalidad típica de los pueblos costeros.</p>
            <p>Aquí trabajamos sobre todo en casas familiares de varias plantas y viviendas en parcelas medianas. Son obras que combinan rehabilitación (cubiertas, fachadas, instalaciones) con modernización de espacios interiores. La cultura del vino del Penedès marca también el carácter de muchas viviendas: bodegas familiares, espacios de almacenaje y cocinas amplias.</p>
            <p>Nuestra sede en El Vendrell está a apenas 7 km, unos diez minutos por la TP-2125. Esa proximidad nos permite incluir Banyeres en nuestro radio habitual de trabajo sin recargos por desplazamiento ni demoras logísticas.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] text-white leading-[1.05]">Reformas en Banyeres y Saifores</h2>
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
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Reformas en Banyeres: lo que conviene saber</h2>
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Reformas en Banyeres del Penedès?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Te visitamos sin coste y te entregamos una valoración detallada por partidas. Sin sorpresas durante la obra.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
