import NavbarComponents from '@/Components/Navbar'
import React from 'react'

function UserLayout({children}) {
  return (
    <div>
        <NavbarComponents />
      {children}
    </div>
  )
}

export default UserLayout