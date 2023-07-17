import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
        <nav className="navbar navbar-expand-md justify-content-center bg-dark navbar-dark">
            <div className="container-fluid">
                
                <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link ">About</Link>
                </li>


                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
        </div>
        </nav>
    </>
  )
}

export default Navbar
