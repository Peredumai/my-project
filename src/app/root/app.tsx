import React from 'react'
import Header from '../../components/Header/Header'
import styles from './App.module.scss'

function App() {
    return <div className={styles.app}>
        <Header />
        <div className={styles.cont}></div>
    </div>
}

export default App
