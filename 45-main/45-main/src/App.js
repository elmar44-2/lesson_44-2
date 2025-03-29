import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart"
import Favorites from "./pages/Favorites"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Checkout from "./pages/Checkout"



const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>      
      </BrowserRouter>
    </QueryClientProvider>
  )
}