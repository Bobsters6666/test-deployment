import React, { useContext, useState, useEffect} from 'react'
import { auth } from '../firebase' 

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
	
	const [currentUser, setCurrentUser] = useState()
	const [loading, setLoading] = useState(true)

	function signup(email, password, username) {
		return auth.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				console.log(userCredential)
				// Set the user's display name
				return userCredential.user.updateProfile({
					displayName: username
				});
			})
			.catch((error) => {
				console.log('Error during signup:', error);
				throw error; // Rethrow the error to propagate it further if needed
			});
	}

	function login(email, password) {
		return auth.signInWithEmailAndPassword(email, password)
	}

	function logout() {
		return auth.signOut()
	}

	function resetPassword(email) {
		return auth.sendPasswordResetEmail(email)
	}

	function updateEmail(email) {
		currentUser.updateEmail(email)
	}

	function updatePassword(password) {
		currentUser.updatePassword(password)
	}

	function updateUsername(username) {
		return currentUser.updateProfile({
			displayName: username
		});
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setCurrentUser(user)
			setLoading(false)		
		})

		return unsubscribe
	}, [])

	const value = {
		currentUser,
		login,
		signup,
		logout,
		resetPassword,
		updateEmail,
		updatePassword,
		updateUsername
	}

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
