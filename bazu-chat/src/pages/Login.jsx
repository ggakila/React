import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Bazu Chat</span>
            <span className="title">Login</span>
            <form action="">
                <input type="email" placeholder='email address' />
                <input type="password" placeholder='password'/>
                <button>Sign in</button>
            </form>
            <p>Don't have an account? Sign Up</p>
        </div>
    </div>
  )
}

export default Login