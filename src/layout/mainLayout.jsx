import Footer from './Footer'
import Header from './Header'
import React from 'react'
import PropTypes from 'prop-types'
const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
MainLayout.propTypes = {
  children: PropTypes.any,
}

export default MainLayout
