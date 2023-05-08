'use client'

import styles from './Header.module.css'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {

    const [showNav, setShowNav] = useState(false)

    const toggleShowNav = () => {
        setShowNav(!showNav)
    }

    const pathname = usePathname()

    return (
        <header className={styles.header}>
                <div className={styles.header__content}>
                <button className={styles.btn} onClick={toggleShowNav}>
                    { showNav
                        ?   <img src="/icons/close_icon.svg"></img>
                        :   <img src="/icons/burger_menu.svg"></img>
                    }
                </button>
                <h1 className={styles.title}>Tienda - Capula Mich.</h1>
                <nav className={`${styles.nav} ${!showNav ? styles.hidden_nav : ''}`}>
                    <ul className={styles.nav__ul}>
                        <li>
                            <Link href={"/"} onClick={toggleShowNav} className={`${styles.nav__links} ${pathname == "/" ? styles.nav__linksActive : ""}`}>Inicio</Link>
                        </li>
                        <li>
                            <Link href={"/rastreo"} onClick={toggleShowNav} className={`${styles.nav__links} ${pathname == "/rastreo" ? styles.nav__linksActive : ""}`}>Seguir Pedido</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.search__div}>
                    <input type={"text"} className={styles.search} placeholder="Buscar"/>
                </div>
                <img src='/icons/cart_icon.svg' alt='Icon of cart' className={styles.cart}/>
            </div>
        </header>
    )
}