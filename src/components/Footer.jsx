import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-8 border-t pt-4 pb-8 border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 text-sm text-gray-600 dark:text-gray-300 flex flex-col md:flex-row justify-between">
        <div>© {new Date().getFullYear()} TaskApp. All rights reserved.</div>
        <div className="mt-2 md:mt-0">
          <a className="mr-4" href="#">Privacy</a>
          <a className="mr-4" href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
