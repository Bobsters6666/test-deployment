import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from "react-router-dom"

export default function UpdateProfile() {
  const usernameRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
  const { currentUser, updateEmail, updatePassword, updateUsername } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    const promises = []
    setError('')
    setLoading(true)

    if (emailRef.current.value != currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    if (usernameRef.current.value) {
      promises.push(updateUsername(usernameRef.current.value))
    }

    console.log(promises)

    //iterates through every promise in the array and runs .then function if no errors are caught.
    Promise.all(promises).then(() => {
      navigate('/')
    }).catch(() => {
      setError('Failed to update account')
    }).finally(() => {
      setLoading(false)
    })

  }

  return (
    <div className="signup-form-container">
      <div className="signup-form">
        <Card >
          <Card.Body>
            <h2 className="text-center mb-4 signup-title">Update Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" ref={usernameRef} required />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same" />
                </Form.Group>
                <Form.Group id="password=confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same"/>
                </Form.Group>
                <div className="signup-button-div">
                  <Button disabled={loading} type="submit">Update</Button>
                </div>         
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              <Link to="/dashboard">Cancel</Link>
          </div>
      </div>
    </div>
  )
}
