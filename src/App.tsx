import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import Dashboard from "./pages/dashboard/Dashboard"
import Login from "./pages/login/Login"

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
