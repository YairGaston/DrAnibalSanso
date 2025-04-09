import {  CheckCircle } from "lucide-react"
import '../style.css'
import '..//globals.css'
import ReserveButton from "../components/ReserveButton"
import AccordionItem from "../components/AccordionItem"
import LocationCard from "../components/LocationCard"

export default function Home() {
  return (
    <>
  {/*     <Head>
        <link rel="canonical" href="https://www.dranibalsanso.com.ar" />
      </Head> */}
      <main className="main">
        {/* Hero Section */}
        <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Dr. Aníbal Sansó</h1>
            <h2 className="hero-subtitle">Urólogo y Sexólogo</h2>
            <p className="hero-description">
              Más de 15 años de experiencia brindando atención especializada en Tierra del Fuego
            </p>
            <ReserveButton/>
          </div>
          <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img 
              src="/DrAnibalSanso/img/avatar-anibal.png"
              alt="Dr. Aníbal Sansó - Urólogo y Sexólogo en Tierra del Fuego"
              loading="lazy"
              width="115%"
              height="115%"
              data-nimg="fill"
              className="hero-image"
              
            />
          </div>
        </div>
        </div>
          <div className="hero-clip"></div>
      </section>

        {/* Especialidades Section - Nueva sección */}
        <section className="section section-white">
          <div className="container">
            <h2 className="section-title">Especialidades Médicas</h2>
            <div className="specialties-container">
              <div className="specialty-card">
                <h3 className="specialty-title">Urología</h3>
                <p className="specialty-description">
                  Diagnóstico y tratamiento de enfermedades del sistema urinario masculino y femenino, incluyendo
                  vejiga, riñones, uretra y órganos reproductivos masculinos.
                </p>
                <ul className="specialty-list">
                  <li>
                    <CheckCircle size={16} className="specialty-icon" /> Problemas de próstata
                  </li>
                  <li>
                    <CheckCircle size={16} className="specialty-icon" /> Infecciones urinarias
                  </li>
                  <li>
                    <CheckCircle size={16} className="specialty-icon" /> Cálculos renales
                  </li>
                  <li>
                    <CheckCircle size={16} className="specialty-icon" /> Disfunción eréctil
                  </li>
                  <li>
                    <CheckCircle size={16} className="specialty-icon" /> Incontinencia urinaria
                  </li>
                </ul>
              </div>
              <div className="specialty-card">
                <h3 className="specialty-title">Sexología</h3>
                <p className="specialty-description">
                  Asesoramiento y tratamiento de problemas relacionados con la sexualidad humana, incluyendo aspectos
                  físicos, psicológicos y relacionales.
                </p>
                <ul className="specialty-list">
                  <li>
                    <CheckCircle size={16} className="specialty-icon" /> Disfunciones sexuales
                  </li>
                  <li>
                    <CheckCircle size={16} className="specialty-icon" /> Problemas de pareja
                  </li>
                  <li>
                    <CheckCircle size={16} className="specialty-icon" /> Educación sexual
                  </li>
                  <li>
                    <CheckCircle size={16} className="specialty-icon" /> Terapia sexual
                  </li>
                  <li>
                    <CheckCircle size={16} className="specialty-icon" /> Asesoramiento en salud sexual
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* When to Visit a Urologist Section */}
        <section className="section section-gray">
          <div className="container">
            <h2 className="section-title">¿Cuándo visitar a un Urólogo?</h2>
            <div className="section-grid">
              {urologistReasons.map((reason, index) => (
                <div key={index} className="card">
                  <div className="card-content">
                    <h3 className="card-title">{reason.title}</h3>
                    <p className="card-description">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to Visit a Sexologist Section */}
        <section className="section section-white">
          <div className="container">
            <h2 className="section-title">¿Cuándo visitar a un Sexólogo?</h2>
            <div className="section-grid">
              {sexologistReasons.map((reason, index) => (
                <div key={index} className="card">
                  <div className="card-content">
                    <h3 className="card-title">{reason.title}</h3>
                    <p className="card-description">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section section-gray">
          <div className="container">
            <h2 className="section-title">Preguntas Frecuentes</h2>
            <div style={{ maxWidth: "768px", margin: "0 auto" }}>
              <div className="accordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item">
                    <AccordionItem question={faq.question} answer={faq.answer} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section id="ubicaciones" className="section section-white">
          <div className="container">
            <h2 className="section-title">Consultorios y Horarios de Atención</h2>
            <p className="locations-intro">
              El Dr. Aníbal Sansó atiende en tres prestigiosos centros médicos de Tierra del Fuego, brindando atención
              especializada en urología y sexología. Reserve su turno contactando directamente con el centro médico de
              su preferencia.
            </p>
            <div className="section-grid">
              {locations.map((location, index) => (<LocationCard key={index} location={location} />
              ))}
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <h3 className="footer-title">Dr. Aníbal Sansó</h3>
            <p className="footer-description">Urólogo y Sexólogo - Tierra del Fuego, Argentina</p>
            <p className="footer-copyright">
              © {2025} Dr. Aníbal Sansó. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
  
}



// Data
const urologistReasons = [
  {
    title: "Problemas al orinar",
    description:
      "Dificultad, dolor o cambios en el patrón de micción pueden indicar problemas urológicos que requieren atención médica especializada del Dr. Sansó.",
  },
  {
    title: "Sangre en la orina",
    description:
      "La presencia de sangre en la orina (hematuria) siempre debe ser evaluada por un especialista como el Dr. Sansó, ya que puede indicar diversas condiciones urológicas.",
  },
  {
    title: "Dolor en la zona pélvica",
    description:
      "Dolor persistente en la región pélvica, testículos o durante las relaciones sexuales puede requerir evaluación urológica profesional en Río Grande o Ushuaia.",
  },
  {
    title: "Disfunción eréctil",
    description:
      "Dificultades para lograr o mantener una erección pueden ser síntomas de problemas urológicos o vasculares subyacentes que el Dr. Sansó puede diagnosticar y tratar.",
  },
  {
    title: "Infecciones urinarias recurrentes",
    description:
      "Si experimenta infecciones urinarias frecuentes, un urólogo especializado como el Dr. Sansó puede identificar la causa y proporcionar tratamiento adecuado en Tierra del Fuego.",
  },
  {
    title: "Chequeos preventivos",
    description:
      "Hombres mayores de 50 años (o 40 con factores de riesgo) deben realizar chequeos regulares con el Dr. Sansó para prevenir cáncer de próstata y otras condiciones urológicas.",
  },
]

const sexologistReasons = [
  {
    title: "Problemas de deseo sexual",
    description:
      "Cambios significativos en el deseo sexual que afectan su bienestar o relación de pareja pueden ser evaluados por el Dr. Sansó en sus consultorios de Río Grande y Ushuaia.",
  },
  {
    title: "Dificultades en las relaciones íntimas",
    description:
      "Problemas para disfrutar plenamente de las relaciones sexuales o dolor durante el acto sexual requieren la atención de un sexólogo experimentado como el Dr. Sansó.",
  },
  {
    title: "Eyaculación precoz o retardada",
    description:
      "Dificultades con el control de la eyaculación que afectan la satisfacción sexual pueden ser tratadas con terapias especializadas por el Dr. Sansó en Tierra del Fuego.",
  },
  {
    title: "Anorgasmia",
    description:
      "Dificultad o imposibilidad para alcanzar el orgasmo a pesar de la estimulación sexual adecuada es una condición que el Dr. Sansó puede ayudar a tratar en sus consultorios.",
  },
  {
    title: "Educación sexual",
    description:
      "Dudas sobre sexualidad, orientación sexual o prácticas sexuales saludables pueden ser resueltas con el asesoramiento profesional del Dr. Sansó en CEMEP, Hospital Naval o Clínica BioSur.",
  },
  {
    title: "Terapia de pareja",
    description:
      "Problemas de comunicación o incompatibilidad sexual en la relación de pareja pueden mejorar con la orientación especializada del Dr. Sansó en sus consultorios de Tierra del Fuego.",
  },
]

const faqs = [
  {
    question: "¿Qué debo esperar en mi primera consulta urológica con el Dr. Sansó?",
    answer:
      "En su primera consulta, el Dr. Sansó realizará una entrevista detallada sobre su historial médico y síntomas actuales. Dependiendo de su caso, puede incluir un examen físico y posiblemente solicitar análisis complementarios como estudios de sangre u orina. El objetivo es establecer un diagnóstico preciso y un plan de tratamiento personalizado.",
  },
  {
    question: "¿Es normal sentir vergüenza al consultar por problemas sexuales?",
    answer:
      "Sí, es completamente normal sentir cierta incomodidad al hablar de temas íntimos. El Dr. Sansó cuenta con amplia experiencia y profesionalismo para crear un ambiente de confianza donde pueda expresar sus preocupaciones sin sentirse juzgado. Recuerde que estos problemas son comunes y tratables con la atención adecuada.",
  },
  {
    question: "¿Cuándo debo realizarme un chequeo de próstata con el Dr. Sansó?",
    answer:
      "Se recomienda que los hombres comiencen los chequeos regulares de próstata a partir de los 50 años. Sin embargo, si tiene antecedentes familiares de cáncer de próstata o pertenece a grupos de riesgo, debería comenzar a los 40-45 años. El Dr. Sansó puede realizar estos chequeos en cualquiera de sus tres consultorios en Tierra del Fuego.",
  },
  {
    question: "¿Las consultas con el Dr. Sansó son confidenciales?",
    answer:
      "Absolutamente. Toda la información compartida durante las consultas está protegida por el secreto profesional médico. Su privacidad y confidencialidad son prioridades para el Dr. Sansó en todos sus consultorios, tanto en Río Grande como en Ushuaia.",
  },
  {
    question: "¿Necesito derivación para consultar con el Dr. Sansó?",
    answer:
      "Depende de su cobertura médica. Algunas obras sociales requieren derivación de un médico clínico, mientras que otras permiten acceso directo al especialista. Le recomendamos consultar con su prestador de salud antes de agendar su cita en CEMEP, Hospital Naval o Clínica BioSur.",
  },
  {
    question: "¿El Dr. Sansó atiende urgencias urológicas?",
    answer:
      "Sí, el Dr. Sansó atiende urgencias urológicas en los centros médicos donde trabaja. Para casos urgentes, se recomienda contactar directamente con el centro médico más cercano a su ubicación para verificar la disponibilidad y el procedimiento a seguir.",
  },
]

const locations = [
  {
    name: "CEMEP",
    city: "Río Grande, Tierra del Fuego",
    address: "20 de Junio 815, Río Grande",
    phone: "2964 420050",
    schedule: "Lunes y Miércoles de 14:00 a 20:00 hs",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.316909955922!2d-67.71723010584645!3d-53.76604543045606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4b163b06d333e5%3A0xb416afa172655fbb!2sCl%C3%ADnica%20Cemep!5e0!3m2!1ses-419!2sar!4v1742827378580!5m2!1ses-419!2sar",
  },
  {
    name: "Hospital Naval",
    city: "Ushuaia, Tierra del Fuego",
    address: "Yaganes 299, Ushuaia",
    phone: "2901 528802",
    schedule: "Martes y Jueves de 9:00 a 13:00 hs",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2299.694497147685!2d-68.30183042256665!3d-54.802912280744145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4c22de7dfb0fd1%3A0x1d2fcc092443e3e3!2sHospital%20Naval%20Ushuaia!5e0!3m2!1ses-419!2sar!4v1742827539501!5m2!1ses-419!2sar",
  },
  {
    name: "Clínica BioSur",
    city: "Ushuaia, Tierra del Fuego",
    address: "Hipólito Irigoyen 1792, Ushuaia",
    phone: "2901 411898",
    schedule: "Viernes de 15:00 a 20:00 hs",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483.1366616443524!2d-68.34556317703935!3d-54.829202609547046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4c237a676105a9%3A0xa906db9f057a0290!2sHip%C3%B3lito%20Yrigoyen%201792%2C%20V9410CBN%20Ushuaia%2C%20Tierra%20del%20Fuego!5e0!3m2!1ses-419!2sar!4v1742827635249!5m2!1ses-419!2sar",
  },
]

