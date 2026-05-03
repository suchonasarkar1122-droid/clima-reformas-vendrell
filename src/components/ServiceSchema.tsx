interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image: string;
}

export default function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://reformasvendrell.es${url}`,
    image: `https://reformasvendrell.es${image}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://reformasvendrell.es/#business",
      name: "Clima Reformas Vendrell",
      telephone: "+34877278163",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Carrer d'Apel·les Fenosa, 16",
        addressLocality: "El Vendrell",
        addressRegion: "Tarragona",
        postalCode: "43700",
        addressCountry: "ES",
      },
    },
    areaServed: [
      { "@type": "City", name: "El Vendrell" },
      { "@type": "City", name: "Calafell" },
      { "@type": "City", name: "Cunit" },
      { "@type": "City", name: "L'Arboç" },
      { "@type": "City", name: "Roda de Berà" },
      { "@type": "City", name: "Banyeres del Penedès" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
