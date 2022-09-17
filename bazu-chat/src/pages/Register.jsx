import React from 'react'
import Add from "../img/addAvatar.png"

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Bazu Chat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder='username' />
                <input type="email" placeholder='email address' />
                <input type="password" placeholder='password'/>
                <input id='file' style= {{display:"none"}}type="file" placeholder='add a file'/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register