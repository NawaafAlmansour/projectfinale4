/* !

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. */
import React from 'react';
import {Link} from 'react-router-dom';
// nodejs library 'react'ncatenates strings
import classnames from 'classnames';
// reactstrap component'classnames'
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,Container
} from
  'reactstrap';
function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299) {
        setNavbarColor('');
      } else if (document.documentElement.scrollTop < 300 || document.body.scrollTop < 300) {
        setNavbarColor('navbar-transparent');
      }
    };

    window.addEventListener('scroll', updateNavbarColor);

    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (<Navbar className={classnames('fixed-top', navbarColor)} color-on-scroll="300" expand="lg">
    <Container>
      <div className="navbar-translate">
        <NavbarBrand data-placement="bottom" to="/Work" target="_blank" title="Coded by Creative Tim" tag={Link}>
          Paper Kit 2
        </NavbarBrand>

      </div>
      <Collapse className="justify-content-end" navbar="navbar" isOpen={navbarCollapse}>
        <Nav navbar="navbar">
          <NavItem>
            <NavLink to="/Work" tag={Link}>
              <i className="nc-icon nc-layout-11"/>
              Work
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Work" tag={Link}>
              <i className="nc-icon nc-layout-11"/>
              Work
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/Work" tag={Link}>
              <i className="nc-icon nc-layout-11"/>
              Work
            </NavLink>
          </NavItem>

        </Nav>
      </Collapse>
    </Container>
  </Navbar>);
}

export default ExamplesNavbar;
