import { NavDropdown } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export default function NavElement() {
  return (
    <Navbar className="bg-maincolor">
      <Container id="C1">
        <picture src="LogoHAKHASITHTL_white.png"></picture>

        <Navbar.Brand href="/">SZ-Ybbs Messestand</Navbar.Brand>
      </Container>
      <Container id="C2">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-0">
            <Nav.Link href="#home">News</Nav.Link>
            <Nav.Link href="#link">Kontaktformular</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
