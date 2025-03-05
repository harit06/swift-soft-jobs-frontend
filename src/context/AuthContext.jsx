import { useContext, createContext, useEffect, useState } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { doSignInWithGoogle, doSignOut } from "../components/firebase/auth"
import { auth } from "../components/firebase/firebase"
const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser)
      console.log("User", currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <AuthContext.Provider
      value={{ doSignInWithGoogle, doSignOut, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}
