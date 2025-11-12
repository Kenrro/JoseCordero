
import { Link } from "react-router";
import "./footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__brand">
          <h3>Fotomatch</h3>
          <p>Capturamos tu mejor versión. Fotografía profesional para destacar en tus redes y apps de citas.</p>
        </section>

        <section className="footer__links">
          <h4>Enlaces</h4>
          <ul>
            <li><Link to={"/term"}>Terminos y condiciones</Link></li>
            <li><Link to={"/Privacy"}>Política de Privacidad</Link></li>
            <li><Link to={"/legalnotice"}>Aviso Legal</Link></li>
            <li><Link to={"/"}>Home</Link></li>
          </ul>
        </section>

        <section className="footer__social">
          <h4>Síguenos</h4>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            {/* <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li> */}
          </ul>
        </section>
      </div>

      <div className="footer__bottom">
        <p>© {year} Fotomatch – José Cordero. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};