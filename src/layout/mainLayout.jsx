import Footer from './footer'
import Header from './header'
import React from 'react'
import PropTypes from 'prop-types'
const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          height: 'calc(100vh - 351px)',
        }}
      >
        {children}
      </div>

      <Footer />
    </>
  )
}
MainLayout.propTypes = {
  children: PropTypes.any,
}

export default MainLayout
