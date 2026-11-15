import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Pisos en El Vendrell",
  description:
    "Reforma de pisos en El Vendrell, Coma-ruga y Sant Salvador: instalaciones, distribución, ventanas y acabados, completa o por estancias. Coste por partidas.",
  alternates: { canonical: "/servicios/reformas-pisos" },
  openGraph: {
    title: "Reforma de pisos en El Vendrell",
    description: "Pisos de playa de los años 60 a 80 y viviendas del centro: reforma completa o por fases, con comunidad y permisos resueltos.",
    url: "/servicios/reformas-pisos",
    images: ["/images/salon-luminoso-mediterraneo-vendrell.webp"],
  },
};

export default function ReformasPisosPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "/servicios" },
        { name: "Reformas de Pisos", url: "/servicios/reformas-pisos" },
      ]} />
      <ServiceSchema
        name="Reformas de Pisos en El Vendrell"
        description="Reforma completa o por estancias de pisos en El Vendrell, Coma-ruga y Sant Salvador: instalaciones, distribución, carpintería y acabados."
        url="/servicios/reformas-pisos"
        image="/images/salon-luminoso-mediterraneo-vendrell.webp"
      />
      <HeroService title="Tu piso de siempre, preparado para los próximos treinta años" subtitle="Apartamentos de playa, pisos del centro y viviendas que se alquilan por temporada. Renovamos lo que no se ve y lo que sí, todo de una vez o por etapas." image="/images/salon-luminoso-mediterraneo-vendrell.webp" imageAlt="Salón luminoso de piso reformado en El Vendrell" imageTitle="Reforma de pisos en El Vendrell - Clima Reformas Vendrell" h1Keyword="Reformas de pisos en El Vendrell" badge="Pisos costeros" showCTA trustItems={["Reforma parcial o completa", "Equipo propio", "Coste pactado"]} tall />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Pisos del municipio</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] text-dark leading-[1.05]">
                Cómo son los pisos que reformamos en El Vendrell
              </h2>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                En la costa del municipio predominan los bloques de apartamentos construidos entre finales de los sesenta y los ochenta, cuando Coma-ruga y Sant Salvador se llenaron de familias de Barcelona, Lleida o Zaragoza que buscaban su piso de verano. En el núcleo urbano, en cambio, hay más edificios de vivienda habitual de varias épocas, desde fincas pequeñas sin ascensor hasta promociones de los noventa cerca de la estación y de las rondas.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Los primeros comparten un esquema muy reconocible: pasillo, cocina independiente junto a una galería, dormitorios justos y un baño con bañera. Los segundos suelen estar mejor distribuidos, pero con instalaciones igual de cansadas. En ambos casos lo que más pesa en el presupuesto no es el suelo que elijas, sino el estado de la electricidad, las tuberías, las ventanas y el aislamiento acústico con los vecinos.
              </p>
              <p className="font-body font-semibold text-dark text-base">Primero lo que garantiza que el piso funcione; después, lo que lo hace bonito.</p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image src="/images/piso-reformado-completo-vendrell.webp" alt="Piso reformado con cocina y pasillo amplio en El Vendrell" title="Reforma completa de piso en El Vendrell" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">¿Todo o por partes?</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Dos maneras de reformar un piso</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">La elección depende del estado de las instalaciones, de tu calendario y de cómo quieras repartir la inversión.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-[20px] p-8 flex flex-col gap-4 shadow-sm">
              <span className="font-body text-accent text-xs uppercase tracking-[0.2em] font-bold">Opción A</span>
              <h3 className="font-display font-extrabold text-2xl text-dark leading-tight">Reforma completa</h3>
              <p className="font-body text-subtitle text-sm leading-relaxed">
                Se vacía el piso y se rehace por dentro: instalaciones, tabiquería si conviene, suelos, cocina, baños, puertas, ventanas y pintura. Es lo razonable cuando la electricidad y el agua tienen décadas, cuando acabas de comprar un piso para vivir muchos años o cuando heredas el apartamento familiar de la playa y quieres empezar de cero. Tiene más detalle en nuestra página de <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline">reformas integrales</Link>.
              </p>
              <ul className="flex flex-col gap-2 mt-2">
                {[
                  "Cuadro y circuitos eléctricos nuevos con boletín",
                  "Agua y desagües sustituidos en todo el piso",
                  "Ventanas nuevas con rotura de puente térmico",
                  "Redistribución de tabiques que no sean de carga",
                  "Presupuesto separado por oficios y un responsable",
                ].map((it) => (
                  <li key={it} className="flex gap-3 items-start">
                    <svg className="mt-1 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2.5"><path d="M5 13l4 4L19 7" /></svg>
                    <span className="font-body text-subtitle text-sm leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-[20px] p-8 flex flex-col gap-4 shadow-sm">
              <span className="font-body text-accent text-xs uppercase tracking-[0.2em] font-bold">Opción B</span>
              <h3 className="font-display font-extrabold text-2xl text-dark leading-tight">Reforma por estancias</h3>
              <p className="font-body text-subtitle text-sm leading-relaxed">
                Se actúa solo donde hace falta: el baño este año, la cocina el siguiente, suelos y pintura cuando toque. Encaja si las instalaciones generales están en buen estado, si necesitas seguir viviendo en el piso o si preparas un apartamento para alquilar de temporada sin parar más de un mes. Lo único que pedimos es planificar el conjunto desde el principio para no deshacer trabajo hecho.
              </p>
              <ul className="flex flex-col gap-2 mt-2">
                {[
                  "Cocina, baño o suelos como obras independientes",
                  "Pintura general y puertas interiores nuevas",
                  "Cambio de ventanas sin tocar el resto",
                  "Obras cortas, de 2 a 5 semanas según alcance",
                  "Inversión repartida en el tiempo",
                ].map((it) => (
                  <li key={it} className="flex gap-3 items-start">
                    <svg className="mt-1 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D89564" strokeWidth="2.5"><path d="M5 13l4 4L19 7" /></svg>
                    <span className="font-body text-subtitle text-sm leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-[860px] mx-auto mt-14 space-y-5 font-body text-subtitle text-base leading-relaxed">
            <h3 className="font-body font-bold text-dark text-xl">Reformar con vecinos: la comunidad también cuenta</h3>
            <p>
              Casi todos los pisos están en edificios con comunidad de propietarios, y eso marca la obra tanto como el propio piso. Antes de empezar avisamos a la administración de la finca, colgamos el aviso en el portal con fechas y horario, protegemos ascensor y escalera y acordamos dónde se coloca el contenedor. Si el reglamento de la comunidad limita las obras en julio y agosto, algo habitual en primera línea, lo tenemos en cuenta al fijar el calendario.
            </p>
            <p>
              Hay partidas que no dependen solo de ti: las bajantes generales, la fachada, la barandilla de la terraza o el patio de luces son elementos comunes. Cuando vemos un problema ahí, te ayudamos a explicarlo a la comunidad con fotos y una valoración, para que se pueda resolver a la vez y no después.
            </p>
            <h3 className="font-body font-bold text-dark text-xl">El invierno, buena época para reformar el piso de la playa</h3>
            <p>
              Para quien veranea en Coma-ruga o Sant Salvador, reformar entre octubre y abril tiene lógica: el piso no se usa, la comunidad está más tranquila y hay margen para tenerlo listo antes de Semana Santa. Es también cuando más se notan las humedades de condensación en los pisos cerrados, un tema que tratamos en la guía sobre <Link href="/blog/humedad-condensacion-pisos-playa-invierno" className="text-accent font-semibold underline">humedad en pisos de playa en invierno</Link>. Si quieres hacerte una idea de importes antes de llamarnos, revisa el artículo sobre <Link href="/blog/cuanto-cuesta-reformar-piso-vendrell" className="text-accent font-semibold underline">cuánto cuesta reformar un piso en El Vendrell</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Estancia por estancia</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">Qué hacemos en cada parte del piso</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Salón y comedor", text: "Es donde se nota el cambio en cuanto entras: suelo continuo de piezas grandes, ventanas que cierran bien hacia la terraza, puntos de luz repartidos y, si la estructura lo permite, conexión directa con la cocina." },
              { title: "Cocina", text: "Nuevas tomas de agua y electricidad, muebles resistentes a la humedad y encimera que no pide mantenimiento. Si se abre al comedor, revisamos qué permiso corresponde antes de tirar nada." },
              { title: "Baños", text: "La bañera se sustituye casi siempre por ducha, con impermeabilización bajo el revestimiento y extractor en los baños interiores. Todo el detalle está en la página de reformas de baños." },
              { title: "Dormitorios", text: "Armarios empotrados aprovechando huecos, enchufes donde realmente se usan, puertas nuevas y, en tabiques compartidos con el vecino, un trasdosado con aislante para ganar silencio." },
              { title: "Pasillo y recibidor", text: "El pasillo largo y oscuro de los pisos antiguos mejora mucho con luz indirecta, un falso techo parcial para esconder instalaciones y un color que no sea el mismo blanco de toda la casa." },
              { title: "Terraza y galería", text: "Revisión de la impermeabilización, pavimento antideslizante apto para exterior, iluminación estanca y desagüe limpio. En la galería, tendedero y lavadora ordenados y bien ventilados." },
            ].map((b) => (
              <div key={b.title} className="bg-white/5 border border-white/10 rounded-[16px] p-7 flex flex-col gap-3">
                <h3 className="font-body font-bold text-white text-lg">{b.title}</h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Cómo trabajamos</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">De la primera visita a la entrega de llaves</h2>
            <p className="font-body text-subtitle text-base md:text-lg max-w-[560px] mx-auto mt-4">Un método sencillo para que sepas siempre qué viene después.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Recorrido técnico", text: "Visitamos el piso contigo, abrimos registros, miramos el cuadro, la presión del agua y el estado de las ventanas, y tomamos nota de lo que te gustaría cambiar." },
              { step: "02", title: "Propuesta por escrito", text: "Recibes un presupuesto partida a partida, con materiales concretos, calendario y forma de pago. Si dudas entre dos niveles de acabado, los presentamos uno al lado del otro." },
              { step: "03", title: "Ejecución ordenada", text: "Derribo, instalaciones, albañilería, suelos y revestimientos, carpintería y pintura. Si no estás en El Vendrell, te mandamos fotos al cerrar cada fase." },
              { step: "04", title: "Revisión conjunta", text: "Repasamos el piso juntos estancia por estancia, corregimos cualquier detalle, hacemos la limpieza final y te entregamos certificados y fichas de materiales." },
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

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-dark leading-[1.05]">Preguntas sobre reformar un piso en El Vendrell</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Qué cuesta, de forma orientativa, reformar un piso?", a: "Por metro cuadrado: una actuación parcial (suelos, pintura, alguna estancia) desde 380 €/m²; una reforma media con cocina, baño, suelos y pintura desde 520 €/m²; y una reforma completa con instalaciones, redistribución y ventanas desde 640 €/m². El precio cerrado lo damos tras ver el piso y con todas las partidas separadas." },
              { q: "¿Qué pasa con los vecinos durante la obra?", a: "Avisamos a la administración de la finca, respetamos los horarios del reglamento interno, protegemos zonas comunes y limpiamos el portal y la escalera cada día. Si la comunidad tiene restricciones de obra en verano, organizamos el calendario para cumplirlas." },
              { q: "¿Qué permiso necesito del Ajuntament?", a: "Cambiar acabados se tramita como comunicación previa. Si se mueven tabiques o se redistribuyen cocina y baño, el Ajuntament puede requerir documentación técnica adicional, y si se toca estructura o fachada, licencia de obra mayor con proyecto. Lo valoramos en la visita y lo tramitamos nosotros." },
              { q: "Quiero alquilar el piso por temporadas, ¿qué me recomendáis?", a: "Materiales resistentes y fáciles de limpiar, cocina y baño robustos, buena ventilación y poca decoración frágil. Ten en cuenta que el alquiler turístico en Cataluña exige registro y que cada municipio tiene sus propias condiciones; conviene confirmarlo antes de invertir." },
              { q: "¿Cuánto dura la reforma de un piso de 80 m²?", a: "Una actuación parcial, de 3 a 5 semanas. Una reforma media con cocina, baño, suelos y pintura, de 7 a 10. Una reforma completa con instalaciones nuevas y cambios de distribución, de 12 a 16. Las fechas las dejamos por escrito antes de empezar." },
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
            Importes orientativos por metro cuadrado. Cada piso se presupuesta tras la visita, partida por partida.
          </p>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-white leading-[1.05]">¿Quedamos para ver tu piso?</h2>
          <p className="font-body text-white/90 text-lg max-w-[500px]">Nos acercamos a tu piso en el centro, en la playa o en el municipio vecino y te dejamos una propuesta detallada por escrito.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors">Pedir valoración<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
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
