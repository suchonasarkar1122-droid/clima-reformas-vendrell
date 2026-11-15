import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Baños en El Vendrell",
  description:
    "Reforma de baños en El Vendrell: de bañera a ducha, impermeabilización bajo el alicatado y ventilación contra el moho en pisos de playa y casas del Centre.",
  alternates: { canonical: "/servicios/reformas-banos" },
  openGraph: {
    title: "Reforma de baños en El Vendrell",
    description: "Cambio de bañera por ducha, impermeabilización y ventilación para baños de pisos de costa y casas del Baix Penedès.",
    url: "/servicios/reformas-banos",
    images: ["/images/bano-natural-reformado-vendrell.webp"],
  },
};

export default function ReformasBanosPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "/servicios" },
        { name: "Reformas de Baños", url: "/servicios/reformas-banos" },
      ]} />
      <ServiceSchema
        name="Reformas de Baños en El Vendrell"
        description="Reforma de baños en pisos de costa, casas de pueblo y adosados de El Vendrell: cambio de bañera por ducha, impermeabilización y ventilación mecánica."
        url="/servicios/reformas-banos"
        image="/images/bano-natural-reformado-vendrell.webp"
      />
      <HeroService title="Un baño que no vuelva a coger moho ni a filtrar al vecino" subtitle="Quitamos la bañera que ya nadie usa, impermeabilizamos lo que queda oculto y elegimos acabados fáciles de limpiar. Pensado para pisos de playa, casas del Centre y adosados." image="/images/bano-natural-reformado-vendrell.webp" imageAlt="Baño moderno reformado en El Vendrell" imageTitle="Reforma de baños en El Vendrell - Clima Reformas Vendrell" h1Keyword="Reformas de baños en El Vendrell" badge="Baños actuales" showCTA trustItems={["Cambio bañera por ducha", "Impermeabilización de obra", "Acabados duraderos"]} tall />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Reforma de baños</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Lo importante de un baño está debajo del azulejo
              </h2>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Muchos baños de la zona tienen la misma historia: se alicataron en los setenta u ochenta, se cambió algún sanitario por el camino y nadie tocó lo que va por dentro. El resultado son juntas negras que vuelven a salir por mucho que se limpien, una mancha en el techo del vecino de abajo y un desagüe lento que huele cuando el piso pasa semanas cerrado. Cambiar solo las piezas visibles no arregla nada de eso.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Por eso en El Vendrell empezamos casi siempre desmontando hasta la obra. Revisamos el tramo de bajante al que acomete el baño, cambiamos tuberías viejas de hierro o plomo si las hay, colocamos una lámina impermeable en el suelo y en las paredes de la ducha, regularizamos las paredes y, entonces sí, alicatamos. Es un trabajo que no luce en la foto final, pero es el que hace que el baño siga sano dentro de muchos años.
              </p>
              <p className="font-body font-semibold text-dark text-base">La impermeabilización la hace nuestro propio equipo y la comprobamos con agua antes de cerrar.</p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image src="/images/bano-ducha-cristal-vendrell.webp" alt="Baño con ducha de cristal y madera reformado en El Vendrell" title="Reforma de baño con ducha de cristal en El Vendrell" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Capa por capa</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">El sistema que usamos contra el agua y la humedad</h2>
            <p className="font-body text-white/55 text-base md:text-lg max-w-[560px] mx-auto mt-4">Cuatro decisiones técnicas que marcan la diferencia en un baño cerca del mar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Lámina en suelo y paredes de ducha", text: "Una membrana continua bajo el revestimiento, con refuerzos en esquinas y en el desagüe. Si dentro de unos años una junta se abre, el agua no pasa al forjado ni a la habitación contigua." },
              { title: "Juntas que no absorben", text: "En la zona de ducha usamos material de rejuntado de alta resistencia en lugar del cemento de toda la vida, que se ennegrece y chupa agua. El cambio se nota al cabo de un par de inviernos." },
              { title: "Pendiente y sifón bien resueltos", text: "El plato o el suelo de la ducha llevan la caída justa hacia el sumidero y un sifón que mantiene el cierre de agua. En pisos que se quedan cerrados entre temporadas evita que suban olores de la bajante." },
              { title: "Extracción que se activa sola", text: "En los baños interiores sin ventana, tan frecuentes en bloques de playa y casas estrechas, colocamos un extractor con sensor de humedad que funciona después de la ducha y se apaga cuando el aire ya está seco." },
            ].map((b) => (
              <div key={b.title} className="flex gap-5 bg-white/5 border border-white/10 rounded-[16px] p-7">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>
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

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Tipos de baño</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Los encargos más habituales en el municipio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Bañera fuera, ducha a ras de suelo", text: "Es lo que más hacemos en los apartamentos de Coma-ruga y Sant Salvador. Retiramos la bañera, impermeabilizamos, colocamos un plato extraplano o un suelo continuo y una mampara fija. En unos 7 a 10 días laborables el baño vuelve a estar en uso." },
              { title: "Baño cómodo para personas mayores", text: "Sin escalón para entrar en la ducha, con asiento plegable, barras bien ancladas y grifo termostático. Muy pedido por familias del Centre que cuidan de padres o abuelos en casa." },
              { title: "Baño en suite en el dormitorio principal", text: "En chalets de El Tancat o Mas Borràs a veces se puede ganar un segundo baño a costa de un armario o reorganizando el dormitorio. Doble lavabo y ducha amplia son las peticiones más repetidas." },
              { title: "Aseo nuevo en un hueco aprovechado", text: "Bajo la escalera de una casa de pueblo o al final de un pasillo largo. Inodoro suspendido, lavamanos pequeño y buena extracción bastan para sumar comodidad sin perder metros." },
              { title: "Baño cálido de materiales naturales", text: "Tonos arena, microcemento, madera tratada para zonas húmedas y luz indirecta. Para quien usa el piso de la playa como refugio de fin de semana y quiere un baño que invite a quedarse." },
              { title: "Baño resistente para alquiler de temporada", text: "Piezas grandes con pocas juntas, grifería robusta, mampara fácil de limpiar y sanitarios suspendidos. Pensado para aguantar muchos huéspedes en verano con el mínimo mantenimiento." },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-[16px] p-7 flex flex-col gap-3 shadow-sm">
                <h3 className="font-body font-bold text-dark text-lg">{b.title}</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
          <div className="max-w-[860px] mx-auto mt-14 space-y-5 font-body text-subtitle text-base leading-relaxed">
            <h3 className="font-body font-bold text-dark text-xl">Baños de segundas residencias: el problema del piso cerrado</h3>
            <p>
              Un baño que se usa a diario se ventila solo. Uno que pasa el invierno con la puerta cerrada y la persiana bajada, no. En los pisos de veraneo del frente marítimo la humedad del aire se condensa en las paredes frías y el moho aparece en techos y silicona aunque nadie se haya duchado en meses. Lo explicamos con más detalle en la guía sobre <Link href="/blog/humedad-condensacion-pisos-playa-invierno" className="text-accent font-semibold underline">humedad y condensación en pisos de playa durante el invierno</Link>, con lo que puedes hacer tú y lo que conviene resolver en obra.
            </p>
            <p>
              Si el baño forma parte de una renovación mayor, la página de <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline">reformas de pisos</Link> explica cómo encadenamos baño, cocina y suelos para no hacer dos veces la misma obra. También reformamos baños en la costa cercana, por ejemplo en los apartamentos de <Link href="/zonas/reformas-cunit" className="text-accent font-semibold underline">Cunit</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Proceso</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Cómo trabajamos un baño, de principio a fin</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">Cuatro pasos y un calendario que conoces antes de empezar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Revisión previa", text: "Miramos de dónde viene la humedad si la hay, el estado de la bajante, la presión del agua y si el baño tiene ventilación natural. Con eso sabemos qué hay que incluir en el presupuesto." },
              { step: "02", title: "Elección de piezas", text: "Revestimiento, plato o suelo continuo, sanitarios, grifería y mampara. Puedes verlo en exposición con nosotros o decidir a partir de muestras y fichas." },
              { step: "03", title: "Obra gruesa", text: "Desmontaje, retirada de escombro, nuevas tomas de agua y desagüe, lámina impermeable y paredes listas para revestir. Es la fase más ruidosa y la más corta." },
              { step: "04", title: "Acabado y prueba", text: "Alicatado, montaje de sanitarios y mampara, prueba de estanqueidad, limpieza y entrega con las fichas de los productos instalados." },
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
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Dudas sobre reformar un baño en El Vendrell</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuánto puede costar reformar el baño?", a: "Trabajamos con tres tramos orientativos por metro cuadrado: funcional, con cambio de bañera por ducha y acabados sencillos, desde 520 €/m²; intermedio, con sanitarios suspendidos y piezas de gran formato, desde 680 €/m²; y alto, con piedra natural, suelo radiante o bañera exenta, desde 880 €/m². El presupuesto definitivo lo cerramos después de ver el baño." },
              { q: "¿Hay que pedir permiso al Ajuntament del Vendrell?", a: "Si se sustituyen revestimientos y sanitarios sin mover el baño de sitio, normalmente basta una comunicación previa, que preparamos nosotros. Si se cambia la posición del inodoro o la ducha y eso afecta a la red general del edificio, puede hacer falta documentación técnica. En casas del casco antiguo conviene consultarlo antes." },
              { q: "¿Cuántos días me quedo sin baño?", a: "Cambiar la bañera por una ducha nos lleva de 7 a 10 días laborables; una reforma completa de baño de tamaño medio, entre 12 y 18. Si la casa tiene un segundo baño, organizamos la obra para que siempre podáis usar uno." },
              { q: "¿Cómo evitáis que vuelva a salir moho?", a: "Combinando ventilación mecánica con sensor, juntas que no absorben agua en la zona de ducha y piezas grandes para reducir el número de juntas. En baños interiores sin ventana, que abundan en pisos compactos, es lo que más alarga la vida del acabado." },
              { q: "¿Qué pasa si después aparece una filtración?", a: "La impermeabilización la ejecuta personal de nuestro equipo y la probamos antes de alicatar. Respondemos dentro de los plazos de garantía que marca la ley; si surge algo, volvemos a revisarlo." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-[12px] shadow-sm overflow-hidden">
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-extrabold text-accent text-lg flex-shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-body font-bold text-dark text-base flex-1">{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <div className="px-6 pb-6 pl-[56px]"><p className="font-body text-subtitle text-sm leading-relaxed">{faq.a}</p></div>
              </details>
            ))}
          </div>
          <p className="font-body text-subtitle/80 text-xs italic text-center mt-8 max-w-[640px] mx-auto">
            Importes orientativos por metro cuadrado. Cada baño se presupuesta tras la visita, partida por partida.
          </p>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">¿Le damos una vuelta a tu baño?</h2>
          <p className="font-body text-white/90 text-lg max-w-[500px]">Pasamos a verlo sin coste, te contamos qué esconde y te dejamos una propuesta cerrada por escrito.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors">
              Pedir visita técnica
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
