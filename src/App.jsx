import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home";
import Shipping from "./pages/Shipping";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Messages from "./pages/Messages";
import logo from "./assets/logo-white.png"
function App() {

  return (
    <div className='App'>
      <Toaster />
      <FloatingWhatsApp phoneNumber="+201556543218"
        accountName="Ahipping Arabia"
        avatar={logo}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/inbox" element={<Messages />}></Route>
            <Route path="/shipping" element={<Shipping />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
