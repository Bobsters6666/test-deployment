import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">GYM APP</Link>
      <nav>
        <Link className="link" to="/leaderboard">Leaderboard</Link>
        <Link className="link" to="/dashboard">Dashboard</Link>
        <Link className="link" to="/calculator">Calculator</Link>
      </nav>
      <Link to="/signup">
        <button>Login</button>
      </Link>
      
    </header>
  )
}

export default Header