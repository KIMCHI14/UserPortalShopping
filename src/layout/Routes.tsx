import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '~/page/home'
import ProductPage from '~/page/product'
import ContactPage from '~/page/Contact'
import AboutUsPage from '~/page/About Us'
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/AboutUs" element={<AboutUsPage />} />

    </Routes>
  )
}

export default RoutesComponent
