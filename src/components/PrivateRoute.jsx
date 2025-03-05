import { UserAuth } from "../context/AuthContext" // make sure to import your auth context hook
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute = ({ children }) => {
  const { currentUser } = UserAuth() // Using a hook to access the current auth state

  if (!currentUser) {
    // Redirect them to the /login page, but save the current location they were trying to go to
    return <Navigate to="/login" />
  }

  return children // If the user is authenticated, render the children
}

export default PrivateRoute
