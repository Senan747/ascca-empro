import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'


function pages() {
  return (
    <Routes>
        <Route element={<Login />} path={'/'} />
    </Routes>
  )
}

export default pages