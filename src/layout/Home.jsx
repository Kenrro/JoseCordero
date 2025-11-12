import { Offer } from "../components/cards/Offer";
import "./main.css"
import { CallToAction } from "../components/menus/CallToAction";
import { ContactForm } from "../components/form/ContactForm";
import { offers } from "../data/Offers";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { Helmet } from "react-helmet-async";

export const Home = () => {

    
    return(
        <>
        <Helmet>
            <title>Fotomatch - Fotografía para tu app de citas</title>
            <meta
            name="description"
            content="Sesiones de fotos profesionales para Tinder, Bumble, Badoo y otras redes sociales. Captura tu esencia y muestra tu mejor versión."
            />
        </Helmet>
            <main className="main home">
                <Hero/>

                <Portfolio></Portfolio>
                <section className="offers">
                    <header className="offers__header">
                        <h2>Haz que cada foto cuente</h2>
                        <p>Ya sea para Tinder, Badoo, Bumble o cualquier otra red social, cada imagen cuenta y habla de ti. Nuestras sesiones están diseñadas para capturar tu esencia, resaltar tu personalidad y ayudarte a mostrar tu mejor cara. Elige la opción que se adapte a ti y déjanos crear fotografías que realmente te representen.</p>
                    </header>
                    <main className="offers__content">
                        {
                            offers.map((offer, index) => (
                                <Offer
                                key={index}
                                title={offer.title}
                                features={offer.features}
                                price={offer.price}/>
                            ))
                        }
                    </main>
                    <footer className="offers__footer">
                        <p>No importa la sesión que elijas, nuestro objetivo es que cada imagen refleje tu esencia y te haga sentir seguro y auténtico. Con nuestra experiencia y dedicación, transformarás tus fotografías en herramientas que te ayudarán a conectar, destacar y mostrar tu mejor versión al mundo. ¡Es tu momento de brillar frente a la cámara y dejar una impresión inolvidable!</p>
                    </footer>
                </section>
                        

                <ContactForm></ContactForm>
            </main>
        </>
    )
}