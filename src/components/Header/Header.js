import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link className='nav-link' href="/loans">Loans</Nav.Link>
    <Nav.Link className='nav-link' href="/change-pw">Change Password</Nav.Link>
    <Nav.Link className='nav-link' href="/sign-out">Log Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link className='text-white nav-link' href="/sign-up">Register</Nav.Link>
    <Nav.Link className='text-white nav-link' href="/sign-in">Log In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link className='text-white nav-link' href="/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Nav className="navbar navbar-expand-lg navbar-dark bg-primary" collapseOnSelect>
    <Navbar.Brand href="/">
      Han's Loan Calculator <i className='fas fa-calculator'></i>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        {user && <span className="navbar-text mr-2 text-white">Welcome, {user.email}</span>}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Nav>
)

export default Header
