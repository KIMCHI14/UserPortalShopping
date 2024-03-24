import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '~/page/home'
import ProductPage from '~/page/product'

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  )
}

export default RoutesComponent
