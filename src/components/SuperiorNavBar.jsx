import { Container, InputGroup, Row, Col } from 'react-bootstrap';
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
import MiniHero from './MiniHero';
import { FaSquare } from 'react-icons/fa6';
import AziendeDropdownDetails from './AziendeDropdownDetails';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

const SuperiorNavBar = () => {
  const profile = useSelector((state) => state.profile.data);

  return (
    <Navbar expand="lg" className="fixed-top bg-light pb-0">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <FaLinkedin fill="#0A65C0" className="fs-1" />
        </Navbar.Brand>
        {/* icona search su mobile */}
        <Navbar.Toggle className="border-0 ps-0">
          <IoSearch />
        </Navbar.Toggle>
        {/* barra search su desktop */}
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
        {/* set di icone */}
        <div className="d-flex flex-nowrap justify-content-evenly flex-grow-1">
          <NavLink to="/" className="nav-link text-center toggle-btn-custom">
            <AiFillHome className=" icon-hover fs-5" />
            <p className="d-none d-lg-flex fs-7 mb-0">Home</p>
          </NavLink>

          <NavLink
            to="/rete"
            className="nav-link text-center toggle-btn-custom"
          >
            <HiUsers className="text-secondary icon-hover fs-5" />
            <p className="d-none d-lg-flex fs-7 mb-0">Rete</p>
          </NavLink>

          <NavLink
            to="/lavoro"
            className="nav-link text-center toggle-btn-custom"
          >
            <BsBriefcaseFill className="text-secondary icon-hover fs-5" />
            <p className="d-none d-lg-flex fs-7 mb-0">Lavoro</p>
          </NavLink>

          <NavLink
            to="/messaggistica"
            className="nav-link text-center toggle-btn-custom"
          >
            <BsChatDotsFill className="text-secondary icon-hover fs-5" />
            <p className="d-none d-lg-flex fs-7 mb-0">Messaggistica</p>
          </NavLink>

          <NavLink
            to="/notifiche"
            className="nav-link text-center toggle-btn-custom"
          >
            <BsBellFill className="text-secondary icon-hover fs-5" />
            <p className="d-none d-lg-flex fs-7 mb-0">Notifiche</p>
          </NavLink>

          <Nav.Item className="d-none d-lg-flex">
            {/* menu a tendina del profilo */}
            <Navbar.Collapse>
              <Nav className=" my-lg-0 flex-column justify-content-center align-items-center mb-0">
                <Image
                  src={profile?.image || 'https://placebear.com/100/100'}
                  className="profile-img-icon"
                  roundedCircle
                />
                <NavDropdown title="Tu" align="end" className="fs-7 ">
                  {/* <NavDropdown.Item> */}
                  <MiniHero />
                  {/* </NavDropdown.Item> */}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    <Container fluid>
                      <Row className="flex-column">
                        <Col>
                          <h6 className="fs-7">Account</h6>
                          <p className="fs-7">
                            <FaSquare fill="#E7A33E" className="text-wrap" />{' '}
                            Riattiva Premium con il 50% di sconto
                          </p>
                          <p className=" fs-7 pb-0 mb-1 text-muted">
                            Impostazioni e privacy
                          </p>
                          <p className=" fs-7 pb-0 mb-1 text-muted">Guida</p>
                          <p className=" fs-7 pb-0 mb-1 text-muted">Lingua</p>
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Container fluid>
                      <Row className="flex-column">
                        <Col>
                          <h6 className="fs-7">Gestisci</h6>
                          <p className=" fs-7 mb-0 pb-0 text-muted">
                            Post e attività
                          </p>
                          <p className=" fs-7 pb-0 mb-0 text-muted">
                            Account per la sincronizzazione di off..
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Container>
                      <Row>
                        <Col>
                          <p className=" fs-7 py-0 my-0 text-muted">Esci</p>
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Nav.Item>
        </div>
        {/* panino per mobile */}
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="border-0 justify-content-center align-items-center"
        >
          <TbDots />
        </Navbar.Toggle>
        {/* menu a tendina per collapse */}
        <Navbar.Collapse className="flex-grow-0">
          <Nav className="my-2 my-lg-0 flex-column justify-content-center align-items-center border-start">
            <Row>
              {/* profilo mobile */}
              <Col>
                <NavDropdown
                  title={
                    <Image
                      src={profile?.image}
                      alt="Profile"
                      roundedCircle
                      className="img-fluid mini-img"
                    />
                  }
                  align="end"
                  className="fs-7 d-lg-none"
                >
                  <NavDropdown.Item>
                    <MiniHero />
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    <Container fluid>
                      <Row className="flex-column ">
                        <Col>
                          <h6 className="fs-7">Account</h6>
                          <p className="fs-7">
                            <FaSquare fill="#E7A33E" className="text-wrap" />{' '}
                            Riattiva Premium con il 50% di sconto
                          </p>
                          <p className=" fs-7 pb-0 mb-1 text-muted">
                            Impostazioni e privacy
                          </p>
                          <p className=" fs-7 pb-0 mb-1 text-muted">Guida</p>
                          <p className=" fs-7 pb-0 mb-1 text-muted">Lingua</p>
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Container fluid>
                      <Row className="flex-column">
                        <Col>
                          <h6 className="fs-7">Gestisci</h6>
                          <p className=" fs-7 mb-0 pb-0 text-muted">
                            Post e attività
                          </p>
                          <p className=" fs-7 pb-0 mb-0 text-muted">
                            Account per la sincronizzazione di off..
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Container>
                      <Row>
                        <Col>
                          <p className=" fs-7 py-0 my-0 text-muted">Esci</p>
                        </Col>
                      </Row>
                    </Container>
                  </NavDropdown.Item>
                </NavDropdown>
              </Col>

              <Col className="d-flex flex-column justify-content-center align-items-center text-center">
                {/* aziende desktop */}

                <TfiLayoutGrid3Alt />
                <NavDropdown
                  title="Per le aziende"
                  align="end"
                  className="fs-7 d-none d-lg-flex"
                >
                  <NavDropdown.Item href="#action1">
                    <AziendeDropdownDetails />
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={<TfiLayoutGrid3Alt />}
                  align="end"
                  className="fs-7 d-flex d-lg-none"
                >
                  <NavDropdown.Item href="#">
                    <AziendeDropdownDetails />
                  </NavDropdown.Item>
                </NavDropdown>
              </Col>
              <Col xs={6}>
                <Nav.Link>
                  <p className="premium-link w-100 fs-7 text-decoration-underline mb-0">
                    Riattiva Premium con il 50% di sconto
                  </p>
                </Nav.Link>
              </Col>
            </Row>
          </Nav>
          {/* link per riattivazione premium */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SuperiorNavBar;
