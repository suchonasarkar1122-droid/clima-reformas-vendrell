"use client";

import { useState } from "react";

type Props = {
  formspreeId: string;
  origin: string;
  localities: string[];
  serviceTypes: string[];
};

export default function HeroFormPill({ formspreeId, origin, localities, serviceTypes }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-grey-light px-8 py-10 text-center">
        <div className="w-14 h-14 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-accent">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="font-display font-bold text-dark text-xl mb-1">¡Solicitud recibida!</p>
        <p className="text-grey font-body text-sm">Te contactaremos en menos de 24h con tu valoración.</p>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl md:rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col md:flex-row md:items-center gap-2 p-2 border border-grey-light"
      >
        <input type="hidden" name="_subject" value={`Nuevo presupuesto desde ${origin} (hero)`} />

        <div className="flex-1 px-5 py-3 md:border-r border-grey-light/60">
          <label className="block text-[10px] text-grey-text uppercase tracking-wider font-semibold mb-0.5">Nombre</label>
          <input
            name="name"
            required
            placeholder="Tu nombre"
            className="block w-full bg-transparent outline-none text-sm font-body text-dark placeholder:text-grey-text/60"
          />
        </div>

        <div className="flex-1 px-5 py-3 md:border-r border-grey-light/60">
          <label className="block text-[10px] text-grey-text uppercase tracking-wider font-semibold mb-0.5">Teléfono</label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="Tu teléfono"
            className="block w-full bg-transparent outline-none text-sm font-body text-dark placeholder:text-grey-text/60"
          />
        </div>

        <div className="flex-1 px-5 py-3 md:border-r border-grey-light/60">
          <label className="block text-[10px] text-grey-text uppercase tracking-wider font-semibold mb-0.5">Localidad</label>
          <select
            name="locality"
            required
            defaultValue=""
            className="block w-full bg-transparent outline-none text-sm font-body text-dark cursor-pointer"
          >
            <option value="" disabled>Selecciona</option>
            {localities.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>

        <div className="flex-1 px-5 py-3 md:border-r border-grey-light/60">
          <label className="block text-[10px] text-grey-text uppercase tracking-wider font-semibold mb-0.5">Reforma</label>
          <select
            name="serviceType"
            defaultValue=""
            className="block w-full bg-transparent outline-none text-sm font-body text-dark cursor-pointer"
          >
            <option value="" disabled>Tipo</option>
            {serviceTypes.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-accent text-white px-7 md:px-8 py-4 rounded-xl md:rounded-full font-display font-bold text-sm whitespace-nowrap hover:bg-accent-light transition-colors mt-2 md:mt-0 disabled:opacity-60 inline-flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Pide presupuesto
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </>
          )}
        </button>
      </form>

      {error && (
        <p className="text-center text-red-500 text-xs mt-3 font-body">Error al enviar. Inténtalo de nuevo o llámanos.</p>
      )}

      <p className="text-grey-text text-xs text-center mt-5 font-body">
        Sin compromiso · Respondemos en menos de 24h · Al solicitar aceptas nuestra <a href="/politica-privacidad" target="_blank" className="underline hover:text-grey">Política de Privacidad</a>
      </p>
    </>
  );
}
