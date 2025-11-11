import "./offer.css"
import CameraIcon  from "../icons/CameraIcon"
export const Offer = ({title, features, price}) => {

    return(
        <article className="offer">
            <header className="offer__header">
                <i><CameraIcon width={32} height={32} fill="#000" /></i>

                <h3>{title}</h3>
            </header>
            <main className="offer__main">
                <ul>
                    {
                        features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))
                    }
                </ul>
            </main>
            <footer className="offer__main">
                <strong>{price}</strong>
            </footer>
        </article>
    )
}