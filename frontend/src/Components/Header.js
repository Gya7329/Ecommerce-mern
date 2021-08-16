import React from 'react'
import { Navbar,Nav,Container} from "react-bootstrap";
import logo from './logo.svg'

function Header() {
    return (
     <header>

<Navbar bg="dark" variant='dark' expand="lg" collageOnSelect >
  <Container>
    <Navbar.Brand href="/">
        <img src={logo}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="nav-head">
      <Nav.Link href="/cart"><i class="fas fa-shopping-cart">Cart</i></Nav.Link>
        <Nav.Link href="/login"><i class="fas fa-user">Sign In </i></Nav.Link>
    
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

     </header>
    )
}

export default Header
