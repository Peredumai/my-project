import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import clsx from 'clsx'
import styles from './Layout.module.scss'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'

const Layout = () => {
    const [menuActive, setMenuActive] = useState(false)

    const [size, setSize] = useState({
        width: 0,
        height: 0,
    })
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (size.width > 960 && menuActive) {
            setMenuActive(false)
        }
    }, [size.width, menuActive])
    return (
        <>
            <Header
                menuActive={menuActive}
                setMenuActive={setMenuActive}
            />
            {menuActive && <MobileMenu />}
            {!menuActive && (
                <div>
                    <main className={clsx(styles.container, styles.layout)}>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            )}
        </>
    )
}

export default Layout
