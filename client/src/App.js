import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationPage from './pages/NavigationPage'
import Footer from './pages/Footer'

function App() {
  return (
  <>
  <NavigationPage />
  <div className=' py-6'>
   <Outlet />
  </div>
   <Footer />
  </>
  )
}

export default App