import { Navbar, Nav, Container, Button,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Component} from 'react';
import './navbar.css';
class NavigationBar extends Component{
render(){
    return (
    <Navbar className="navbar navbar-dark bg-dark" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home">Footwear Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Item className="mb-3 itemDesign ">
            <Link to ="/home"> <Button className ="buttonDesign" variant="dark">Home</Button></Link>
            </Nav.Item>
            <Nav.Item className="mb-3 itemDesign">
            <Link to ="/cart"> <Button className="buttonDesign" variant="dark">cart</Button></Link>
            </Nav.Item>
           </Nav>
          <Nav>
          <Nav.Item className="mb-3">
            <Link to ="/"> <Button variant="dark">Logout</Button></Link>
            </Nav.Item>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
 }


}
export default NavigationBar;