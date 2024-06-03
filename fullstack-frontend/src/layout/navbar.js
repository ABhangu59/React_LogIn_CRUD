import React from 'react'
import { Link } from 'react-router-dom'
// Using BootStrap for the NavBar. 
export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Ali's First FullStack</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>

				{/* Formerly was a button, changed to Link so it will route properly using react-router-dom  */}
				<Link className="btn btn-outline-light" to="/adduser">
					Add User
				</Link>
			</div>
		</nav>
    </div>
  )
}
