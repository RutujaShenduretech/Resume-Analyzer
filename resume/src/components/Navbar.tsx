import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-lg font-bold">Resume Analyzer</div>
          <div>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
