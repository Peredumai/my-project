import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import FAQPage from '../../pages/FAQPage/FAQPage'
import Netflix from '../../pages/Netflix/Netflix'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='faq' element={<FAQPage />} />
                <Route path='netflix' element={<Netflix />} />
            </Route>
        </Routes>
    )
}

export default App
