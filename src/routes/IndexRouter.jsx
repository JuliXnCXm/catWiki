import React from 'react'
import {Routes, Route } from 'react-router-dom'
import CatInfo from '../pages/CatInfo'
import Home from '../pages/Home'


const IndexRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:catname" element={<CatInfo/>} />
        </Routes>
    )
}

export default IndexRouter
