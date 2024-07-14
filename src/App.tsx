import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Register from "./pages/register/Register"

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
