import React from 'react'
import styles from './MobileMenu.module.scss'
import clsx from 'clsx'
import { Button } from '../Button'

import ArrowDown from '../../assets/img/arrow-down.svg'
import Whatsapp from '../../assets/img/whatsapp.svg'
import Telegram from '../../assets/img/telegram.svg'
import MobileHome from '../../assets/img/mobile-home.svg'
import MobileAbout from '../../assets/img/mobile-about.svg'
import MobileFaq from '../../assets/img/mobile-faq.svg'
import MobileSupport from '../../assets/img/mobile-support.svg'

interface MobileMenuProps {
    langMenuVisible: boolean
    overlayFunc: () => void
    langToggleHandler: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ overlayFunc, langMenuVisible, langToggleHandler }) => {
    return (
        <>
            <div
                onClick={overlayFunc}
                className={clsx(styles.overlay, {
                    [styles.overlay_active]: langMenuVisible,
                })}
            />
            <div className={styles.mobile__menu__wrapper}>
                <div className={clsx(styles.container, styles.mobile__menu)}>
                    <div className={styles.mobile__navs}>
                        <div className={styles.mobile__block}>
                            <ul>
                                <li>
                                    <img src={MobileHome} alt='img' />
                                    <span>Home</span>
                                </li>
                                <li>
                                    <img src={MobileAbout} alt='img' />
                                    <span>About</span>
                                </li>
                                <li>
                                    <img src={MobileFaq} alt='img' />
                                    <span>FAQ</span>
                                </li>
                                <li>
                                    <img src={MobileSupport} alt='img' />
                                    <span>Support</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.mobile__block}>
                            <ul>
                                <li>Netflix</li>
                                <li>YouTube</li>
                                <li>Spotify</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.header__mobile__buttons}>
                        <div className={styles.header__mobile__links}>
                            <img src={Whatsapp} alt='' />
                            <img src={Telegram} alt='' />
                        </div>
                        <div onClick={langToggleHandler} className={styles.header__mobile__lang}>
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
                        <Button className={styles.header__mobile__signup}>Sign up</Button>
                        <Button className={styles.header__mobile__login} color='outline'>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileMenu
