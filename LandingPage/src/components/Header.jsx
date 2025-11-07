import "./header.css"
import { HeaderMenu } from "./menus/HeaderMenu"
export const Header = () => {

    return(
        <header className="header">
            <div className="header_content">
                <div className="header_title">
                    <span>Mejorando tu perfil desde ya</span>
                    <h1>Fotografía para tu app de citas</h1>
                </div>
                <div className="header_actions">
                    <button className="header_btn">Contacta</button>
                </div>
            </div>
            <nav className="header_nav">
                <HeaderMenu></HeaderMenu>
            </nav>
        </header>
    )
}