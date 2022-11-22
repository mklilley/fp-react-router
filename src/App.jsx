import React from "react"
import {Routes, Route} from "react-router-dom"

import "./App.css"
import {Cohort, Cohorts, About, Home} from "./pages"
import Header from "./layouts/Header"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route path="cohorts" element={<Cohorts/>}>
          <Route path=":name" element={<Cohort/>}></Route>
        </Route>
        <Route path="about" element={<About/>}></Route>
        <Route index element={<Home/>}></Route>
        <Route path="*" element={<h1>Not found</h1>}></Route>
      </Route>
    </Routes>
  )
}

export default App
