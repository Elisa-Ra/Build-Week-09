import { Container, Row, Col, Button, Image } from "react-bootstrap"
import { useState } from "react"
import ToggleButton from "react-bootstrap/ToggleButton"
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup"

function Interests() {
  const [value, setValue] = useState(1)

  const handleChange = (val) => setValue(val)

  const contents = {
    // TOP VOICES
    1: (
      <Container className="p-3">
        <Row>
          <Col xs={1}>
            <Image
              src="https://placedog.net/50/50"
              alt="profile"
              roundedCircle
            />
          </Col>
          <Col xs={11}>
            <p className="m-0">
              <strong>Nome Cognome </strong>
              <i className="bi bi-linkedin text-primary"></i> · 2°
            </p>
            <p className="fs-6 m-0">Professione</p>
            <p className="text-secondary fs-6">100.001 follower</p>
            <Button variant="outline-dark" size="sm" className="rounded-pill">
              <i className="bi bi-send-fill"></i> Messaggio
            </Button>
          </Col>
        </Row>
      </Container>
    ),
    // AZIENDE
    2: (
      <>
        <Container className="p-3">
          <Row>
            {/* Primo profilo */}
            <Col>
              <Row className="align-items-start">
                <Col xs={2}>
                  <Image
                    src="https://placecats.com/50/50"
                    alt="profile"
                    className="rounded"
                  />
                </Col>
                <Col xs={10}>
                  <p className="m-0">
                    <strong>EPICODE Institute of Technology</strong>{" "}
                  </p>

                  <p className="text-secondary fs-6">20.906 follower</p>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="rounded-pill"
                  >
                    <i className="bi bi-check2"></i> Già segui
                  </Button>
                </Col>
              </Row>
            </Col>

            {/* Secondo profilo */}
            <Col>
              <Row className="align-items-start">
                <Col xs={2}>
                  <Image
                    src="https://placedog.net/50/50"
                    alt="profile"
                    className="rounded"
                  />
                </Col>
                <Col xs={10}>
                  <p className="m-0">
                    <strong>Oracle</strong>{" "}
                  </p>

                  <p className="text-secondary fs-6">10.959.998 follower</p>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="rounded-pill"
                  >
                    <i className="bi bi-check2"></i> Già segui
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    ),
    // Newsletter
    3: (
      <Container className="p-3">
        <Row>
          <Col xs={1}>
            <Image
              src="https://placebear.com/50/50"
              alt="profile"
              className="rounded"
            />
          </Col>
          <Col xs={11}>
            <p className="m-0">
              <strong>Dicolab. Cultura al digitale </strong>
              <i className="bi bi-linkedin text-primary"></i> · 2°
            </p>
            <p className="fs-6 m-0">
              Resta aggiornato sulle novità e gli aggiornamenti sul sistema
              formativo per i professionisti della cultura.
            </p>
            <p className="text-secondary fs-6">Pubblicazione quindicinale</p>
            <Button variant="outline-dark" size="sm" className="rounded-pill">
              <i className="bi bi-check2"></i> Iscrizione effettuata
            </Button>
          </Col>
        </Row>
      </Container>
    ),
    //Scuole o università
    4: (
      <>
        <Container className="p-3">
          <Row>
            {/* Primo profilo */}
            <Col>
              <Row className="align-items-start">
                <Col xs={2}>
                  <Image
                    src="https://placedog.net/50/50"
                    alt="profile"
                    className="rounded"
                  />
                </Col>
                <Col xs={10}>
                  <p className="m-0">
                    <strong>EPICODE Institute of Technology</strong>{" "}
                  </p>

                  <p className="text-secondary fs-6">20.906 follower</p>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="rounded-pill"
                  >
                    <i className="bi bi-check2"></i> Già segui
                  </Button>
                </Col>
              </Row>
            </Col>

            {/* Secondo profilo */}
            <Col>
              <Row className="align-items-start">
                <Col xs={2}>
                  <Image
                    src="https://placecats.com/50/50"
                    alt="profile"
                    className="rounded"
                  />
                </Col>
                <Col xs={10}>
                  <p className="m-0">
                    <strong>Scuola</strong>{" "}
                  </p>

                  <p className="text-secondary fs-6">103.3232 follower</p>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    className="rounded-pill"
                  >
                    <i className="bi bi-check2"></i> Già segui
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    ),
  }

  return (
    <Container className="mx-2 mb-5 mt-5 rounded bg-white p-0 w-100 w-lg-50 p-4 border border-1 border-secondary-subtle">
      {/* Sezione Interessi */}
      <h3>Interessi</h3>
      <Row>
        <Col xs={12}>
          <ToggleButtonGroup
            type="radio"
            name="interests"
            value={value}
            onChange={handleChange}
          >
            <ToggleButton
              id="tbg-btn-1"
              value={1}
              className="toggle-btn-custom"
            >
              Top Voices
            </ToggleButton>
            <ToggleButton
              id="tbg-btn-2"
              value={2}
              className="toggle-btn-custom"
            >
              Aziende
            </ToggleButton>
            <ToggleButton
              id="tbg-btn-3"
              value={3}
              className="toggle-btn-custom"
            >
              Newsletter
            </ToggleButton>
            <ToggleButton
              id="tbg-btn-4"
              value={4}
              className="toggle-btn-custom"
            >
              Scuole o università
            </ToggleButton>
          </ToggleButtonGroup>
        </Col>
        <Col className="mt-4">
          <p>{contents[value]}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Interests
