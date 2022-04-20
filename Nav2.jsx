import Navbar from "react-bootstrap/Navbar"
import React from "react"
import Container from "react-bootstrap/Container"

import "./style.css";
function Nav2(){
  function changeColorOnEnter(e) {
    e.target.style.color = 'lightgreen';
  }
  function changeColorOnExit(e){
    e.target.style.color = 'white';
  }
  return(
    <>
    <Navbar className= "bar2" bg="dark">
    <Container>
    <Navbar.Brand className = "NavbarLink2" href="#home" onMouseEnter={changeColorOnEnter}
    onMouseLeave = {changeColorOnExit}>
      Productos
    </Navbar.Brand>
    <Navbar.Brand className = "NavbarLink2" href="#home"
    onMouseEnter={changeColorOnEnter}
    onMouseLeave = {changeColorOnExit}>
      Suporte
    </Navbar.Brand>
    <Navbar.Brand className = "NavbarLink2" href="#home"
    onMouseEnter={changeColorOnEnter}
    onMouseLeave = {changeColorOnExit}>
      Sobre Nosotros
    </Navbar.Brand>
    </Container>
  </Navbar>
  </>
  );
}
export default Nav2