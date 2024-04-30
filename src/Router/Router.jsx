import React from 'react'
import Home from '../Components/Home'
import Posts from '../Components/Posts'
import { Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
    </Routes>
  )
}

export default Router