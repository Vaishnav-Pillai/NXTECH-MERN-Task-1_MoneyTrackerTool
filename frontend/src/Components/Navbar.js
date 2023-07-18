import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar" style={{backgroundColor: '#000000'}} data-bs-theme='dark'>
        <div className="container-fluid" style={{margin: '0px 0px'}}>
            <Link to="/"className="navbar-brand" style={{fontFamily: 'fantasy'}}>Money-Tracker | Rich By Savings</Link>
            <form className="d-flex" role="search">
                <input className="form-control me-2 sm" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success btn-sm" type="submit">Search</button>
            </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
