import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { HiOutlineShieldCheck } from "react-icons/hi"
import { Link } from "react-router-dom"

const MiniHero = () => {
  return (
    <>
      {/* Sezione MiniHero, serve per il menu a tendina della navbar */}
      <Container className="bg-white w-100 p-0 flex-column" fluid>
        <Row className="flex-nowrap align-items-center justify-content-center py-1">
          <Col xs={4}>
            <Image
              src="https://placecats.com/500/500"
              alt="Profile"
              roundedCircle
              className="img-fluid"
            />
          </Col>
          <Col xs={8} className="px-0">
            <Row className="w-100 text-start align-items-center">
              <Col xs={12}>
                <Row className="flex-column">
                  <Col xs={12}>
                    <h6 className="fs-7 m-0">
                      Nome Cognome
                      <strong>
                        <HiOutlineShieldCheck className="ps-1 fs-6" />
                      </strong>
                    </h6>
                  </Col>
                  <Col xs={12}>
                    <p className="fs-7 m-0">Professione</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="px-0">
          <Col className="justify-content-center">
            <Button
              as={Link}
              to="/profile"
              variant="outline-primary"
              size="sm"
              className="rounded-pill w-100 p-0 fs-7"
            >
              <p className="m-0 fs-7"> Visualizza profilo </p>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MiniHero
