import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'


function pages() {
  return (
    <Routes>
        <Route element={<Login />} path={'/'} />
        <Route element={<Home />} path={'/user'} />
    </Routes>
  )
}

export default pages