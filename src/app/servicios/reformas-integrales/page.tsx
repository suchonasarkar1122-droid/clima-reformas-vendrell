import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas Integrales en El Vendrell",
  description:
    "Reforma integral en El Vendrell: pisos de Coma-ruga y Sant Salvador, casas del Centre y adosados. Un responsable de obra, permisos y coste por partidas.",
  alternates: { canonical: "/servicios/reformas-integrales" },
  openGraph: {
    title: "Reforma integral de viviendas en El Vendrell",
    description: "Vaciado, instalaciones nuevas y acabados en pisos, casas de pueblo y adosados del Baix Penedès, con un único responsable de obra.",
    url: "/servicios/reformas-integrales",
    images: ["/images/reforma-integral-vivienda-vendrell.webp"],
  },
};

export default function ReformasIntegralesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "/servicios" },
        { name: "Reformas Integrales", url: "/servicios/reformas-integrales" },
      ]} />
      <ServiceSchema
        name="Reformas Integrales en El Vendrell"
        description="Reforma integral de pisos de playa, casas de pueblo y adosados en El Vendrell y el Baix Penedès, con permisos municipales y coste cerrado por partidas."
        url="/servicios/reformas-integrales"
        image="/images/reforma-integral-vivienda-vendrell.webp"
      />

      <HeroService
        title="Vaciamos, renovamos y te devolvemos la casa entera"
        subtitle="Instalaciones, distribución, suelos, cocina, baños y carpintería en una sola obra. Para el piso de Coma-ruga que lleva cuarenta veranos igual o la casa del Centre que heredaste con todo por hacer."
        image="/images/reforma-integral-vivienda-vendrell.webp"
        imageAlt="Reforma integral llave en mano en El Vendrell"
        imageTitle="Reforma integral residencial en El Vendrell"
        h1Keyword="Reformas integrales en El Vendrell"
        badge="Servicio integral"
        showCTA
        trustItems={["Obras entregadas", "Experiencia en el Baix Penedès", "Coste pactado"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">
                Reforma integral residencial
              </p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Cuándo compensa reformarlo todo de una vez
              </h2>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Hay viviendas en las que arreglar por partes sale caro. Si el cuadro eléctrico todavía tiene fusibles de porcelana, las tuberías son de hierro galvanizado y el baño pierde agua hacia el vecino de abajo, cambiar solo la cocina es poner un parche encima de otro. En esos casos lo sensato es vaciar, rehacer todo lo que va por dentro de paredes y suelos y, después, decidir acabados con la tranquilidad de que la base está nueva.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                En El Vendrell lo vemos sobre todo en tres situaciones: apartamentos de veraneo de Coma-ruga y Sant Salvador que pasan a una nueva generación, casas entre medianeras del casco antiguo compradas para vivir todo el año, y adosados de Sant Vicenç de Calders o El Tancat que piden una actualización completa tras veinte o treinta años de uso familiar. Si lo tuyo es un piso y dudas entre ir por fases o hacerlo todo, en la página de <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline">reformas de pisos</Link> comparamos las dos opciones.
              </p>
              <p className="font-body font-semibold text-dark text-base">
                Firmas un presupuesto desglosado; lo que no aparece en él no se cobra sin hablarlo antes contigo.
              </p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/cocina-funcional-reforma-vendrell.webp"
                alt="Cocina abierta al salón en reforma integral en El Vendrell"
                title="Reforma integral con cocina abierta en El Vendrell"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Cada casa, su punto de partida</p>
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] text-dark leading-[1.05] mb-8">Lo que nos solemos encontrar al abrir paredes en El Vendrell</h2>
          <div className="space-y-5 font-body text-subtitle text-base leading-relaxed">
            <h3 className="font-body font-bold text-dark text-xl">Apartamentos de playa de los años 60 y 70</h3>
            <p>
              Los bloques de Coma-ruga, Sant Salvador y Els Masos se levantaron deprisa para el turismo de verano. Suelen tener terrazo o gres pequeño, cocinas cerradas de cuatro o cinco metros, un solo baño con bañera y ventanas correderas de aluminio sin rotura térmica. Al picar aparecen bajantes de fibrocemento en patinillos comunitarios, cableado sin toma de tierra en algunas habitaciones y forjados de viguetas que hay que revisar si la terraza ha filtrado durante años. Nada de esto es grave si se presupuesta desde el principio; lo caro es descubrirlo a mitad de obra.
            </p>
            <h3 className="font-body font-bold text-dark text-xl">Casas de pueblo del casco antiguo</h3>
            <p>
              Alrededor de la Rambla, la plaza Vella y las calles que bajan hacia la riera quedan casas estrechas de dos o tres alturas, con muros de carga gruesos, vigas de madera y, a menudo, un patio trasero. Aquí la reforma integral exige mirar la estructura antes que los acabados: estado de las cabezas de las vigas, humedad por capilaridad en planta baja, escalera que no cumple ninguna medida actual. Muchas veces conviene conservar el suelo hidráulico o dejar la viga vista, y eso condiciona por dónde pasan las nuevas instalaciones.
            </p>
            <h3 className="font-body font-bold text-dark text-xl">Adosados y chalets de urbanización</h3>
            <p>
              En El Tancat, Mas Borràs, Les Madrigueres o la zona de Sant Vicenç de Calders hay viviendas unifamiliares de los 80 y 90 con más metros pero problemas distintos: cubiertas que necesitan impermeabilización, calefacción de gasoil o eléctrica por acumuladores, cocinas cerradas que la familia quiere abrir al jardín. La obra suele incluir carpintería exterior, aislamiento y climatización, partidas que a veces encajan en las <Link href="/blog/ayudas-rehabilitacion-energetica-baix-penedes" className="text-accent font-semibold underline">líneas de ayuda a la rehabilitación energética</Link> si se plantean bien desde el proyecto.
            </p>
            <h3 className="font-body font-bold text-dark text-xl">Permisos en el Ajuntament del Vendrell</h3>
            <p>
              Una reforma interior sin tocar estructura ni fachada suele tramitarse como comunicación previa de obras. Cuando hay cambio de distribución importante, apertura de huecos, actuación sobre muros de carga o sobre la fachada, el Ajuntament pide proyecto firmado por técnico y licencia de obra mayor. Si el contenedor ocupa la calle, se solicita también el permiso de ocupación de vía pública. Preparamos la documentación y te avisamos de los plazos reales antes de fijar la fecha de inicio, porque en verano y en Navidad la tramitación se alarga.
            </p>
            <p>
              Trabajamos también fuera del término municipal: en las casas de piedra de <Link href="/zonas/reformas-arboc" className="text-accent font-semibold underline">L&apos;Arboç</Link> o en las viviendas unifamiliares de <Link href="/zonas/reformas-banyeres-penedes" className="text-accent font-semibold underline">Banyeres del Penedès</Link> la reforma integral sigue el mismo método, con los trámites de cada ayuntamiento.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Beneficios</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">
              Qué ganas haciéndolo en una sola obra
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Instalaciones nuevas de verdad", text: "Electricidad con circuitos separados y boletín, fontanería en multicapa y desagües con pendiente correcta. Lo que no se ve queda resuelto para décadas y no depende de remiendos antiguos." },
              { title: "Una distribución pensada para ti", text: "Con la casa vacía es el momento de mover el baño, abrir la cocina al comedor o ganar un vestidor. Hacerlo después, con suelos nuevos puestos, cuesta el doble y ensucia el triple." },
              { title: "Menos frío en invierno, menos calor en agosto", text: "Cambiar ventanas, aislar la fachada por dentro o el techo bajo cubierta y renovar la climatización tiene más sentido en la misma obra que por separado. Las facturas lo notan desde el primer invierno." },
              { title: "Acabados que soportan el ambiente marino", text: "En la primera línea el aire lleva sal y la humedad relativa es alta casi todo el año. Elegimos pinturas transpirables, herrajes de acero inoxidable y juntas que no ennegrecen para que el resultado no envejezca antes de tiempo." },
            ].map((b) => (
              <div key={b.title} className="flex gap-5 bg-white/5 border border-white/10 rounded-[16px] p-7">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-body font-bold text-lg text-white">{b.title}</h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Cómo lo hacemos</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Las cuatro fases de una reforma integral</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">Un orden de trabajo que evita repetir tareas y te permite saber en qué punto está la obra.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Diagnóstico en la vivienda", text: "Abrimos el cuadro eléctrico, miramos contadores y llaves de paso, buscamos manchas de humedad y medimos. Te explicamos qué está bien, qué hay que cambiar sí o sí y qué es opcional." },
              { step: "02", title: "Proyecto y partidas", text: "Plano de la nueva distribución, listado de materiales con referencias y un presupuesto separado por oficios. Así puedes subir o bajar acabados sabiendo cuánto mueve cada decisión." },
              { step: "03", title: "Obra por oficios", text: "Derribo, instalaciones empotradas, albañilería, revestimientos, carpintería y pintura, en ese orden. Si no vives aquí, te enviamos fotos de cada fase antes de cerrar paredes." },
              { step: "04", title: "Repaso y llaves", text: "Recorremos la casa contigo con una lista de comprobación, probamos enchufes, grifos y desagües, limpiamos a fondo y te entregamos boletines y fichas de los materiales instalados." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-[16px] p-7 flex flex-col gap-4 shadow-sm">
                <span className="font-display font-extrabold text-[48px] text-accent/20 leading-none">{s.step}</span>
                <h3 className="font-body font-bold text-lg text-dark">{s.title}</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Qué cubre el servicio</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Partidas incluidas en la reforma integral</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Derribo, contenedor y residuos a planta", "Red de agua y desagües renovados", "Cuadro y circuitos eléctricos con boletín", "Solados, alicatados y rodapiés", "Puertas, armarios y ventanas", "Pintura, limpieza y repaso final"].map((item) => (
              <div key={item} className="flex items-center gap-4 bg-white rounded-[12px] p-5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-body font-semibold text-dark text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Dudas sobre la reforma integral en El Vendrell</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Qué precio orientativo tiene una reforma integral?", a: "Manejamos tres niveles por metro cuadrado según acabados: esencial desde 450 €/m², media-alta desde 580 €/m² y premium desde 720 €/m². La cifra final depende mucho de lo que haya detrás de los azulejos, por eso solo la cerramos después de visitar la vivienda y con el desglose por partidas delante." },
              { q: "¿Cuántas semanas dura?", a: "Como referencia, un apartamento de 70 a 90 m² se mueve entre 8 y 12 semanas de obra, y una casa de pueblo de tres plantas entre 14 y 20. A eso hay que sumar el tiempo de permisos si la obra necesita licencia. El calendario por fases te lo damos por escrito antes de empezar." },
              { q: "¿Puedo seguir viviendo en casa mientras dura?", a: "En una reforma integral no es recomendable: hay días sin agua, sin luz y con mucho polvo. Si es tu segunda residencia no supone problema; si es tu vivienda habitual, buscamos el momento del año que mejor te encaje o te ayudamos a organizar la obra por plantas cuando la casa lo permite." },
              { q: "¿Qué entra en el precio y qué no?", a: "Entra la mano de obra, los materiales que acordamos en el listado, el contenedor, la gestión de residuos y la limpieza final. Si durante la obra decides subir de gama un suelo o añadir un armario, te pasamos el importe antes de pedirlo." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-[12px] shadow-sm overflow-hidden">
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-extrabold text-accent text-lg flex-shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-body font-bold text-dark text-base flex-1">{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <div className="px-6 pb-6 pl-[56px]">
                  <p className="font-body text-subtitle text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
          <p className="font-body text-subtitle/80 text-xs italic text-center mt-8 max-w-[640px] mx-auto">
            Importes orientativos por metro cuadrado. El precio definitivo se fija tras la visita, partida por partida.
          </p>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">¿Hablamos de tu reforma integral?</h2>
          <p className="font-body text-white/90 text-lg max-w-[520px]">Pasamos a ver la vivienda sin coste y te dejamos un presupuesto desglosado. Decides con calma.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors">
              Pedir valoración
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <a href="https://wa.me/34623760710" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-7 py-4 rounded-full font-body font-bold text-[15px] hover:bg-white/10 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
