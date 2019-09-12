import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
// import styled from 'styled-components';




export const exNavbar = () => (

  <header class="header-area">

    <div class="main-header-area">
      <div class="classy-nav-container breakpoint-off">
        <div class="container">

          <nav class="classy-navbar justify-content-between" id="alimeNav">


            <a class="nav-brand" href="./index.html"> Nawaf</a>


            <div class="classy-navbar-toggler">
              <span class="navbarToggler"><span></span><span></span><span></span></span>
            </div>


            <div class="classy-menu">

              <div class="classycloseIcon">
                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
              </div>

              <div class="classynav">
                <ul id="nav">
                  <li class="active"><a href="./index.html">Home</a></li>
                  <li><a href="./gallery.html">Gallery</a></li>
                  <li><a href="./blog.html">Blog</a></li>
                  <li><a href="./contact.html">Contact</a></li>
                </ul>
              </div>

            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
)
