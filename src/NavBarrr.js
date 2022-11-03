import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import './NavBarrr.css'
function NavBarrr() {
    return(
        <Navbar bg="dark" expand="lg" variant='dark'>
        <Container>
          <Navbar.Brand style={{color: '#FFD700'}}>Numerical Method</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Root of equatioins" id="nav-dropdown" >
              <DropdownItem><Link style={{color: '#FFD700' }} to="/Graphical">Graphical Method</Link></DropdownItem>
                <DropdownItem><Link style={{color: '#FFD700' }} to="/Bisection">Bisection <br/></Link></DropdownItem>
                <DropdownItem><Link style={{color: '#FFD700' }} to="/Falsepositions">False position</Link></DropdownItem>
                <DropdownItem><Link style={{color: '#FFD700' }} to="/Newtonrapson">Newton raphson</Link></DropdownItem>
                <DropdownItem><Link style={{color: '#FFD700' }} to="/Onepoint">Onepoint Iteration</Link></DropdownItem>
                <DropdownItem><Link style={{color: '#FFD700' }} to="/Secant">Secant Method</Link></DropdownItem>
              </NavDropdown>
              <NavDropdown  title="Linea Equation" id="nav-dropdown" >
                <DropdownItem><Link style={{color: '#FFD700' }} to="/Cramer">Cramer Rule</Link></DropdownItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavBarrr;