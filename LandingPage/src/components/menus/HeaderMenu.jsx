import "./headerMenu.css"
export const HeaderMenu = () => {

    return (
        <div className="menu-header">
            <ul>
                <ButtonMenu></ButtonMenu>
                <ButtonMenu></ButtonMenu>
                <ButtonMenu></ButtonMenu>
            </ul>
        </div>
    )
}

export const ButtonMenu = () => {

    return (
        <div className="menu_item">
            <button className="menu_button">botton</button>
        </div>
    )
}