import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import FAQPage from '../../pages/FAQPage/FAQPage'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/faq' element={<FAQPage />} />
            </Routes>
        </Layout>
    )
}

export default App
