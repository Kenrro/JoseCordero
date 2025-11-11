import firstPhoto from "../assets/firstPhoto.jpg";

import secondPhoto from "../assets/secondPhotocopia.jpg"
export const Hero = () => {

    return(
        <section className="main__hero">
                        <header className="main__hero-header">
                            <h2>Fotografia para tu perfil personal.</h2>
                            <h3>Prepárate que sales.</h3>
                            <p>Fotografía profesional, te ofrecemos nuestro servicio para sacar lo mejor de ti y plasmarlo en una foto perfecta para tu app de citas.
                            tanto en exterior como en interior. nuestro propósito es represertar lo que eres y te gusta con imágenes que te representen, a la vez que muestren tu mejor perfil..
                            </p>
                            <span>Tinder Badoo, Bumble, meetic, Badoo</span>
                        </header>
                        <div className="main__hero-row">
                            <div className="main__hero-text">
                                
                                <h4>Quien eres y que te gusta</h4>
                                <p>Tu foto de perfil es tu carta de presentación; por eso, permítenos mostrarle al mundo quién eres.</p>
                            </div>
                            <div className="main__hero-img">
                                <img src={firstPhoto} alt="Imagen" />
                            </div>
                        </div>
                        <div className="main__hero-row">
                            <div className="main__hero-text">
                                <h4>Con la mejor cara posible</h4>
                                <p>Capturamos tu belleza exterior para que tu esencia interior se exprese en cada match.</p>
                            </div>
                            <div className="main__hero-img">
                                <img src={secondPhoto} alt="Imagen" />
                            </div>
                        </div>
                    </section>
    )
}