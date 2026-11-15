import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";

export const metadata: Metadata = {
  title: "Servicios de Reformas en El Vendrell",
  description:
    "Qué reformamos en El Vendrell: viviendas completas, cocinas, baños, pisos y locales. Cómo elegir el tipo de obra y qué incluye cada servicio. 877 278 163.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios de reforma en El Vendrell",
    description: "Cinco tipos de obra para viviendas y negocios del Baix Penedès, con un único responsable y presupuesto por partidas.",
    url: "/servicios",
    images: ["/images/hero-reforma-luminosa-vendrell.webp"],
  },
};

const services = [
  {
    title: "Reformas Integrales",
    slug: "reformas-integrales",
    image: "/images/reforma-integral-vivienda-vendrell.webp",
    alt: "Reforma integral de vivienda en El Vendrell",
    description:
      "Vaciar y rehacer la vivienda entera: instalaciones, distribución y acabados. Para casas del casco antiguo, apartamentos heredados y adosados.",
  },
  {
    title: "Reformas de Cocinas",
    slug: "reformas-cocinas",
    image: "/images/cocina-amplia-reforma-vendrell.webp",
    alt: "Reforma de cocina moderna en El Vendrell",
    description:
      "Distribución, agua, electricidad, muebles y encimera. Abrir la cocina al comedor o reorganizarla para que funcione mejor.",
  },
  {
    title: "Reformas de Baños",
    slug: "reformas-banos",
    image: "/images/bano-natural-reformado-vendrell.webp",
    alt: "Reforma de baño de diseño en El Vendrell",
    description:
      "De bañera a ducha, con impermeabilización bajo el revestimiento y ventilación para que el moho no vuelva.",
  },
  {
    title: "Reformas de Pisos",
    slug: "reformas-pisos",
    image: "/images/salon-luminoso-mediterraneo-vendrell.webp",
    alt: "Reforma de vivienda completa en El Vendrell",
    description:
      "Reforma completa o por estancias de pisos de playa y del centro, coordinada con la comunidad de vecinos.",
  },
  {
    title: "Reformas de Locales",
    slug: "reformas-locales",
    image: "/images/local-comercial-reformado-vendrell.webp",
    alt: "Reforma de local comercial en El Vendrell",
    description:
      "Tiendas, bares, despachos y consultas. Trámites municipales, obra y documentación para poder abrir en la fecha prevista.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <HeroService
        title="Cinco tipos de obra, una sola forma de trabajar"
        subtitle="Viviendas completas, cocinas, baños, pisos y locales en El Vendrell y los pueblos de alrededor, con un responsable de obra que te acompaña de principio a fin."
        image="/images/hero-reforma-luminosa-vendrell.webp"
        imageAlt="Servicios de reformas en El Vendrell"
        h1Keyword="Servicios de reformas en El Vendrell"
        badge="Cinco especialidades"
        showCTA
      />

      {/* ============ LISTADO DE SERVICIOS ============ */}
      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">
              ¿Qué necesitas reformar?
            </p>
            <h2 className="font-body font-black text-[36px] md:text-[48px] lg:text-[56px] uppercase text-dark leading-[1]">
              Servicios de reformas en El Vendrell
            </h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[600px] mx-auto mt-5">
              Entra en cada servicio para ver qué incluye, cómo lo organizamos y precios orientativos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    title={service.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="font-body font-black text-xl uppercase text-dark group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-subtitle text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body font-bold text-accent text-sm uppercase tracking-wide">
                    Ver servicio
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CÓMO ELEGIR ============ */}
      <section className="bg-beige-warm px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[900px] space-y-5 font-body text-subtitle text-base leading-relaxed">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Antes de pedir presupuesto</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-dark leading-[1.1]">Cómo saber qué tipo de reforma necesitas</h2>
          <p>
            Mucha gente nos llama pensando en cambiar el baño y, al revisar la vivienda, descubre que la instalación eléctrica o las tuberías piden una renovación completa. Otras veces ocurre lo contrario: alguien da por hecho que necesita una reforma integral y, en realidad, con cambiar cocina, baño y ventanas tiene la casa resuelta para muchos años. Por eso la primera visita sirve sobre todo para diagnosticar.
          </p>
          <p>
            Una regla práctica: si la vivienda tiene más de treinta años y nunca se han tocado electricidad y fontanería, merece la pena valorar una <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline">reforma integral</Link> o, al menos, renovar las instalaciones generales antes de cambiar acabados. Si las instalaciones están bien, se puede ir por partes: primero la <Link href="/servicios/reformas-banos" className="text-accent font-semibold underline">reforma del baño</Link>, que es lo que más se deteriora con la humedad, después la <Link href="/servicios/reformas-cocinas" className="text-accent font-semibold underline">reforma de la cocina</Link>, y más adelante suelos, puertas y pintura.
          </p>
          <p>
            En los apartamentos de Coma-ruga y Sant Salvador hay que añadir dos factores: la comunidad de vecinos, que marca horarios y temporadas de obra, y el ambiente marino, que obliga a elegir bien carpinterías, herrajes y pinturas. Lo detallamos en <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline">reformas de pisos</Link>. En los negocios, lo que manda es el trámite que corresponde a la actividad y la fecha de apertura; lo explicamos en <Link href="/servicios/reformas-locales" className="text-accent font-semibold underline">reformas de locales</Link>.
          </p>
          <p>
            Sea cual sea el servicio, el método es el mismo: visita sin coste, presupuesto desglosado, calendario por escrito, permisos tramitados por nosotros y una entrega en la que repasamos la obra contigo antes de darla por terminada. Si quieres hacerte una idea previa de importes, nuestro <Link href="/blog/cuanto-cuesta-reformar-piso-vendrell" className="text-accent font-semibold underline">artículo sobre precios de reforma</Link> recoge rangos orientativos por estancia.
          </p>
        </div>
      </section>

      {/* ============ POR QUÉ CRV ============ */}
      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">
            ¿Por qué elegirnos?
          </p>
          <h2 className="font-body font-black text-[32px] md:text-[48px] uppercase text-white leading-[1] mb-5">
            Por qué elegir Clima Reformas Vendrell
          </h2>
          <p className="font-body text-white/60 text-base md:text-lg max-w-[560px] mx-auto mb-12">
            Lo que se mantiene igual tanto si cambiamos un baño como si rehacemos una casa entera.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
                title: "Equipo propio",
                text: "Albañilería, fontanería, electricidad y carpintería coordinadas por la misma persona, que es la que te coge el teléfono.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Presupuesto cerrado",
                text: "Cada partida por separado y por escrito. Si algo cambia durante la obra, lo hablamos antes de hacerlo.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Plazos reales",
                text: "Calendario por fases desde el inicio, contando con los permisos y con los materiales que tardan en llegar.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Acabados que duran",
                text: "Materiales escogidos para la humedad y el salitre de la costa, y respuesta dentro de la garantía legal si surge algo.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-4 p-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-body font-bold text-lg uppercase text-white">
                  {item.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-body font-black text-[32px] md:text-[48px] uppercase text-white leading-[1]">
            Solicita presupuesto para tu reforma
          </h2>
          <p className="font-body text-white/90 text-lg max-w-[500px]">
            Explícanos qué quieres cambiar y te visitamos para darte un precio desglosado. Decides después, sin presión.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors"
            >
              Solicita presupuesto gratis
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+34877278163"
              className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-7 py-4 rounded-full font-body font-bold text-[15px] hover:bg-white/10 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              877 278 163
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
