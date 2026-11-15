import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Quiénes somos · Reformas en El Vendrell",
  description:
    "Empresa de reformas con oficina en El Vendrell y equipo propio: cómo trabajamos, quién estará en tu obra y por qué nos centramos en el Baix Penedès.",
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: {
    title: "Quiénes somos · Clima Reformas Vendrell",
    description:
      "Equipo de reformas con base en El Vendrell, centrado en viviendas y locales del Baix Penedès.",
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
    title: "Cerca de la obra",
    description:
      "La oficina está en la calle Apel·les Fenosa, en el propio Vendrell. Del centro a la playa de Coma-ruga hay un trayecto corto, así que pasar por la obra para revisar un detalle no cuesta un día de desplazamientos.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" strokeLinecap="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Conocer la casa antes de opinar",
    description:
      "Un apartamento de playa de los setenta, una casa entre medianeras del casco antiguo y un adosado de urbanización fallan por sitios distintos. Diagnosticamos primero y proponemos después.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Fechas por escrito",
    description:
      "Antes de empezar dejamos un calendario por fases. Si la vivienda tiene que estar lista para una fecha concreta, como Semana Santa o el inicio del verano, se planifica desde ahí.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" strokeLinecap="round">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Materiales para este clima",
    description:
      "La humedad y el salitre de la costa estropean pronto herrajes, pinturas y carpinterías de baja calidad. Elegimos productos que aguantan ese ambiente y te explicamos por qué.",
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
        title="Las personas que harán tu reforma"
        h1Keyword="Sobre Nosotros"
        subtitle="Una empresa de reformas con oficina en El Vendrell, equipo propio y un ámbito de trabajo deliberadamente pequeño: el municipio y los pueblos que lo rodean."
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
                Quiénes somos
              </p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.05]">
                Una empresa de reformas del Vendrell, para el Vendrell
              </h2>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed">
                Clima Reformas Vendrell nació de trabajos pequeños: arreglar un baño que filtraba en un piso de Coma-ruga, cambiar la cocina de una casa del centro, poner al día la instalación eléctrica de un apartamento que llevaba décadas sin tocarse. De ahí pasamos a encargos cada vez más completos, hasta centrarnos en lo que hoy es nuestro trabajo principal: reformas integrales y por estancias de viviendas y locales en El Vendrell y su entorno.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Decidimos no crecer hacia fuera. Preferimos trabajar en un radio que podamos recorrer varias veces al día, con un equipo estable de albañiles, fontaneros, electricistas y carpinteros acostumbrados a trabajar juntos. Esa forma de organizarnos tiene una consecuencia práctica para ti: hay una persona responsable de tu obra, que conoce cada partida y que es la que contesta cuando llamas.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Trabajar siempre en la misma zona también nos ha enseñado sus particularidades. Sabemos qué pasa en los techos de los apartamentos de primera línea después de un invierno cerrados, cómo suelen estar las vigas de las casas antiguas del casco histórico, qué piden las comunidades de vecinos de Sant Salvador en verano o qué dificultades tienen los adosados de las urbanizaciones con el frío. Ese conocimiento es lo que nos permite presupuestar con realismo.
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
              Cuatro compromisos que aplicamos en cada obra
            </h2>
            <p className="font-body text-white/55 text-base max-w-[560px] mx-auto">
              Somos una empresa de tamaño medio: suficientemente grande para llevar una reforma completa con equipo propio y suficientemente pequeña para conocer cada obra por su nombre.
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
              Cómo se reparte el trabajo en el equipo
            </h2>
            <p className="font-body text-subtitle text-base max-w-[600px] mx-auto">
              El equipo vive en la comarca y trabaja en catalán y castellano. Conocemos los trámites de obra del Ajuntament del Vendrell y de los ayuntamientos vecinos, y a los proveedores de la zona.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Coordinación de obra",
                role: "Diagnóstico, presupuesto y seguimiento",
                desc: "Hace la primera visita, prepara el presupuesto por partidas y el calendario, y es tu interlocutor hasta la entrega. Si hay que decidir algo durante la obra, te lo plantea con opciones y precio.",
              },
              {
                name: "Ejecución",
                role: "Albañilería, instalaciones y carpintería",
                desc: "Los oficios que trabajan en tu vivienda. Están acostumbrados a pisos antiguos de costa y casas de pueblo: humedades, forjados que hay que revisar, instalaciones obsoletas y materiales que deben resistir el ambiente marino.",
              },
              {
                name: "Acabados y materiales",
                role: "Selección y propuesta",
                desc: "Te ayuda a escoger revestimientos, sanitarios, encimeras y carpinterías, con muestras o visitando exposiciones de la zona. La idea es que decidas sabiendo cómo se comporta cada material y cuánto cuesta.",
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

          <div className="max-w-[860px] mx-auto mt-16 space-y-5 font-body text-subtitle text-base leading-relaxed">
            <h3 className="font-body font-bold text-dark text-xl">Si no vives en El Vendrell</h3>
            <p>
              Una parte importante de nuestros clientes tiene aquí su segunda residencia y vive fuera de la comarca durante buena parte del año. Para ellos organizamos la obra de forma que solo tengan que venir dos veces: a revisar la propuesta y a la entrega. Entre medias, enviamos fotos al cerrar cada fase, consultamos cualquier cambio antes de hacerlo y coordinamos con la comunidad de vecinos el acceso al edificio. Si te encaja esa forma de trabajar, empieza por ver qué hacemos en <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline">reformas de pisos</Link>.
            </p>
            <h3 className="font-body font-bold text-dark text-xl">Dónde trabajamos</h3>
            <p>
              Además de todo el término del Vendrell, atendemos los municipios vecinos: hacia la costa, <Link href="/zonas/reformas-cunit" className="text-accent font-semibold underline">Cunit</Link> y <Link href="/zonas/reformas-roda-de-bera" className="text-accent font-semibold underline">Roda de Berà</Link>; hacia el interior, L&apos;Arboç, Banyeres del Penedès y otros pueblos cercanos. Tienes el detalle en la página de <Link href="/zonas" className="text-accent font-semibold underline">zonas de trabajo</Link>.
            </p>
            <h3 className="font-body font-bold text-dark text-xl">Lo que no hacemos</h3>
            <p>
              No subcontratamos la obra entera a terceros ni damos precios cerrados sin haber visto la vivienda. Tampoco empezamos una obra que necesita permiso antes de tenerlo tramitado. Preferimos explicarte por qué un plazo es el que es a prometer uno que no se puede cumplir.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white leading-[1.1]">
            ¿Nos conocemos en tu casa?
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-[520px]">
            La primera visita es gratuita y sin compromiso. Vemos la vivienda, escuchamos lo que quieres hacer y te decimos con franqueza si somos el equipo adecuado.
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
