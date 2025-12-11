import { Container, Card, Row, Col, Button } from "react-bootstrap"
import { IoEyeOutline, IoBarChartOutline } from "react-icons/io5"
import { PiChartLineFill } from "react-icons/pi"

const SezioneAnalisi = () => {
  return (
    <Container className=" mx-2 mb-5 mt-0 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle">
      <div>
        <Card className="mb-0 border-0">
          <Card.Body className="p-3">
            <h5 className="fw-bold mb-1">Analisi</h5>

            <p className="text-secondary small d-flex align-items-center mb-3">
              <IoEyeOutline className="me-1" style={{ fontSize: "1.1rem" }} />{" "}
              Solo per te
            </p>

            <Row>
              <Col xs={6} className="d-flex align-items-start">
                <div>
                  <PiChartLineFill
                    style={{ fontSize: "1.2rem" }}
                    className="me-2 mt-1"
                  />
                </div>

                <div>
                  <span className="fw-bold mb-0">0</span>{" "}
                  <span className="text-muted small">
                    visualizzazioni del profilo
                  </span>
                  <p className="mt-1">
                    Aggiorna il tuo profilo per attrarre visitatori.
                  </p>
                </div>
              </Col>

              <Col xs={6} className="d-flex align-items-start">
                <div>
                  <IoBarChartOutline
                    style={{ fontSize: "1.2rem" }}
                    className="me-2 mt-1"
                  />
                </div>
                <div>
                  <span className="fw-bold me-1">0</span>
                  <span className="text-muted small">impressioni del post</span>
                  <p className="mb-0">
                    Crea un post per aumentare l'interesse.
                  </p>
                  <p className="text-muted small mt-1 mb-0">Ultimi 7 giorni</p>
                </div>
              </Col>
            </Row>
          </Card.Body>

          <Card.Footer className="p-0 border-0">
            <Button
              variant="light"
              className="w-100 py-2 text-center text-decoration-none fw-bold"
            >
              Mostra tutte le analisi →
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </Container>
  )
}

export default SezioneAnalisi
