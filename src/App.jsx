import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import "./App.css"

function App() {
  return (
    <>
      <Navbar className="bg-slate-400">
        <Container id="C1">
        <img src="logo.svg"></img>
          <Navbar.Brand href="#home">SZ-Ybbs Messestand</Navbar.Brand>
        </Container>
        <Container id="C2">
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-0">
              <Nav.Link href="#home">News</Nav.Link>
              <Nav.Link href="#link">Kontaktformular</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
