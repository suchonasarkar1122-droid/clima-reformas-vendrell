import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Calafell · Empresa de Confianza | CRV",
  description:
    "Empresa de reformas en Calafell: pisos costeros, chalets en Segur, locales y reformas integrales. Valoración gratuita. Llama al 877 278 163.",
  alternates: { canonical: "/zonas/reformas-calafell" },
  openGraph: {
    title: "Reformas en Calafell · Clima Reformas Vendrell",
    description: "Reformas integrales y por estancias en Calafell, Segur de Calafell y Calafell Poble.",
    url: "/zonas/reformas-calafell",
    images: ["/images/salon-luminoso-mediterraneo-vendrell.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Renovamos chalets de Segur, pisos costeros y casas del centro de Calafell con equipo propio.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas a medida con materiales que aguantan la humedad de la primera línea.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "Baños con plato de obra, mampara fija y carpintería antihumedad.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Renovación completa de pisos años 70-80: instalaciones, suelos y carpintería.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Adecuación de locales en Calafell Platja para hostelería, retail y oficinas.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Cuánto cuesta una reforma integral en Calafell?", a: "Como referencia orientativa por metro cuadrado: piso costero en Calafell Platja desde 450 €/m² en gama media-alta, dependiendo del estado de instalaciones y carpintería. Chalets en Segur de Calafell desde 480 €/m². Cada vivienda se valora en visita técnica y te entregamos detalle por partidas, sin compromiso." },
  { q: "¿Qué tarda más, una obra en Calafell o en El Vendrell?", a: "Los plazos son los mismos: trabajamos con equipo propio y los desplazamientos entre Calafell y nuestra sede son cuestión de minutos. La diferencia la marca el estado del edificio, no la localización." },
  { q: "¿Tramitáis las licencias en el ayuntamiento de Calafell?", a: "Sí. Para obra menor preparamos la comunicación previa; para reformas con cambio de distribución, fachada o estructura, redactamos el proyecto técnico y solicitamos la licencia de obras al consistorio. Te ahorramos las gestiones." },
  { q: "¿Trabajáis en todas las urbanizaciones de Calafell?", a: "Cubrimos Calafell Platja, Segur de Calafell, Calafell Poble y todas las urbanizaciones del término municipal. Si tu vivienda está en una zona con accesos restringidos en verano, lo incluimos en la planificación." },
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
        title="Reformas en Calafell — Empresa de reformas de confianza"
        h1Keyword="Reformas en Calafell"
        subtitle="Pisos costeros, chalets en Segur de Calafell y casas del centro. Equipo propio, coste pactado y obra coordinada por una sola persona."
        image="/images/salon-luminoso-mediterraneo-vendrell.webp"
        imageAlt="Reforma de vivienda costera en Calafell"
        badge="Zona de servicio"
        showCTA
        trustItems={["Cercanía: 8 km", "Experiencia en Calafell", "Coste pactado"]}
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Calafell · Baix Penedès</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1] mb-3">Reformas en Calafell, Segur y Calafell Platja</h2>
          <p className="font-body text-subtitle text-base md:text-lg leading-relaxed mb-6">A 8 km de El Vendrell, en plena costa mediterránea.</p>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Calafell tiene tres caras muy distintas: el casco antiguo encaramado al castillo, el frente marítimo de Calafell Platja con sus pisos años 70 y 80, y la zona residencial de Segur de Calafell con chalets y adosados de los años 90 en adelante. Cada tipología pide soluciones técnicas diferentes y materiales pensados para resistir la sal y la humedad mediterráneas.</p>
            <p>La distancia desde nuestra sede en El Vendrell es de apenas diez minutos por la N-340 o por la C-32. Eso significa que podemos hacer dos visitas el mismo día si surge alguna decisión que tomar contigo, y que la coordinación con proveedores de Tarragona es fluida.</p>
            <p>Trabajamos con el mismo equipo propio y el mismo método que en El Vendrell: presupuesto detallado por partidas, calendario por fases y un único responsable de obra al que llamar. Los plazos no se alargan por estar fuera del municipio principal.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios disponibles</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] text-white leading-[1.05]">Reformas a medida en Calafell</h2>
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas habituales</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Lo que nos preguntan en Calafell</h2>
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">¿Tienes una vivienda que reformar en Calafell?</h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">Visita técnica gratuita en Calafell Platja, Segur o Calafell Poble. Te entregamos una valoración por partidas y un calendario claro.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
