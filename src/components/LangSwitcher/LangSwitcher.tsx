import React, { useState } from 'react'
import styles from './LangSwitcher.module.scss'
import { ReactComponent as ArrowDown } from '../../assets/img/arrow-down.svg'
import clsx from 'clsx'

interface LangSwitcherProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'header' | 'footer' | 'headerMobile'
}

const LangSwitcher: React.FC<LangSwitcherProps> = ({ variant }) => {
    // const variants = {
    //     header: styles.blue,
    //     footer: styles.white,
    //     headerMobile: styles.grey,
    // }

    // const className = clsx(
    //   styles.btn,
    //   variants[variant],
    // );

    const [langMenuVisible, setLangMenuVisible] = useState(false)
    const langToggleHandler = () => {
        setLangMenuVisible((p) => !p)
    }
    const overlayFunc = () => {
        setLangMenuVisible(false)
    }

    return (
        <>
            <div
                onClick={overlayFunc}
                className={clsx(styles.overlay, {
                    [styles.overlay_active]: langMenuVisible,
                })}
            />
            <div onClick={langToggleHandler} className={clsx({
              [styles.header__lang]: variant === 'header',
              [styles.footer__lang]: variant === 'footer',
              [styles.header__mobile__lang]: variant === 'headerMobile',
            })}>
                <span>EN</span>
                <ArrowDown
                    className={clsx({[styles.arrowDown]: variant === 'footer'}, { [styles.active_lang]: langMenuVisible })}
                />
                {langMenuVisible && (
                    <div className={clsx(styles.langMenu, {
                      [styles.header__langMenu]: variant === 'header',
                      [styles.footer__langMenu]: variant === 'footer',
                      [styles.header__mobile__langMenu]: variant === 'headerMobile',
                    })}>
                        <ul>
                            <li>English</li>
                            <li>Ukraine</li>
                            <li>Russian</li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default LangSwitcher
