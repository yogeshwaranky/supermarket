import { useState } from 'react'

import './App.css'

import Login from './Login'
import { Signup } from './Signup'
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { AppProviders } from "./providers";
import Applayout from "./Components/applayout/Applayout.component";
import { Product } from './Product/Product'
import Home from './Home.page'
import { Brand } from './Brand/Brand.page'
function App() {


  return (
    <AppProviders>
    <Applayout>
      <Suspense >
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />

          <Route path="/signup" element={<Login />} />
          <Route path="/product" element={<Product />} />

        </Routes>
      </Suspense>
    </Applayout>
  </AppProviders>
  )
}

export default App