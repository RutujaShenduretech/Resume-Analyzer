import React from 'react'

const footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center text-gray-300">
          &copy; {new Date().getFullYear()} Resume Analyzer. All rights reserved.
        </div>
      </footer> 
    </div>
  )
}

export default footer
