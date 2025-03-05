import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Background from "./components/Background"
import Dashboard from "./pages/Dashboard"
import { AuthContextProvider } from "./context/AuthContext"
import SignIn from "./pages/auth/SignIn"
import PrivateRoute from "./components/PrivateRoute"

function Error404() {
  return (
    <div className="absolute">
      <h1 className="text-4xl font-bold">PAGE NOT FOUND</h1>
    </div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen items-center justify-center flex bg-primary">
      <AuthContextProvider>
        <Background />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  )
}

export default App
