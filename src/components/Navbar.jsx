import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import { useTheme } from '../context/ThemeContext'


export default function Navbar() 
{
  const { theme, toggle } = useTheme()
  function Navbar() {
  const { theme, toggleTheme } = useTheme();

  }
  return (
    <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <NavLink to="/" className="text-xl font-bold">TaskApp</NavLink>
          <div className="hidden md:flex gap-3 text-sm">
            <NavLink to="/" className={({isActive}) => isActive ? 'underline' : ''}>Home</NavLink>
            <NavLink to="/todos" className={({isActive}) => isActive ? 'underline' : ''}>Todos</NavLink>
            <NavLink to="/posts" className={({isActive}) => isActive ? 'underline' : ''}>Posts</NavLink>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={toggle}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </Button>
        </div>
      </div>
    </nav>
  )
}
