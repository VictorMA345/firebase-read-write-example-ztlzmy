import Navbar from "react-bootstrap/Navbar"
import React from "react"
import Container from "react-bootstrap/Container"
import icono from "https://pic.onlinewebfonts.com/svg/img_365376.png"
import "./style.css";
function Nav() {

  return(
    <>
  <Navbar className= "bar" bg="dark">
    <Container>
    <Navbar.Brand className = "NavbarLink" href="/">
      <img src = "https://pic.onlinewebfonts.com/svg/img_365376.png" width= "30px" length = "30px"/>
        {"   "} A-Tech
    </Navbar.Brand>
    </Container>
  </Navbar>
</>
  );
}
export default Nav;