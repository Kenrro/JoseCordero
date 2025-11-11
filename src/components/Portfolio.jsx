import uno from "../assets/1.jpg";
import dos from "../assets/2.jpg";
import tres from "../assets/3.jpg";
import cuatro from "../assets/4.jpg";
import cinco from "../assets/5.jpg";
import seis from "../assets/6.jpg";
export const Portfolio = () => {

    return(
        <section className="portfolio">
            <header className="portfolio__header">
                <h2>Un vistazo de mi trabajo</h2>
                <p>José Cordero comenzó su pasión por la fotografía a mediados de los años ochenta y se formó también en arte dramático. Tras perfeccionar su técnica en los estudios madrileños ‘Daylight’ y colaborar con fotógrafos reconocidos como Paco Navarro, inició su carrera profesional en 1995. Ha trabajado con destacadas modelos españolas de los noventa y sus retratos de celebridades han aparecido en revistas como Elle, Rolling Stone y AR. Actualmente ofrece sus servicios desde la Costa del Sol, caracterizándose por su distintiva búsqueda de la luz.</p>
            </header>
            <main className="portfolio__content">
                <div className="portfolio__item"><img src={uno} alt="img" /></div>
                <div className="portfolio__item"><img src={dos} alt="img" /></div>
                <div className="portfolio__item"><img src={tres} alt="img" /></div>
                <div className="portfolio__item"><img src={cuatro} alt="img" /></div>
                <div className="portfolio__item"><img src={cinco} alt="img" /></div>
                <div className="portfolio__item"><img src={seis} alt="img" /></div>
            </main>
        </section>
    )
}