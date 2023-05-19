import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate} from "react-router-dom"

export default function dashboard() {
	const [error, setError] = useState("")
	const { currentUser, logout } = useAuth()
	const navigate = useNavigate()

	async function handleLogout() {
		setError('')

		try {
			await logout()
			navigate('/login')
		} catch {
			setError('Failed to log out')
		}
	}

	console.log(currentUser)

	return (
		<div className="dashboard-container">
			<Card className="dashboard">
				<Card.Body>
					<h2 className="text-center mb-4 signup-title">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
					<strong>Username: </strong> {currentUser.displayName || 'Anonymous'}<br />
					<strong>Email: </strong> {currentUser?.email || ''} <br />
					<strong>One rep max: </strong> {currentUser.displayName || 0.0+"kg"}
					
					<Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
           <Button variant="link" onClick={handleLogout}>Log Out</Button>   
      </div>
		</div>
	)
}
