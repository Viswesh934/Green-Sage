import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import {GreenCodeLanding} from './components/GreenLanding'


function App() {
  return (
    <>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<GreenCodeLanding />} />
      </Routes>
    </>
  )
}

export default App
