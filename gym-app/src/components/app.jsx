import React from 'react'
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="signup-form-container">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App