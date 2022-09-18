import React from 'react'
import { Button } from '../Button'
import Question from '../Question/Question'
import { standartQuestions, helpQuestions } from '../../utils/questions'

import styles from './FAQSection.module.scss'

interface QuestionObj {
    title: string
    info: string
}

interface FAQSectionProps {
    type?: 'Standart'
}

const FAQSection: React.FC<FAQSectionProps> = ({ type }) => {
    let questions: QuestionObj[]

    type === 'Standart' ? (questions = standartQuestions) : (questions = helpQuestions)
    return (
        <div className={styles.faq__section}>
            {type === 'Standart' ? (
                <h2 className={styles.standartHeading2}>FAQ</h2>
            ) : (
                <h2 className={styles.extendedHeading2}>How can we help you?</h2>
            )}
            <div className={styles.accordion__wrapper}>
                {questions.map((q) => {
                    return <Question info={q.info} title={q.title} key={q.info + q.title} />
                })}
            </div>
            <Button color='grey' size='large'>
                Support
            </Button>
        </div>
    )
}

export default FAQSection
