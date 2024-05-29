import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import News from "./News";
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

      <News
        title={"Hello World"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        }
        picture={
          "https://www.sz-ybbs.ac.at/fileadmin/DATA/_processed_/f/d/csm_20221128_KoopFHStPoe_2_b6d2ce55be.jpg"
        }
      ></News>
    </>
  );
}

export default App;
