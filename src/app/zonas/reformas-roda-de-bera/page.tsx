import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Roda de Berà · Casas y pisos | CRV",
  description:
    "Reformas en Roda de Berà: pisos en Costa Daurada, casas en Roda de Mar y reformas integrales. Equipo propio desde El Vendrell. Llama: 877 278 163.",
  alternates: { canonical: "/zonas/reformas-roda-de-bera" },
  openGraph: {
    title: "Reformas en Roda de Berà · Clima Reformas Vendrell",
    description: "Reformas integrales y rehabilitaciones en Roda de Berà y todo el litoral del Baix Penedès.",
    url: "/zonas/reformas-roda-de-bera",
    images: ["/images/cocina-amplia-reforma-vendrell.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Reforma completa de pisos en Costa Daurada y casas adosadas en Roda de Mar.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas que aprovechan al máximo la luz mediterránea y la ventilación cruzada.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "Baños accesibles, antideslizantes y con materiales que aguantan el ambiente salino.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Renovación de pisos vacacionales y de residencia habitual de los años 80 y 90.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Reformas de comercios y restaurantes en el paseo marítimo y zona del Arc de Berà.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Reformáis pisos en urbanizaciones de Costa Daurada en Roda de Berà?", a: "Sí, hacemos muchas reformas en bloques y urbanizaciones del litoral. Coordinamos con la presidencia de la comunidad para los horarios de ruido, los usos del montacargas y los días de carga/descarga. Es una gestión que ya tenemos rodada." },
  { q: "¿Cuánto tiempo lleváis trabajando en Roda de Berà?", a: "Operamos en Roda desde los inicios de la empresa. Conocemos las particularidades constructivas de Roda de Mar, las casas más alejadas hacia el interior y las urbanizaciones de Costa Daurada. Ese conocimiento agiliza el diagnóstico." },
  { q: "¿Se puede acceder con materiales pesados a las urbanizaciones de Roda?", a: "Algunas comunidades tienen restricciones de tamaño o de horario. Lo verificamos en la visita técnica y planificamos la logística antes de empezar: si hace falta usar plataformas elevadoras o servir cerámicas en horas concretas, lo coordinamos." },
  { q: "¿Trabajáis en colaboración con interioristas o arquitectos?", a: "Sí, trabajamos a menudo con profesionales que llevan el diseño y nosotros ejecutamos. También ofrecemos un servicio de proyecto + obra integral si prefieres tener un único interlocutor para todo." },
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
        title="Reformas en Roda de Berà — Litoral Costa Daurada"
        h1Keyword="Reformas en Roda de Berà"
        subtitle="Pisos en urbanizaciones de Costa Daurada, casas en Roda de Mar y locales en el centro. Equipo propio, presupuesto fijo y obra cuidada."
        image="/images/cocina-amplia-reforma-vendrell.webp"
        imageAlt="Reforma de cocina en piso de Roda de Berà"
        badge="Zona de servicio"
        showCTA
        trustItems={["Cercanía: 18 km", "Costa Daurada", "Coste cerrado"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Roda de Berà · Costa Daurada</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-3">Reformas en Roda de Berà y Costa Daurada</h2>
          <p className="font-body text-subtitle text-base md:text-lg leading-relaxed mb-6">A 18 km al sur de El Vendrell, junto al Arc de Berà.</p>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Roda de Berà es uno de los municipios más turísticos de Costa Daurada, con un perfil residencial mixto: pisos en urbanizaciones cerradas frente al mar, casas en Roda de Mar y un núcleo histórico junto al monumento romano del Arc de Berà. La cercanía con Tarragona y la N-340 lo convierte en una zona de mucho movimiento inmobiliario.</p>
            <p>La mayoría de proyectos que hacemos aquí son sobre pisos costeros de los años 80-90 y adosados en urbanizaciones más recientes. Las particularidades técnicas son las mismas que en el resto del litoral: humedad marina, instalaciones envejecidas y carpintería que ha perdido eficiencia. Sabemos qué materiales aguantan y cuáles no merecen la pena.</p>
            <p>Desde nuestra sede en El Vendrell tardamos unos veinte minutos por la N-340 o la AP-7. Coordinamos los suministros con proveedores de Tarragona ciudad para optimizar tiempos y costes en la zona sur del Baix Penedès.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] text-white leading-[1.05]">Reformas en Roda de Berà</h2>
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Reformas en Roda: dudas resueltas</h2>
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Reforma en Roda de Berà o Costa Daurada?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Pasamos a ver tu vivienda sin coste y te enviamos una valoración detallada por escrito. Trato directo, sin intermediarios.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
