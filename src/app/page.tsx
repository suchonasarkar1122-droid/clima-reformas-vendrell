import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import CTAButtons from "@/components/CTAButtons";
import TestimonialCard from "@/components/TestimonialCard";
import TickerBand from "@/components/TickerBand";
import HeroFormPill from "@/components/HeroFormPill";
import SectionDivider from "@/components/SectionDivider";

const AnimatedCounter = dynamic(() => import("@/components/AnimatedCounter"));
const ProcessCard = dynamic(() => import("@/components/ProcessCard"));
const CTAForm = dynamic(() => import("@/components/CTAForm"));

const services = [
  {
    title: "Reformas Integrales",
    href: "/servicios/reformas-integrales",
    image: "/images/reforma-integral-vivienda-vendrell.webp",
    alt: "Reforma integral con salón diáfano y zona de estar en El Vendrell",
  },
  {
    title: "Reformas de Cocinas",
    href: "/servicios/reformas-cocinas",
    image: "/images/cocina-amplia-reforma-vendrell.webp",
    alt: "Cocina amplia y luminosa con comedor reformada en El Vendrell",
  },
  {
    title: "Reformas de Baños",
    href: "/servicios/reformas-banos",
    image: "/images/bano-natural-reformado-vendrell.webp",
    alt: "Baño de estilo natural y boho reformado en El Vendrell",
  },
  {
    title: "Reformas de Pisos",
    href: "/servicios/reformas-pisos",
    image: "/images/salon-luminoso-mediterraneo-vendrell.webp",
    alt: "Piso amplio con cocina y pasillo reformado en El Vendrell",
  },
  {
    title: "Reformas de Locales",
    href: "/servicios/reformas-locales",
    image: "/images/local-comercial-reformado-vendrell.webp",
    alt: "Local comercial reformado en El Vendrell",
  },
];

const testimonials = [
  {
    name: "Marta Solé",
    role: "Propietaria en Coma-ruga",
    quote: "Renovaron nuestro piso de segunda residencia frente al mar entre noviembre y febrero, listo para Semana Santa. Ningún sobrecoste, plazos firmes y un trato muy cercano.",
  },
  {
    name: "Jordi Vidal",
    role: "Vecino del centro de El Vendrell",
    quote: "Reformaron una casa de pueblo de tres plantas respetando vigas y suelos hidráulicos originales. Profesionalidad de oficio antiguo con acabados actuales.",
  },
  {
    name: "Núria Carbó",
    role: "Residente en Sant Salvador",
    quote: "Cambiamos cocina y dos baños. Nos asesoraron con materiales que aguantan la humedad costera. Muy contentos con el resultado y la limpieza al entregar.",
  },
];

const processSteps = [
  {
    title: "Visita y diagnóstico",
    description: "Quedamos en la vivienda, sea en el centro, en la playa o en una urbanización. Miramos instalaciones, humedades y medidas, y nos cuentas qué te gustaría cambiar. La visita no tiene coste.",
    image: "/images/equipo-profesional-reformas-vendrell.webp",
  },
  {
    title: "Proyecto y presupuesto fijo",
    description: "Recibes un presupuesto por partidas con los materiales concretos y un calendario por fases. Lo revisas con calma, lo ajustamos si hace falta y lo firmamos antes de empezar.",
    image: "/images/presupuesto-detallado-reforma-vendrell.webp",
  },
  {
    title: "Ejecución con equipo propio",
    description: "Los oficios entran en orden y bajo una sola coordinación. Al cerrar cada fase te enviamos fotos, así puedes seguir la obra aunque pases la semana lejos del Baix Penedès.",
    image: "/images/ejecucion-obra-reforma-vendrell.webp",
    objectPosition: "center 60%",
  },
  {
    title: "Entrega cuidada",
    description: "Repasamos la vivienda contigo habitación por habitación, corregimos lo que haga falta, limpiamos a fondo y te dejamos boletines y fichas de materiales. Lista para entrar a vivir.",
    image: "/images/casa-reformada-interior-vendrell.webp",
  },
];

const galleryImages = [
  { src: "/images/cocina-funcional-reforma-vendrell.webp", caption: "Cocina abierta con isla", alt: "Reforma de cocina abierta en El Vendrell" },
  { src: "/images/bano-ducha-cristal-vendrell.webp", caption: "Baño con plato de obra y mampara", alt: "Reforma de baño con ducha de cristal en El Vendrell" },
  { src: "/images/salon-luminoso-mediterraneo-vendrell.webp", caption: "Piso amplio con cocina y pasillo", alt: "Piso amplio reformado con cocina abierta y pasillo en El Vendrell" },
  { src: "/images/cocina-antes-despues-reforma-vendrell.webp", caption: "Cocina contemporánea", alt: "Cocina con encimera porcelánica en El Vendrell" },
  { src: "/images/habitacion-reformada-vendrell.webp", caption: "Dormitorio luminoso", alt: "Dormitorio reformado en piso de Sant Salvador" },
  { src: "/images/casa-reformada-interior-vendrell.webp", caption: "Casa de pueblo restaurada", alt: "Casa de pueblo restaurada en el centro de El Vendrell" },
];

const faqs = [
  {
    q: "¿Cuántas semanas dura reformar entero un apartamento de la playa?",
    a: "Un apartamento de 70 a 90 m² en Coma-ruga o Sant Salvador suele necesitar entre 8 y 12 semanas de obra, según se cambien solo cocina y baños o también suelos, puertas y ventanas. Si lo quieres listo para Semana Santa o para el verano, lo ideal es empezar a hablar en otoño.",
  },
  {
    q: "No vivo en El Vendrell, ¿cómo sigo la obra?",
    a: "Muchas de las viviendas que reformamos son segundas residencias. Normalmente basta con que vengas a revisar la propuesta y el día de la entrega; entre medias te mandamos fotos de cada fase y te consultamos cualquier cambio antes de hacerlo.",
  },
  {
    q: "¿Qué permiso pide el Ajuntament del Vendrell para una reforma?",
    a: "Las obras interiores que no afectan a estructura ni fachada se tramitan habitualmente como comunicación previa. Si se cambia la distribución de forma importante, se actúa sobre muros de carga, terrazas o fachada, hace falta proyecto técnico y licencia de obra mayor. Si el contenedor ocupa la calle, se pide también ese permiso. Preparamos toda la documentación.",
  },
  {
    q: "¿Podéis conservar las vigas y el suelo hidráulico de una casa antigua?",
    a: "Sí, si están en buen estado. En las casas del casco antiguo revisamos primero la estructura y, a partir de ahí, decidimos qué se conserva, qué se restaura y por dónde pasan las instalaciones nuevas para que se vean lo menos posible.",
  },
  {
    q: "¿Hacéis obras fuera del término municipal?",
    a: "Sí, en los pueblos vecinos: Cunit, L'Arboç, Banyeres del Penedès, Roda de Berà, Calafell y otros cercanos como Albinyana, Bellvei o Santa Oliva. Trabajamos con el mismo equipo y el mismo método, y tramitamos los permisos en cada ayuntamiento.",
  },
  {
    q: "¿El presupuesto incluye escombros y limpieza?",
    a: "Sí. El contenedor, el transporte de los residuos a una planta autorizada y la limpieza final de la vivienda forman parte del presupuesto, igual que la protección de ascensor y zonas comunes durante la obra.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO SECTION (Minimal premium con video) ============ */}
      <section className="relative min-h-[88vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-reforma-luminosa-vendrell.webp"
            className="absolute inset-0 w-full h-full object-cover opacity-45 grayscale-[15%]"
          >
            <source src="/videos/hero.webm" type="video/webm" />
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          {/* Gradientes vertical + radial centrado para respaldar el H1 sin matar el video */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/55" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] rounded-full bg-black/30 blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-[900px] flex flex-col justify-center items-center text-center px-5 sm:px-6 pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[88vh]">
          <span className="inline-block text-accent uppercase tracking-[0.4em] text-[11px] sm:text-xs font-body font-semibold mb-8">
            Clima Reformas Vendrell
          </span>
          <h1 className="font-display font-extrabold text-white leading-[1.05] tracking-tight text-[44px] sm:text-[60px] md:text-[80px] lg:text-[100px]">
            Reformas <span className="text-accent">El Vendrell</span>
          </h1>
          <p className="font-body text-white/55 mt-8 text-base md:text-lg leading-[1.6] max-w-[520px] mx-auto">
            Apartamentos de Coma-ruga y Sant Salvador, casas del casco antiguo y viviendas de urbanización. Un equipo propio y un responsable de obra.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#hero-form" className="bg-accent text-white px-7 py-4 rounded-full font-display font-bold text-sm hover:bg-accent-light transition-colors">
              Pide presupuesto gratis
            </a>
            <a href="https://wa.me/34623760710" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-7 py-4 rounded-full font-body text-sm hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" /></svg>
              WhatsApp
            </a>
            <a href="tel:+34877278163" className="text-white/70 px-5 py-4 font-body text-sm hover:text-white transition-colors inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              877 278 163
            </a>
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/40 text-xs font-body uppercase tracking-[0.2em]">
            <span>Sin compromiso</span>
            <span className="hidden sm:inline">·</span>
            <span>Respuesta en 24h</span>
            <span className="hidden sm:inline">·</span>
            <span>Cobertura Baix Penedès</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent z-20" />
      </section>

      {/* ============ FORM PILL SECTION ============ */}
      <section id="hero-form" className="bg-beige-warm py-16 md:py-20 border-b border-grey-light/50 scroll-mt-20">
        <div className="max-w-[1100px] mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-dark mb-2">Empieza tu reforma en 30 segundos</h2>
            <p className="text-grey font-body text-sm">Dinos dónde está la vivienda y qué quieres cambiar; te llamamos para concretar la visita.</p>
          </div>
          <HeroFormPill
            formspreeId="xaqvygaw"
            origin="reformasvendrell.es"
            localities={["El Vendrell", "Coma-ruga", "Sant Salvador", "Calafell", "Cunit", "L'Arboç", "Roda de Berà", "Banyeres del Penedès", "Otra"]}
            serviceTypes={["Reforma integral", "Cocina", "Baño", "Piso completo", "Casa de pueblo", "Local comercial", "Otro"]}
          />
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <TickerBand
        items={["apartamentos de playa", "casas del casco antiguo", "adosados de urbanización", "locales", "Sant Vicenç de Calders", "Coma-ruga · Sant Salvador"]}
        bgColor="bg-accent"
        textColor="text-white"
        direction="right"
        size="small"
      />

      {/* ============ SERVICES (Hero -> Servicios) ============ */}
      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Lo que hacemos</p>
            <h2 className="font-display font-extrabold text-[36px] md:text-[48px] lg:text-[64px] text-white leading-[1.05] mb-5">
              Servicios de reformas en El Vendrell
            </h2>
            <p className="font-body text-white/55 text-lg max-w-[560px] mx-auto">
              Cinco tipos de obra para las viviendas y los negocios del municipio. Entra en cada uno para ver qué incluye y cómo lo organizamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {services.slice(0, 3).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-[24px] overflow-hidden min-h-[280px] md:min-h-[480px] flex flex-col justify-end"
              >
                <Image src={service.image} alt={service.alt} title={service.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-accent/80 group-hover:via-accent/20 transition-all duration-500" />
                <div className="relative z-10 p-7 md:p-8">
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white leading-[1.1] inline-flex items-center gap-3">
                    {service.title}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.slice(3).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-[24px] overflow-hidden min-h-[280px] md:min-h-[320px] flex flex-col justify-end"
              >
                <Image src={service.image} alt={service.alt} title={service.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-accent/80 group-hover:via-accent/20 transition-all duration-500" />
                <div className="relative z-10 p-6 md:p-7">
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-white leading-[1.1] inline-flex items-center gap-3">
                    {service.title}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUST (Why) ============ */}
      <section className="bg-beige pt-12 md:pt-14 pb-20 md:pb-28 px-5 overflow-hidden">
        <SectionDivider />
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Por qué Clima Reformas</p>
            <h2 className="font-display font-extrabold text-[36px] md:text-[52px] lg:text-[64px] text-dark leading-[1.05] mb-5">
              Cómo trabajamos en Clima Reformas Vendrell
            </h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[600px] mx-auto">
              Cuatro compromisos que mantenemos en cualquier obra, desde un baño en Sant Salvador hasta una casa entera en el centro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <div className="bg-white border border-dark/5 rounded-2xl p-8 flex gap-5 items-start hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <div>
                <h3 className="font-body font-bold text-dark text-lg mb-2">Presupuesto desglosado</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  Cada oficio y cada material con su importe. Si al abrir una pared aparece algo que no se podía ver, te lo enseñamos y te damos el precio antes de seguir; nada se añade a la factura sin tu visto bueno.
                </p>
              </div>
            </div>

            <div className="bg-white border border-dark/5 rounded-2xl p-8 flex gap-5 items-start hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-body font-bold text-dark text-lg mb-2">Fechas realistas</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  Contamos con el tiempo del permiso, con los materiales que tardan en fabricarse y con las normas de la comunidad. Así la fecha de entrega que te damos es una que se puede cumplir.
                </p>
              </div>
            </div>

            <div className="bg-white border border-dark/5 rounded-2xl p-8 flex gap-5 items-start hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" strokeLinecap="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div>
                <h3 className="font-body font-bold text-dark text-lg mb-2">Un solo interlocutor</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  Los oficios forman parte del mismo equipo y responden a la misma persona. Tú hablas con ella y ella se encarga de que el fontanero no espere al albañil ni el pintor llegue antes de tiempo.
                </p>
              </div>
            </div>

            <div className="bg-white border border-dark/5 rounded-2xl p-8 flex gap-5 items-start hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2" strokeLinecap="round">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.73 0 3.35.49 4.72 1.33" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <div>
                <h3 className="font-body font-bold text-dark text-lg mb-2">Pensado para este clima</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  Cerca del mar, la sal y la humedad castigan herrajes, pinturas y juntas. Elegimos materiales que lo soportan y, si después de la entrega algo necesita un ajuste dentro de la garantía legal, volvemos a revisarlo.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <CTAButtons className="justify-center" />
          </div>
        </div>
      </section>

      {/* ============ REFORMAR EN EL VENDRELL ============ */}
      <section className="bg-beige-warm px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[900px] space-y-5 font-body text-subtitle text-base leading-relaxed">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Conocer el terreno</p>
          <h2 className="font-display font-extrabold text-[30px] md:text-[44px] text-dark leading-[1.05]">Reformar en El Vendrell: cada barrio, su obra</h2>
          <p>
            El término municipal del Vendrell reúne en pocos kilómetros tipos de vivienda muy distintos, y eso cambia la manera de plantear una reforma. No se aborda igual un apartamento de veraneo frente a la playa que una casa de tres plantas del casco antiguo o un adosado con jardín de una urbanización.
          </p>
          <h3 className="font-body font-bold text-dark text-xl">La costa: Coma-ruga, Sant Salvador y Els Masos</h3>
          <p>
            La mayoría de los bloques de la franja litoral se construyeron entre los años sesenta y ochenta como segundas residencias. Hoy muchos se reforman para vivir en ellos todo el año o para alquilarlos por temporadas. Las prioridades se repiten: renovar electricidad y fontanería, cambiar ventanas que no aíslan, sustituir la bañera por una ducha y abrir la cocina para ganar luz. A eso se suma el ambiente marino, que obliga a escoger bien los materiales, y la condensación que aparece en invierno en los pisos cerrados. Lo explicamos en <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline">reformas de pisos</Link> y en <Link href="/servicios/reformas-banos" className="text-accent font-semibold underline">reformas de baños</Link>.
          </p>
          <h3 className="font-body font-bold text-dark text-xl">El casco antiguo y el núcleo urbano</h3>
          <p>
            Alrededor de la Rambla y la plaza Vella quedan casas entre medianeras con muros gruesos, vigas de madera y patio trasero. Aquí manda la estructura: antes de hablar de acabados revisamos forjados, cubierta y humedad en planta baja, y decidimos qué elementos originales vale la pena conservar. Suelen ser obras de <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline">reforma integral</Link>. En las calles comerciales del centro, además, acondicionamos tiendas, despachos y consultas, como contamos en <Link href="/servicios/reformas-locales" className="text-accent font-semibold underline">reformas de locales</Link>.
          </p>
          <h3 className="font-body font-bold text-dark text-xl">Urbanizaciones y Sant Vicenç de Calders</h3>
          <p>
            En El Tancat, Mas Borràs, Les Madrigueres o la zona de Sant Vicenç de Calders hay viviendas unifamiliares y adosadas de los ochenta y noventa. Piden cocinas abiertas al jardín, baños nuevos, aislamiento de cubierta y climatización más eficiente. Es donde más se nota la mejora energética, y conviene plantear la <Link href="/servicios/reformas-cocinas" className="text-accent font-semibold underline">reforma de la cocina</Link> junto con el resto si se va a tocar la instalación.
          </p>
          <h3 className="font-body font-bold text-dark text-xl">Más allá del municipio</h3>
          <p>
            Trabajamos también en los pueblos de alrededor. En <Link href="/zonas/reformas-arboc" className="text-accent font-semibold underline">L&apos;Arboç</Link> y <Link href="/zonas/reformas-banyeres-penedes" className="text-accent font-semibold underline">Banyeres del Penedès</Link> predominan las casas de pueblo y las viviendas unifamiliares de interior; en <Link href="/zonas/reformas-cunit" className="text-accent font-semibold underline">Cunit</Link> y <Link href="/zonas/reformas-roda-de-bera" className="text-accent font-semibold underline">Roda de Berà</Link>, los apartamentos de costa y las urbanizaciones; y atendemos también <Link href="/zonas/reformas-calafell" className="text-accent font-semibold underline">Calafell</Link> y municipios cercanos como Albinyana, Bellvei o Santa Oliva.
          </p>
          <p>
            Si estás empezando a pensar en una obra, puede ayudarte nuestro artículo sobre <Link href="/blog/humedad-condensacion-pisos-playa-invierno" className="text-accent font-semibold underline">humedad y condensación en pisos de playa</Link> o la guía de <Link href="/blog/cuanto-cuesta-reformar-piso-vendrell" className="text-accent font-semibold underline">precios orientativos de reforma</Link>.
          </p>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="bg-accent py-10 px-5">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <AnimatedCounter end={120} prefix="+" label="Obras entregadas" />
            <AnimatedCounter end={15} prefix="+" label="Años en el Baix Penedès" />
            <AnimatedCounter end={5} prefix="+" label="Municipios cubiertos" />
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="bg-beige pt-20 px-5 pb-24">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-14">
          <div className="text-center max-w-[1100px]">
            <p className="font-body font-bold text-sm uppercase text-accent mb-4 tracking-[0.15em]">Cómo organizamos tu obra</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] lg:text-[64px] text-dark mb-5 leading-[1.05]">
              Así avanza una reforma con nosotros
            </h2>
            <p className="text-subtitle text-base font-medium">Cuatro etapas, siempre en el mismo orden, para que sepas en todo momento qué se está haciendo y qué viene después.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {processSteps.map((step, i) => (
              <ProcessCard key={step.title} step={i + 1} {...step} />
            ))}
          </div>
          <SectionDivider />
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <TickerBand
        items={["presupuesto por partidas", "permisos tramitados", "impermeabilización", "ventanas eficientes", "elementos originales", "limpieza final"]}
        bgColor="bg-accent"
        textColor="text-white"
        direction="right"
        size="small"
      />

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-beige py-12 md:py-16 px-5">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-black/10">
            <div className="flex flex-col gap-3">
              <p className="font-body font-bold text-sm uppercase text-accent tracking-wide">Opiniones</p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[40px] lg:text-[56px] text-dark leading-[1.1] tracking-[0.01em]">
                Opiniones de clientes en El Vendrell
              </h2>
              <p className="font-body text-subtitle text-base md:text-lg max-w-[560px]">
                Algunos comentarios de personas para las que hemos trabajado en el municipio.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-subtitle">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#D89564">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="font-body">Trato cercano · Plazos firmes</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ ZONES ============ */}
      <section className="bg-beige-warm pt-10 md:pt-12 pb-16 md:pb-20 px-5">
        <SectionDivider />
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="font-body font-bold text-sm uppercase text-accent mb-4 tracking-wide">Dónde trabajamos</p>
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05] mb-4">
            Pueblos vecinos en los que también trabajamos
          </h2>
          <p className="font-body text-subtitle text-base md:text-lg max-w-[600px] mx-auto mb-8">
            Además de todos los núcleos del Vendrell, atendemos los municipios de alrededor, de costa y de interior.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Calafell", slug: "reformas-calafell" },
              { name: "Cunit", slug: "reformas-cunit" },
              { name: "L'Arboç", slug: "reformas-arboc" },
              { name: "Roda de Berà", slug: "reformas-roda-de-bera" },
              { name: "Banyeres del Penedès", slug: "reformas-banyeres-penedes" },
            ].map((zone) => (
              <Link
                key={zone.slug}
                href={`/zonas/${zone.slug}`}
                className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full font-body font-semibold text-dark text-sm border border-dark/10 hover:border-accent hover:text-accent transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Reformas en {zone.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING / GALLERY ============ */}
      <section className="bg-dark py-20 md:py-28 overflow-hidden">
        <div className="px-5 mb-12">
          <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Algunas obras recientes</p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[56px] lg:text-[72px] text-white leading-[1.05]">
                Reformas realizadas en El Vendrell
              </h2>
              <p className="font-body text-white/55 text-base md:text-lg max-w-[480px] mt-3">
                Algunas imágenes de cocinas, baños y estancias que hemos renovado.
              </p>
            </div>
            <p className="font-body text-white/40 text-sm uppercase tracking-wider">Desliza &rarr;</p>
          </div>
        </div>

        <div className="flex gap-5 px-5 overflow-x-auto pb-8" style={{ scrollbarWidth: "none" }}>
          {galleryImages.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[320px] md:w-[450px] group">
              <div className={`relative rounded-[20px] overflow-hidden ${i % 2 === 0 ? "h-[420px] md:h-[560px]" : "h-[340px] md:h-[470px]"}`}>
                <Image src={img.src} alt={img.alt} title={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 320px, 450px" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-body text-white font-semibold text-sm">{img.caption}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex-shrink-0 w-[320px] md:w-[350px] bg-accent rounded-[20px] flex flex-col items-center justify-center p-10 text-center gap-6">
            <h3 className="font-display font-extrabold text-3xl md:text-4xl text-white">Tu obra aquí</h3>
            <p className="font-body text-white/85 text-sm">¿Quieres ver qué podríamos hacer en tu casa? Empecemos por una visita.</p>
            <Link href="/contacto" className="bg-dark text-white font-body font-bold px-6 py-3 rounded-full text-sm hover:bg-dark-card transition-colors">
              Hablemos &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-beige py-20 md:py-24 px-5">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Dudas frecuentes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[56px] text-dark leading-[1.05] mb-4">
              Dudas habituales antes de reformar en El Vendrell
            </h2>
            <p className="font-body text-subtitle text-base max-w-[600px] mx-auto">
              Si tu pregunta no está aquí, llama al 877 278 163 o escríbenos por WhatsApp.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white border border-dark/5 rounded-[14px] p-6 group">
                <summary className="font-body font-semibold text-dark text-base md:text-lg cursor-pointer list-none flex justify-between items-center gap-4">
                  {faq.q}
                  <svg className="w-5 h-5 text-accent transition-transform group-open:rotate-180 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="font-body text-subtitle text-sm md:text-base leading-relaxed mt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="bg-beige px-5 pb-12">
        <div className="mx-auto max-w-[1400px] rounded-[10px] overflow-hidden relative">
          <Image
            src="/images/demolicion-reforma-obra-vendrell.webp"
            alt="Obra de reforma en marcha en El Vendrell"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="relative z-10 px-4 sm:px-6 md:px-8 py-12 md:py-20">
            <div className="max-w-[684px] bg-accent rounded-[10px] px-5 sm:px-8 py-10 sm:py-12 flex flex-col gap-8 md:gap-10">
              <div className="flex flex-col gap-4">
                <p className="font-body font-bold text-lg uppercase text-white">
                  Valoración sin coste
                </p>
                <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[56px] text-white leading-[1.1]">
                  Solicita presupuesto para tu reforma
                </h2>
                <p className="text-white/90 text-[17px] leading-relaxed">
                  Cuéntanos qué vivienda tienes y qué quieres cambiar. Te llamamos, quedamos para verla y te dejamos un presupuesto por escrito, separado por partidas.
                </p>
                <div className="flex flex-col gap-2 text-beige text-sm mt-2">
                  <div className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Valoración detallada y transparente</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                    <span>Equipo propio coordinado</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Acabados cuidados y trato cercano</span>
                  </div>
                </div>
              </div>

              <CTAForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
