import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import clsx from 'clsx'
import styles from './Layout.module.scss'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'

const Layout = () => {
    const [menuActive, setMenuActive] = useState(false)
    const [subscriptionsMenuVisible, setSubscriptionsMenuVisible] = useState(false)
    const [langMenuVisible, setLangMenuVisible] = useState(false)

    const subscriptionsToggleHandler = () => {
        setSubscriptionsMenuVisible((p) => !p)
    }

    const langToggleHandler = () => {
        setLangMenuVisible((p) => !p)
    }

    const overlayFunc = () => {
        setSubscriptionsMenuVisible(false)
        setLangMenuVisible(false)
    }
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
                langMenuVisible={langMenuVisible}
                langToggleHandler={langToggleHandler}
                overlayFunc={overlayFunc}
                setMenuActive={setMenuActive}
                subscriptionsToggleHandler={subscriptionsToggleHandler}
                subscriptionsMenuVisible={subscriptionsMenuVisible}
            />
            {menuActive && (
                <MobileMenu
                    overlayFunc={overlayFunc}
                    langMenuVisible={langMenuVisible}
                    langToggleHandler={langToggleHandler}
                />
            )}
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
