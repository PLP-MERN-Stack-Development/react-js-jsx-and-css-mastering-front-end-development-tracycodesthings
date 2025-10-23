import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TodosPage from './pages/TodosPage'
import APIPage from './pages/APIPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="todos" element={<TodosPage />} />
        <Route path="posts" element={<APIPage />} />
      </Route>
    </Routes>
  )
}
