import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";

export const metadata: Metadata = {
  title: "Servicios de Reformas en El Vendrell | CRV",
  description:
    "Reformas integrales, cocinas, baños, pisos y locales en El Vendrell y Baix Penedès. Equipo propio, coste pactado y trato cercano. Llama: 877 278 163.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios de Reformas · Clima Reformas Vendrell",
    description: "Todas nuestras especialidades en reformas residenciales y locales en el Baix Penedès.",
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
      "Renovación completa de pisos costeros, casas de pueblo y segundas residencias. Equipo propio y coste pactado de antemano.",
  },
  {
    title: "Reformas de Cocinas",
    slug: "reformas-cocinas",
    image: "/images/cocina-amplia-reforma-vendrell.webp",
    alt: "Reforma de cocina moderna en El Vendrell",
    description:
      "Cocinas a medida pensadas para la humedad costera: encimeras porcelánicas, herrajes inox y mobiliario hidrófugo.",
  },
  {
    title: "Reformas de Baños",
    slug: "reformas-banos",
    image: "/images/bano-natural-reformado-vendrell.webp",
    alt: "Reforma de baño de diseño en El Vendrell",
    description:
      "Baños actuales con plato de obra, mampara fija y materiales antideslizantes. Sustitución de bañeras por ducha en pisos años 70-80.",
  },
  {
    title: "Reformas de Pisos",
    slug: "reformas-pisos",
    image: "/images/salon-luminoso-mediterraneo-vendrell.webp",
    alt: "Reforma de vivienda completa en El Vendrell",
    description:
      "Renovamos pisos vacacionales y viviendas habituales del Baix Penedès: instalaciones nuevas, suelos, carpintería y pintura.",
  },
  {
    title: "Reformas de Locales",
    slug: "reformas-locales",
    image: "/images/local-comercial-reformado-vendrell.webp",
    alt: "Reforma de local comercial en El Vendrell",
    description:
      "Adecuación de comercios, restaurantes y oficinas en El Vendrell, Coma-ruga y paseos marítimos del Baix Penedès.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <HeroService
        title="Especialidades pensadas para el Baix Penedès"
        subtitle="Reformas integrales, cocinas, baños, pisos y locales en El Vendrell y municipios cercanos. Cinco líneas de trabajo, un equipo coordinado y un único responsable de obra."
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
              Elige tu tipo de reforma y descubre cómo trabajamos cada estancia.
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
            La diferencia CRV: cuatro motivos por los que familias del Baix Penedès nos confían su obra.
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
                text: "Profesionales coordinados internamente en cada fase de tu reforma para que la obra fluya con un único interlocutor.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Presupuesto cerrado",
                text: "Sin sorpresas ni extras ocultos. El precio que pactamos es el precio final.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Plazos reales",
                text: "Cumplimos los tiempos comprometidos. Planificación rigurosa y ejecución eficiente.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Acabados que duran",
                text: "Materiales de calidad, ejecución cuidada y acompañamiento también después de la entrega.",
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
            Cuéntanos qué necesitas y te preparamos un presupuesto detallado por escrito. Sin compromiso.
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
