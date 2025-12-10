import { useState } from "react"
import {
  Button,
  Form,
  Modal,
  Row,
  Col,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap"

function FormExperiences() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      {/* Bottone per aprire il modal */}
      <Button variant="outline-primary rounded-pill" onClick={handleShow}>
        Aggiungi esperienza
      </Button>

      {/* Modal vero e proprio */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="mb-0">Informa la rete</p>
          <Row>
            <Col md={10}>
              {" "}
              <p className="text-muted fs-7">
                Attiva l'opzione per informare la tua rete delle principali
                modifiche al profilo (ad esempio un nuovo lavoro) e degli
                anniversari lavorativi. Gli aggiornamenti possono richiedere
                fino a 2 ore. Scopri di più sulla{" "}
                <strong className="text-primary">
                  condivisione delle modifiche del profilo
                </strong>
                .
              </p>{" "}
            </Col>
            <Col md={2}>
              <Form.Group className="mb-3 d-inline-flex" controlId="formSwitch">
                <span className="me-2">Si</span>

                <Form.Check type="switch" id="custom-switch" label="" />
              </Form.Group>
            </Col>
          </Row>
          <Form>
            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>Qualifica*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Retail Sales Manager"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCompany">
              <Form.Label>Azienda o organizzazione*</Form.Label>
              <Form.Control type="text" placeholder="Esempio: Microsoft" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formStartDate">
              <Form.Label>Data di inizio*</Form.Label>
              <Form.Control type="month" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEndDate">
              <Form.Label>Data di fine*</Form.Label>
              <Form.Control type="month" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formarea">
              <Form.Label>Località</Form.Label>
              <Form.Control type="text" placeholder="Esempio: Milano, Italia" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                maxLength={2000}
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMedia">
              <p className="mb-0">
                <strong>Media</strong>
              </p>
              <p className="text-muted fs-7">
                Aggiungi contenuti multimediali come immagini, documenti, siti o
                presentazioni. Scopri di più sui{" "}
                <strong className="text-primary">
                  tipi di file multimediali supportati
                </strong>
                .
              </p>
              <div className="d-flex align-items-center">
                <Button variant="outline-primary rounded-pill py-0">
                  + Aggiungi media
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary rounded-pill py-0" type="submit">
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default FormExperiences

// Modello dell'EXPERIENCE:
// {
//
//
//
//
//
//   "username": "mario88", // SERVER GENERATED
//   "image": ..., // SERVER GENERATED, inizialmente null, modificabile

// }
