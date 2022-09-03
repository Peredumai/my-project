import React, { useState } from 'react'
import styles from './Header.module.scss'

import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/img/header-logo.svg'
import ArrowDown from '../../assets/img/arrow-down.svg'
import Whatsapp from '../../assets/img/whatsapp.svg'
import Telegram from '../../assets/img/telegram.svg'
import Burger from '../../assets/img/burger.svg'
import BurgerClose from '../../assets/img/burger-close.svg'

import clsx from 'clsx'
import { Button } from '../Button'
interface HeaderProps {
    menuActive: boolean
    setMenuActive: React.Dispatch<React.SetStateAction<boolean>>
    subscriptionsMenuVisible: boolean
    subscriptionsToggleHandler: () => void
    langMenuVisible: boolean
    langToggleHandler: () => void
    overlayFunc: () => void
}

const Header: React.FC<HeaderProps> = ({
    menuActive,
    setMenuActive,
    overlayFunc,
    subscriptionsMenuVisible,
    subscriptionsToggleHandler,
    langMenuVisible,
    langToggleHandler,
}) => {
    const menuToggleHandler = () => {
        setMenuActive((p: boolean) => !p)
    }

    return (
        <header>
            <div
                onClick={overlayFunc}
                className={clsx(styles.overlay, {
                    [styles.overlay_active]: subscriptionsMenuVisible || langMenuVisible,
                })}
            />

            <div className={styles.container}>
                <div className={styles.header__content}>
                    <Link to='/' className={styles.header__logo}>
                        <img src={Logo} alt='logo' />
                        <span>DiscountsOnServices</span>
                    </Link>
                    <ul className={clsx(styles.menu)}>
                        <li onClick={subscriptionsToggleHandler}>
                            <span>Subscriptions</span>
                            <img
                                src={ArrowDown}
                                className={clsx({ [styles.active]: subscriptionsMenuVisible })}
                                alt=''
                            />

                            {subscriptionsMenuVisible && (
                                <div className={styles.subscriptionsMenu}>
                                    <ul>
                                        <li>Netflix</li>
                                        <li>YouTube Premium</li>
                                        <li>Spotify</li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <NavLink to='/faq'>FAQ</NavLink>
                        </li>
                        <li>Support</li>
                        <li>About</li>
                    </ul>
                    <div className={styles.header__buttons}>
                        <div className={styles.header__links}>
                            <img src={Whatsapp} alt='' />
                            <img src={Telegram} alt='' />
                        </div>
                        <div onClick={langToggleHandler} className={styles.header__lang}>
                            <span>EN</span>
                            <img
                                src={ArrowDown}
                                className={clsx({ [styles.active_lang]: langMenuVisible })}
                                alt=''
                            />
                            {langMenuVisible && (
                                <div className={styles.langMenu}>
                                    <ul>
                                        <li>English</li>
                                        <li>Ukraine</li>
                                        <li>Russian</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Button className={styles.header__login}>Log in</Button>
                    </div>
                    <div
                        className={clsx(styles.burger, menuActive && styles.active_burger)}
                        onClick={menuToggleHandler}
                    >
                        {!menuActive && <img src={Burger} alt='' />}
                        {menuActive && (
                            <div className={styles.close__burger__circle}>
                                <img src={BurgerClose} alt='' />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
