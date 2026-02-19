import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/homePage'
import { Route, Routes } from 'react-router'
import DataPage from './pages/dataPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/data" element={<DataPage />} />
        
        
      

      </Routes>
      
    </>
  )
}

export default App
