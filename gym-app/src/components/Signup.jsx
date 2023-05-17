import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom"

const Signup = () => {
  const usernameRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
  const { signup, updateUsername  } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true) //prevent user from creating multiple acc
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch {
      setError('Failed to create an account')
    }


    setLoading(false)
  }

  return (
    <div className="signup-form-container">
      <div className="signup-form">
        <Card >
          <Card.Body>
            <h2 className="text-center mb-4 signup-title">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" ref={usernameRef} required />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password=confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <div className="signup-button-div">
                  <Button disabled={loading} type="submit">Sign Up</Button>
                </div>         
              </Form>
              <div className="w-100 text-center mt-2">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/login">Log In</Link>
          </div>
      </div>
    </div>
  )
}

export default Signup