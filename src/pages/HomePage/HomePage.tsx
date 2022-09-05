import React from 'react'
import { Button } from '../../components/Button'
import styles from './HomePage.module.scss'

import { ReactComponent as HowItWorksStep1 } from '../../assets/img/hiw-step1.svg'
import { ReactComponent as HowItWorksStep2 } from '../../assets/img/hiw-step2.svg'
import { ReactComponent as HowItWorksStep3 } from '../../assets/img/hiw-step3.svg'
import { ReactComponent as Copy } from '../../assets/img/copy.svg'

import { ReactComponent as Logo } from '../../assets/img/header-logo.svg'

import clsx from 'clsx'

const HomePage = () => {
    return (
        <div className={styles.homepage}>
            <div className={styles.hero}>
                <div className={clsx(styles.hero__item, styles.left__item)}>
                    <h1>Start enjoying a benefit of up to 50%</h1>
                    <p>
                        You have always wanted to get the same product at a special price for you,
                        without haggling - and it is yours.
                    </p>
                    <Button color='white' size='medium'>
                        Start using
                    </Button>
                </div>
                <div className={clsx(styles.hero__item, styles.right__item)} />
            </div>

            <div className={styles.subscription}>
                <h2>Choose a subscription</h2>
                <div className={styles.subscription__cards__wrapper}>
                    <div className={styles.subscription__card}>
                        <div className={styles.card__info}>
                            <h3>Netflix subscription rates</h3>
                            <p>
                                The constant contributes to the task of the same and thus the
                                intended features and the set relation to the check and set also.
                            </p>
                            <Button size='small'>Learn more</Button>
                        </div>
                        <div className={styles.card__logo__netflix}/>
                    </div>
                    <div className={styles.subscription__card}>
                        <div className={styles.card__info}>
                            <h3>Spotify Premium</h3>
                            <p>
                                The constant contributes to the task of the same and thus the
                                intended features and the set relation to the check and set also.
                            </p>
                            <Button size='small'>Learn more</Button>
                        </div>
                        <div className={styles.card__logo__spotify}/>
                    </div>
                    <div className={styles.subscription__card}>
                        <div className={styles.card__info}>
                            <h3>YouTube Premium</h3>
                            <p>
                                The constant contributes to the task of the same and thus the
                                intended features and the set relation to the check and set also.
                            </p>
                            <Button size='small'>Learn more</Button>
                        </div>
                        <div className={styles.card__logo__youtube}/>
                    </div>
                </div>
            </div>
            <div className={styles.howItWorks}>
                <h2>How it works?</h2>
                <div className={styles.step__cards__wrapper}>
                    <div className={styles.step__card}>
                        <h4>Step 1</h4>
                        <p>Enter your account information</p>
                        <HowItWorksStep1 />
                    </div>
                    <div className={styles.step__card}>
                        <h4>Step 2</h4>
                        <p>Select the desired subscription and plan</p>
                        <HowItWorksStep2 />
                    </div>
                    <div className={styles.step__card}>
                        <h4>Step 3</h4>
                        <p>
                            Pay your bill <br /> with PayPal
                        </p>
                        <HowItWorksStep3 />
                    </div>
                </div>
                <div className={styles.invite__thumbnail}>
                    <div className={styles.invite__info}>
                        <h3>Invite friends</h3>
                        <p>
                            Starting today up to 50% for NETFLIX, YOUTUBE, SPOTIFY subscriptions
                            with a secure payment from PAYPAL
                        </p>
                    </div>
                    <div className={styles.invite__link}>
                        <span>Click on the link</span>
                        <div className={styles.copy__link}>
                            <span>Discounts On Services</span>
                            <Copy />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.aboutUs}>
                <h2>About us</h2>
                <div className={styles.aboutUs__wrapper}>
                    <div className={clsx(styles.aboutUs__item, styles.left__item)}>
                        <Logo height={130} width={130} />
                        <p className={styles.title__paragraph}>We offer you a subscription to various media services at the best price.</p>
                        <p className={styles.subtitle__paragraph}>We have partnered with several companies to help you find the best prices for your media subscriptions and provide you with the best prices for the Premium subscriptions you want.</p>
                        <p className={styles.phrase__paragraph}>It&apos;s simple, fast and economical.</p>
                    </div>
                    <div className={clsx(styles.aboutUs__item, styles.right__item)} />
                </div>
            </div>
        </div>

    )
}

export default HomePage
