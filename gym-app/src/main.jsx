import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Calculator from './Calculator.jsx'
import App from './components/app.jsx'
import Signup from './components/Signup.jsx'
import Dashboard from './components/Dashboard.jsx'
import ForgotPassword from './components/ForgotPassword.jsx'
import Login from './components/Login.jsx'
import UpdateProfile from './components/UpdateProfile.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import Leaderboard from './components/leaderboard.jsx'
import './index.css'
import './form.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Calculator />}></Route> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
)
