import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Gumzo App</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/13399841/pexels-photo-13399841.jpeg?cs=srgb&dl=pexels-gabe-mtv-13399841.jpg&fm=jpg" alt="" />
        <span className="username">Trio</span>
        <button className="log-out">LogOut</button>
      </div>
    </div>
  )
}

export default Navbar