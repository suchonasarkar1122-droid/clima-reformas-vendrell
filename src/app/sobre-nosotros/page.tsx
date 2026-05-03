import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Sobre Clima Reformas Vendrell · Quiénes somos",
  description:
    "Quiénes somos: 15 años reformando pisos costeros, casas de pueblo y segundas residencias en El Vendrell, Coma-ruga, Sant Salvador y todo el Baix Penedès. Equipo propio.",
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: {
    title: "Sobre Nosotros - Clima Reformas Vendrell",
    description:
      "Empresa local con equipo propio especializada en reformas residenciales en el Baix Penedès.",
    url: "/sobre-nosotros",
    images: ["/images/equipo-profesional-reformas-vendrell.webp"],
  },
};

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Cercanía",
    description:
      "Estamos en la calle Apel·les Fenosa, a cinco minutos del centro de El Vendrell y a quince del paseo de Coma-ruga. Cuando algo necesita un ajuste rápido, no perdemos un día entero en desplazamientos.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" strokeLinecap="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Oficio antiguo, técnica actual",
    description:
      "Conocemos los pisos años 70-80 de la primera línea de Sant Salvador, las casas de pueblo del Centre con sus suelos hidráulicos y las segundas residencias que llevan décadas pidiendo una renovación seria.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Plazos firmes",
    description:
      "Cada obra tiene un calendario por fases que respetamos. Si tu segunda residencia tiene que estar lista para un alquiler de verano o Semana Santa, nos lo decimos al firmar y no improvisamos.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" strokeLinecap="round">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Materiales que duran junto al mar",
    description:
      "Porcelánicos antideslizantes, carpinterías con rotura de puente térmico, herrajes inox, maderas tratadas. La humedad marina del Mediterráneo no perdona los atajos: usamos materiales pensados para ella.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Sobre Nosotros", url: "/sobre-nosotros" },
      ]} />

      {/* ============ HERO ============ */}
      <HeroService
        title="Quiénes están detrás de tu reforma"
        h1Keyword="Sobre Nosotros"
        subtitle="Empresa local del Baix Penedès con equipo propio. Quince años aprendiendo cómo se reforma bien junto al mar: humedad, sal, segundas residencias y casas de pueblo con su propia personalidad."
        image="/images/equipo-profesional-reformas-vendrell.webp"
        imageAlt="Equipo profesional de Clima Reformas Vendrell"
        badge="Clima Reformas Vendrell"
        showCTA
      />

      {/* ============ STORY ============ */}
      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">
                De dónde venimos
              </p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.05]">
                Empresa de reformas en El Vendrell desde hace 15 años
              </h2>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed">
                Empezamos hace quince años haciendo pequeños arreglos en pisos de Coma-ruga y casas familiares del centro de El Vendrell. Con el tiempo el equipo creció, los proyectos se hicieron más completos y acabamos especializándonos en la reforma integral residencial: pisos costeros, casas de pueblo y segundas residencias de toda la franja del Baix Penedès.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Hoy somos un equipo estable: albañiles, fontaneros, electricistas y carpinteros que trabajan juntos desde hace años. Apostamos por la coordinación interna porque hemos visto demasiadas obras desordenadas cuando cada gremio responde a un jefe distinto. Hay un responsable de obra y un teléfono al que llamar.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Conocemos las particularidades de cada zona: los pisos de los años 70 frente a la playa con sus problemas de aluminosis y humedades, las viviendas de Sant Salvador y El Mas Borràs, las casas con paredes de tapial del Centre histórico, los chalets de El Tancat. Llegamos con un diagnóstico realista y soluciones probadas.
              </p>
              <CTAButtons />
            </div>

            <div className="flex-1 relative min-h-[400px] lg:min-h-[550px] w-full rounded-[20px] overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/casa-reformada-interior-vendrell.webp"
                alt="Reforma residencial entregada por Clima Reformas Vendrell en el Baix Penedès"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Cómo entendemos el oficio
            </p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05] mb-5">
              Por qué elegir Clima Reformas Vendrell
            </h2>
            <p className="font-body text-white/55 text-base max-w-[560px] mx-auto">
              Cuatro principios no negociables que nos diferencian de las grandes constructoras y de los autónomos sueltos: tamaño justo y compromiso constante con la calidad y la palabra dada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white/5 border border-white/10 rounded-[16px] p-7 flex flex-col gap-4 hover:border-accent/40 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-body font-bold text-white text-lg">
                  {v.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Quién va a estar en tu casa
            </p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05] mb-5">
              El equipo de Clima Reformas Vendrell
            </h2>
            <p className="font-body text-subtitle text-base max-w-[600px] mx-auto">
              Todos viven en el Baix Penedès. Algunos crecieron entre las viñas del Penedès, otros se mudaron desde Tarragona hace años. Todos hablan catalán y castellano, y conocen bien el ayuntamiento de El Vendrell y los procedimientos del SUMA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Coordinación de obra",
                role: "Visita técnica y dirección",
                desc: "Es la persona que recorre tu vivienda en la primera visita, levanta el dossier técnico y firma contigo el cronograma. Te atiende durante la obra para resolver dudas o aprobar cambios cuando sea necesario.",
              },
              {
                name: "Ejecución",
                role: "Albañilería, instalaciones y carpintería",
                desc: "Equipo profesional con experiencia específica en pisos antiguos de la costa: detección y corrección de humedades, refuerzo de forjados, sustitución de instalaciones obsoletas, sellados resistentes a la sal marina.",
              },
              {
                name: "Acabados y diseño",
                role: "Selección de materiales e interiorismo",
                desc: "Te acompaña a los proveedores de la zona (Tarragona, Vilafranca) para elegir cerámicas, encimeras, mobiliario de baño y carpinterías. Sin presión: orientamos para que tomes decisiones informadas según presupuesto y uso real de la vivienda.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-[16px] p-8 border border-dark/5 flex flex-col gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="font-body font-bold text-dark text-lg">
                  {member.name}
                </h3>
                <p className="font-body text-accent text-sm font-semibold">
                  {member.role}
                </p>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">
            Solicita presupuesto para tu reforma
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">
            Reservar una visita es gratis y no compromete a nada. Vemos el estado real, escuchamos tus prioridades y te decimos si encajamos. Familias del Baix Penedès ya nos han confiado su reforma.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-dark-card transition-colors"
            >
              Reservar visita gratuita
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+34877278163"
              className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-7 py-4 rounded-full font-body font-bold text-[15px] hover:bg-white/10 transition-colors"
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
