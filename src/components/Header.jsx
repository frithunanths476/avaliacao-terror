import style2 from "./Header.module.css"

function Header(prop) {
    return (
        <header className={style2.size}>
            <img src={prop.img} />
            <p className={style2.titulo}>RIP CINE</p>
        </header>
    )
}

export default Header