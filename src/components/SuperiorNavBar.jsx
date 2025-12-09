import { Container, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { IoSearch } from 'react-icons/io5';
import { HiUsers } from 'react-icons/hi2';
import { BsBriefcaseFill } from 'react-icons/bs';
import { BsBellFill, BsChatDotsFill } from 'react-icons/bs';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';
import { TbDots } from 'react-icons/tb';

const SuperiorNavBar = () => {
  return (
    <Navbar expand="lg" className="fixed-top bg-light">
      <Container fluid className="justify-content-between">
        <Navbar.Brand href="#">
          <FaLinkedin fill="#0A65C0" />
        </Navbar.Brand>
        <Navbar.Toggle className="border-0 ps-0">
          <IoSearch />
        </Navbar.Toggle>

        <InputGroup className="w-25 d-none d-lg-flex">
          <InputGroup.Text className="bg-white border-1 rounded-start-pill">
            <IoSearch />
          </InputGroup.Text>
          <Form.Control
            type="search"
            placeholder="Cerca"
            className="border-start-0 rounded-end-pill form-control-sm"
            aria-label="Search"
          />
        </InputGroup>
        <div className="d-flex flex-nowrap justify-content-evenly flex-grow-1">
          <Nav.Link className="text-center">
            <AiFillHome />
            <p className="d-none d-lg-flex fs-7 mb-0">Home</p>
          </Nav.Link>

          <Nav.Link className="text-center">
            <HiUsers />
            <p className="d-none d-lg-flex fs-7 mb-0">Rete</p>
          </Nav.Link>
          <Nav.Link className="text-center">
            <BsBriefcaseFill />
            <p className="d-none d-lg-flex fs-7 mb-0">Lavoro</p>
          </Nav.Link>
          <Nav.Link className="text-center">
            <BsChatDotsFill />
            <p className="d-none d-lg-flex fs-7 mb-0">Messaggistica</p>
          </Nav.Link>
          <Nav.Link className="text-center">
            <BsBellFill />
            <p className="d-none d-lg-flex fs-7 mb-0">Notifiche</p>
          </Nav.Link>
          <Nav.Item>
            <Navbar.Collapse>
              <Nav className=" my-lg-0 flex-column justify-content-center align-items-center mb-0">
                <Image
                  src="https://placebear.com/200/200"
                  className="profile-img-icon"
                  roundedCircle
                />
                <NavDropdown
                  title="Tu"
                  id="navbarScrollingDropdown"
                  className="fs-7"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Nav.Item>
        </div>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="border-0 justify-content-center align-items-center"
        >
          <TbDots />
        </Navbar.Toggle>
        <Navbar.Collapse className="flex-grow-0">
          <Nav
            className="me-auto my-2 my-lg-0 flex-column justify-content-center align-items-center border-start"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <TfiLayoutGrid3Alt />

            <NavDropdown
              title="Per le aziende"
              id="navbarScrollingDropdown"
              className="fs-7"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link>
            <p className="premium-link w-50 fs-7 text-decoration-underline mb-0">
              Riattiva Premium con il 50% di sconto
            </p>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SuperiorNavBar;
