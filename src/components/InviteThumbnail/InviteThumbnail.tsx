import React from 'react'
import styles from './InviteThumbnail.module.scss'
import { ReactComponent as Copy } from '../../assets/img/copy.svg'


const InviteThumbnail = () => {
    return (
        <div className={styles.invite__thumbnail}>
            <div className={styles.invite__info}>
                <h3>Invite friends</h3>
                <p>
                    Starting today up to 50% for NETFLIX, YOUTUBE, SPOTIFY subscriptions with a
                    secure payment from PAYPAL
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
    )
}

export default InviteThumbnail
