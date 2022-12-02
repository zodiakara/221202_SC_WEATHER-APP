import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { WiDayLightWind } from "react-icons/wi";
import { BsSuitHeart } from "react-icons/bs";
import { RiHomeLine } from "react-icons/ri";

const NavComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-flex-start">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <WiDayLightWind className="m-2 " />
          GET YOUR WEATHER
        </Navbar.Brand>

        <Nav.Link href="#home">
          <RiHomeLine className="m-2 " />
          Home
        </Nav.Link>
        <Nav.Link href="#favorites">
          <BsSuitHeart className="m-2 " /> Favorites
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
