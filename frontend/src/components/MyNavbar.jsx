import React from 'react'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
    
  return <>
  <nav class="navbar navbar-expand-lg bg-light navbar-light">
    <div class="container">
      <Link class="navbar-brand" to="/">CURD</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link class="nav-link active" to="/">Home</Link>
          <Link class="nav-link active" to="/Task">Task</Link>
        </div>
        <div className="navbar-nav ms-auto">
        <Link class="nav-link" to="/login">Login</Link>
        <Link class="nav-link" to="/signup">SignUp</Link>
        </div>
      </div>
    </div>
  </nav>
  </>
}

export default MyNavbar