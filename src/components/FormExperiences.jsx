import { useState } from "react"
import { Button, Form, Modal, Row, Col } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { postExpAction } from "../redux/actions/experiencesAction"

function FormExperiences(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  function getForm(formData) {
    const newExp = {
      role: formData.get("role") || "",
      company: formData.get("company") || "",
      endDate: formData.get("endDate") || null,
      startDate: formData.get("startDate") || "",
      area: formData.get("area") || "",
      description: formData.get("description") || "",
    }

    //  "role": "Full Stack Web Developer",
    //   "company": "FizzBuzz",
    //   "startDate": "2022-06-16",
    //   "endDate": "2023-06-16", // può essere null
    //   "description": "Implementing new features",
    //   "area": "Milan",
    //   "username": "mario88", // SERVER GENERATED
    //   "image": ..., // SERVER GENERATED, inizialmente null, modificabile
    //   "createdAt": 2023-06-16T19:58:31.019Z", // SERVER GENERATED
    //   "updatedAt": "2023-06-16T19:58:31.019Z", // SERVER GENERATED
    //   "__v": 0 // SERVER GENERATED
    //   "_id": "5d925e677360c41e0046d1f5" // SERVER GENERATED

    dispatch(postExpAction(props.ID, newExp))

    // Qua bisogna dire cosa fare con i dati del form ->  POST https://striveschool-api.herokuapp.com/api/profile/:userId/experiences

    console.log("Form da inviare:", newExp)

    handleClose()
  }

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

        <Form
          onSubmit={(e) => {
            e.preventDefault() // evita il refresh della pagina
            const formData = new FormData(e.target)
            getForm(formData)
          }}
        >
          <Modal.Body>
            <p className="mb-0">Informa la rete</p>
            <Row>
              <Col md={10}>
                <p className="text-muted fs-7">
                  Attiva l'opzione per informare la tua rete delle principali
                  modifiche al profilo (ad esempio un nuovo lavoro) e degli
                  anniversari lavorativi. Gli aggiornamenti possono richiedere
                  fino a 2 ore. Scopri di più sulla{" "}
                  <strong className="text-primary">
                    condivisione delle modifiche del profilo
                  </strong>
                  .
                </p>
              </Col>
              <Col md={2}>
                <Form.Group
                  className="mb-3 d-inline-flex"
                  controlId="formSwitch"
                >
                  <span className="me-2">Si</span>
                  <Form.Check type="switch" id="custom-switch" label="" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>Qualifica*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Retail Sales Manager"
                name="role"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCompany">
              <Form.Label>Azienda o organizzazione*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Microsoft"
                name="company"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formStartDate">
              <Form.Label>Data di inizio*</Form.Label>
              <Form.Control type="date" name="startDate" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEndDate">
              <Form.Label>Data di fine*</Form.Label>
              <Form.Control type="date" name="endDate" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formArea">
              <Form.Label>Località</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Milano, Italia"
                name="area"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                maxLength={2000}
                placeholder=""
                name="description"
                required
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
              {/* <div className="d-flex align-items-center">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label
                    className="btn btn-outline-primary rounded-pill py-0"
                    style={{ cursor: 'pointer' }}
                  >
                    + Aggiungi media
                  </Form.Label>
                  <Form.Control type="file" name="media" hidden />
                </Form.Group>
              </div> */}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary rounded-pill py-0" type="submit">
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default FormExperiences
