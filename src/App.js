import './App.css'
import React from "react"
import { Route, Routes } from "react-router-dom"
import BreweryDetail from "./pages/BreweryDetail"
import Home from "./pages/Home"


function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<BreweryDetail />} />
      </Routes>
    </main>
  )
}

export default App