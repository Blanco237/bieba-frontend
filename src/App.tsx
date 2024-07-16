import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import Dashboard from "./pages/dashboard/Dashboard"
import Login from "./pages/login/Login"
import Authenticate from "./pages/authenticate/Authenticate"
import Auth from "./pages/auth/Auth"
import Test from "./pages/test"

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/test" element={<Test />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
