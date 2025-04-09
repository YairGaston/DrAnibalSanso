import { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'

interface LayoutProps {
  children: ReactNode
}


export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>Dr. Aníbal Sansó | Urólogo y Sexólogo en Tierra del Fuego | Río Grande y Ushuaia</title>
        <meta name="description" content="Atención urológica y sexológica especializada con el Dr. Aníbal Sansó en CEMEP Río Grande, Hospital Naval y Clínica BioSur de Ushuaia. Reserve su consulta." />
        <meta name="keywords" content="urólogo, sexólogo, Tierra del Fuego, Río Grande, Ushuaia, CEMEP, Hospital Naval, Clínica BioSur, salud masculina, problemas urológicos, disfunción eréctil, consulta urológica" />
        <meta property="og:title" content="Dr. Aníbal Sansó | Urólogo y Sexólogo en Tierra del Fuego" />
        <meta property="og:description" content="Atención especializada en urología y sexología en Río Grande y Ushuaia. Consulte por turnos." />
        <meta property="og:url" content="https://www.dranibalsanso.com.ar" />
        <meta property="og:site_name" content="Dr. Aníbal Sansó - Urólogo y Sexólogo" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.dranibalsanso.com.ar" />
      </Helmet>

      <main>
        {children}
      </main>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          "name": "Dr. Aníbal Sansó",
          "medicalSpecialty": ["Urología", "Sexología"],
          "image": "/images/avatar-anibal.png",
          "description": "Urólogo y Sexólogo con más de 15 años de experiencia en Tierra del Fuego, Argentina",
          "address": [
            {
              "@type": "PostalAddress",
              "addressLocality": "Río Grande",
              "addressRegion": "Tierra del Fuego",
              "addressCountry": "Argentina",
              "streetAddress": "20 de Junio 815"
            },
            {
              "@type": "PostalAddress",
              "addressLocality": "Ushuaia",
              "addressRegion": "Tierra del Fuego",
              "addressCountry": "Argentina",
              "streetAddress": "Yaganes 299"
            },
            {
              "@type": "PostalAddress",
              "addressLocality": "Ushuaia",
              "addressRegion": "Tierra del Fuego",
              "addressCountry": "Argentina",
              "streetAddress": "Hipólito Irigoyen 1792"
            }
          ],
          "workLocation": [
            {
              "@type": "MedicalClinic",
              "name": "CEMEP",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Río Grande",
                "addressRegion": "Tierra del Fuego",
                "addressCountry": "Argentina",
                "streetAddress": "20 de Junio 815"
              },
              "telephone": "2964 420050"
            },
            {
              "@type": "Hospital",
              "name": "Hospital Naval Ushuaia",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ushuaia",
                "addressRegion": "Tierra del Fuego",
                "addressCountry": "Argentina",
                "streetAddress": "Yaganes 299"
              },
              "telephone": "2901 528802"
            },
            {
              "@type": "MedicalClinic",
              "name": "Clínica BioSur",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ushuaia",
                "addressRegion": "Tierra del Fuego",
                "addressCountry": "Argentina",
                "streetAddress": "Hipólito Irigoyen 1792"
              },
              "telephone": "2901 411898"
            }
          ]
        })}
      </script>
    </>
  )
}
