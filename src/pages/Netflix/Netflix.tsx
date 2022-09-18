import React, { useState } from 'react'
import styles from './Netflix.module.scss'

const Netflix = () => {
    const [selectedInput, setSelectedInput] = useState('6months')

    const handleChange = (inputValue: string) => {
        setSelectedInput(inputValue)
    }
    return (
        <div className={styles.netflix}>
            <h1>Choose a Netflix Plan</h1>
            <span>Listen without limits at a bargain price</span>

            <input type='radio' name='' id='6months' />
            <label htmlFor='6months'>
                <span>6 months </span>
            </label>
            <input type='radio' name='' id='12months' />
            <label htmlFor='6months'>
                <span>12 months</span>
            </label>
        </div>
    )
}

export default Netflix
