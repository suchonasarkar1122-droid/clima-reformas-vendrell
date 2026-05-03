import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Cunit · Pisos costeros y casas | CRV",
  description:
    "Reformas en Cunit: pisos en Cunit Platja, casas en Cunit Poble y locales. Equipo propio, presupuesto fijo y obra coordinada. Llama al 877 278 163.",
  alternates: { canonical: "/zonas/reformas-cunit" },
  openGraph: {
    title: "Reformas en Cunit · Clima Reformas Vendrell",
    description: "Empresa de reformas en Cunit con sede en El Vendrell. Pisos costeros y casas.",
    url: "/zonas/reformas-cunit",
    images: ["/images/piso-reformado-completo-vendrell.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Renovamos pisos de Cunit Platja y casas del centro tradicional con equipo propio.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas abiertas o en U adaptadas a pisos compactos de la primera línea.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "Sustitución de bañeras por platos de obra antideslizantes; mucha demanda en pisos de los años 80.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Pintura, suelos, distribución y carpintería en pisos vacacionales o de residencia habitual.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Reformas de bares, comercios y oficinas en el paseo marítimo y la avenida principal.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Hacéis reformas en pisos de alquiler vacacional en Cunit?", a: "Sí, es uno de los proyectos que más manejamos: pisos pequeños en primera línea de playa que necesitan optimización del espacio, materiales resistentes al uso intensivo y estética actual para destacar en plataformas de alquiler. Te entregamos el piso listo para fotos profesionales." },
  { q: "¿Cuánto tarda una reforma de cocina y dos baños en un piso de Cunit Platja?", a: "Para un piso de 60-75 m² calcula entre 4 y 6 semanas, contando con que la fontanería y eléctrica se renuevan completamente. Si solo se cambia el mobiliario y los acabados, baja a 2-3 semanas." },
  { q: "¿Cómo coordináis la obra si vivimos en otra ciudad?", a: "Trabajamos con propietarios que residen en Barcelona, Tarragona o incluso fuera de Cataluña. Te mantenemos informado del avance de la obra, gestionamos los accesos al edificio y la firma del proyecto puede hacerse telemáticamente. En la mayoría de casos basta con venir a la entrega." },
  { q: "¿Se nota la cercanía con El Vendrell en los plazos?", a: "Sí. Estar a menos de 15 minutos en coche por la C-32 hace que podamos resolver imprevistos el mismo día y que los proveedores nos sirvan en horas, no en días. Eso reduce los plazos respecto a contratistas que vienen desde más lejos." },
];

export default function ZonaCunitPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Zonas", url: "/zonas" },
        { name: "Reformas en Cunit", url: "/zonas/reformas-cunit" },
      ]} />

      <HeroService
        title="Reformas en Cunit — Pisos costeros, casas y locales"
        h1Keyword="Reformas en Cunit"
        subtitle="Pisos vacacionales, viviendas de residencia habitual y locales en el paseo marítimo. Coste fijo, calendario claro y equipo propio desde El Vendrell."
        image="/images/piso-reformado-completo-vendrell.webp"
        imageAlt="Reforma de piso costero en Cunit"
        badge="Zona de servicio"
        showCTA
        trustItems={["Cercanía: 12 km", "Pisos vacacionales", "Coste cerrado"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Cunit · Baix Penedès</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-3">Reformas en Cunit y Cunit Platja</h2>
          <p className="font-body text-subtitle text-base md:text-lg leading-relaxed mb-6">A 12 km de El Vendrell, frente al Mediterráneo.</p>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Cunit es un municipio costero de unos 13.000 habitantes (más en verano) con un perfil residencial muy particular: gran parte del parque inmobiliario son pisos vacacionales o segundas residencias en Cunit Platja, mientras que Cunit Poble conserva casas familiares y construcciones más tradicionales algo retiradas del mar.</p>
            <p>La mayoría de las reformas que hacemos en Cunit son sobre pisos costeros de los años 80 que arrastran problemas comunes: fontanería envejecida, eléctrica sin protecciones modernas, ventanas sin rotura de puente térmico y baños con bañera donde la familia ya prefiere ducha. Son obras que repetimos cada temporada y conocemos al detalle.</p>
            <p>Llegamos en 12 minutos por la C-32 desde nuestra sede en El Vendrell. Esa cercanía nos permite escalonar visitas, probar materiales en obra y responder rápido si surge cualquier imprevisto. Los proveedores con los que trabajamos sirven a Cunit con los mismos tiempos que a El Vendrell.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] text-white leading-[1.05]">Reformas en Cunit a tu medida</h2>
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
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Reformas en Cunit: lo que nos preguntáis</h2>
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Reformas un piso o un local en Cunit?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Pasamos a verlo sin coste y te entregamos un presupuesto detallado por escrito. Trato directo con el responsable de obra desde el primer día.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
