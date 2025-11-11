import "./header.css"
import { HeaderMenu } from "./menus/HeaderMenu"
import Logo from "../assets/Logo.jpg"
import { CallToAction } from "./menus/CallToAction"
export const Header = () => {

    return(
        <header className="header">
            <nav className="header_nav">
                <i><img src={Logo} alt="" /></i>
                <HeaderMenu></HeaderMenu>
            </nav>
            <div className="header_content">
                <div className="header_title">
                    <span>Mejorando tu perfil desde ya</span>
                    <h1>Fotografía para tu app de citas</h1>
                </div>
                <div className="header_actions">
                    <CallToAction></CallToAction>
                </div>
            </div>
        </header>
    )
}