import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'

import { ReactComponent as Logo } from '../../assets/img/footer-logo.svg';
import { ReactComponent as ArrowDown } from '../../assets/img/arrow-down.svg';

import { ReactComponent as Telegram } from '../../assets/img/telegram.svg';
import { ReactComponent as Whatsapp } from '../../assets/img/whatsapp.svg';
import clsx from 'clsx'

const Footer = () => {
    const [langMenuVisible, setLangMenuVisible] = useState(false)
    const langToggleHandler = () => {
        setLangMenuVisible((p) => !p)
    }
    const overlayFunc = () => {
        setLangMenuVisible(false)
    }
    return (
        <footer>
            <div
                onClick={overlayFunc}
                className={clsx(styles.overlay, {
                    [styles.overlay_active]: langMenuVisible,
                })}
            />
            <div className={styles.container}>
                <div className={styles.footer__wrapper}>
                    <div className={styles.footer__head}>
                        <div className={styles.footer__about}>
                            <Link to='/' className={styles.footer__logo}>
                                <Logo/>
                                <span>DiscountsOnServices</span>
                            </Link>
                            <p>It&apos;s simple, fast and economical</p>
                        </div>
                        <div className={styles.footer__subscriptions}>
                            <span className={styles.footer__title}>Subscriptions</span>
                            <ul>
                                <li>Netflix</li>
                                <li>YouTube Premium</li>
                                <li>Spotify</li>
                            </ul>
                        </div>
                        <div className={styles.footer__site__nav}>
                            <span className={styles.footer__title}>Site navigation</span>
                            <ul>
                                <li>About</li>
                                <li>FAQ</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        <div className={styles.footer__navs}>
                            <div className={styles.footer__links}>
                                <Whatsapp className={styles.whatsappIcon} height="40" width="40"/>
                                <Telegram className={styles.telegramIcon} height="40" width="40"/>
                            </div>
                            <div onClick={langToggleHandler} className={styles.footer__lang}>   
                                <span>EN</span>
                                <ArrowDown className={clsx(styles.arrowDown, { [styles.active_lang]: langMenuVisible })}/>
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
                        </div>  
                    </div>
                    <div className={styles.footer__bottom}>
                        <div>Privacy Policy</div>
                        <div>Copyright 2021 © All Rights Reserved</div>
                        <div>Developed by ....</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
