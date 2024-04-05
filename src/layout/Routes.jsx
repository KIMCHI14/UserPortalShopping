import { Route, Routes } from 'react-router-dom'
import HomePage from 'page/home'
import AboutUsPage from 'page/aboutUs'
import ContactPage from 'page/contact'
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/AboutUs" element={<AboutUsPage />} />
    </Routes>
  )
}

export default RoutesComponent
