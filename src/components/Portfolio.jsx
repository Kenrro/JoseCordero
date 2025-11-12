import uno from "../assets/1.jpg";
import dos from "../assets/2.jpg";
import tres from "../assets/3.jpg";
import cuatro from "../assets/4.jpg";
import cinco from "../assets/5.jpg";
import seis from "../assets/6.jpg";

export const Portfolio = () => {
  const portfolioItems = [
    { src: uno, alt: "Retrato de modelo en exterior", caption: "Retrato en exteriores" },
    { src: dos, alt: "Sesión de fotografía urbana", caption: "Fotografía urbana" },
    { src: tres, alt: "Retrato de estudio con iluminación profesional", caption: "Retrato de estudio" },
    { src: cuatro, alt: "Fotografía de moda en exteriores", caption: "Moda en exteriores" },
    { src: cinco, alt: "Retrato artístico de modelo", caption: "Retrato artístico" },
    { src: seis, alt: "Sesión lifestyle en ambiente natural", caption: "Lifestyle en exterior" },
  ];

  return (
    <section className="portfolio">
      <header className="portfolio__header">
        <h2>Un vistazo de mi trabajo</h2>
        <p>
          José Cordero comenzó su pasión por la fotografía a mediados de los años ochenta y se formó también en arte dramático. Tras perfeccionar su técnica en los estudios madrileños ‘Daylight’ y colaborar con fotógrafos reconocidos como Paco Navarro, inició su carrera profesional en 1995. Ha trabajado con destacadas modelos españolas de los noventa y sus retratos de celebridades han aparecido en revistas como Elle, Rolling Stone y AR. Actualmente ofrece sus servicios desde la Costa del Sol, caracterizándose por su distintiva búsqueda de la luz.
        </p>
      </header>
      <div className="portfolio__content">
        {portfolioItems.map((item, index) => (
          <figure className="portfolio__item" key={index}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};