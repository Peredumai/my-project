import React, { useState } from 'react'
import styles from './Question.module.scss'
import { ReactComponent as AccordionArrow } from '../../assets/img/accordion-arrow.svg'
import clsx from 'clsx'

interface QuestionProps {
    title: string
    info: string
}

const Question: React.FC<QuestionProps> = ({ title, info }) => {
    const [expanded, setExpanded] = useState(false)

    const accordionToggler = () => {
        setExpanded(!expanded)
    }

    return (
        <div className={styles.accordion__card} onClick={accordionToggler}>
            <div className={styles.accordion__item} >
                <div className={styles.accordion__text}>{title}</div>
                <div className={clsx(styles.accordion__toggler, {
                  [styles.expanded]: expanded
                }) }>
                    <AccordionArrow />
                </div>
            </div>
            <div
                className={clsx(styles.accordion__content, {
                    [styles.accordion__visible]: expanded,
                })}
            >
                {info}
            </div>
        </div>
    )
}

export default Question
