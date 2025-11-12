import "./headerMenu.css"
export const HeaderMenu = () => {

    return (
        <div className="menu-header">
            <ul>
                <ButtonMenu></ButtonMenu>
            </ul>
        </div>
    )
}

export const ButtonMenu = () => {

    return (
        <div className="menu_item">
            <a target="_blank" href="https://jose-cordero.com"><button>Mi web</button></a>
        </div>
    )
}