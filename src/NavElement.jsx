import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export default function NavElement() {
  return (
    <Navbar className="bg-maincolor">
      <Container id="C1">
        <img src="./LogoHAKHASITHTL_white.webp" className="w-24 bg-fontWhite"></img>

        <Navbar.Brand href="/">SZ-Ybbs Messestand</Navbar.Brand>
      </Container>
      <Container id="C2">
        <Nav className="me-0">
          <Nav.Link href="#home">News</Nav.Link>
          <Nav.Link href="#link">Kontaktformular</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
