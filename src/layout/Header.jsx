import "./header.css"
import { HeaderMenu } from "../components/menus/HeaderMenu"
import Logo from "../assets/Logo.jpg"
import { CallToAction } from "../components/menus/CallToAction"
import { Link, useLocation } from "react-router"
export const Header = () => {
    const location = useLocation().pathname
    console.log(location)
    return(
        <header className="header">
            <nav className="header_nav">
                <Link to={"/"}><i><img src={Logo} alt="Logo de la web" /></i></Link>
                <HeaderMenu></HeaderMenu>
            </nav>
            <div className="header_content">
                <div className="header_title">
                    <span>Mejorando tu perfil desde ya</span>
                    <h1>Fotografía para tu app de citas</h1>
                </div>
                <div className="header_actions">
                    {
                        location === "/" && <CallToAction></CallToAction>
                    }
                </div>
            </div>
        </header>
    )
}