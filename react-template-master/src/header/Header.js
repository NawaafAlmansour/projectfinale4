import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'


import styled from 'styled-components'



const Styles = styled.div`
.masthead{
  margin: 5px 5px 5px 5px;
  z-index: 22;


}
  .nav{
    background-color: #222;
    position: fixed;
    top: 3;
    left: 0;
    right: 0;
  }
  .nav-masthead {
    float: right;
  }
  .navbar {

  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #797979;
    font-weight: 700;
    text-decoration: none



    &:hover {
      color: #f49;
    }
    &:focus {
      color: #ffc700;
      border-bottom: .25rem solid #9c9c9c;

    }

  }
  a {
    text-decoration: none
  }

`;


const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Styles>
      <Link to="/">Portfolio</Link>
      <Link to="/Work">Work</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </Styles>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>Nawaf</h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
