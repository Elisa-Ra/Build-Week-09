import { useState } from "react"
import { Button, Form, Modal, Row, Col } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { putExpAction, getExpAction } from "../redux/actions/experiencesAction"
function EditExperienceForm({
  ID,
  expID,
  role,
  company,
  startDate,
  endDate,
  area,
  description,
}) {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  const [values, setValues] = useState({
    role: role || "",
    company: company || "",
    startDate: startDate || "",
    endDate: endDate || "",
    area: area || "",
    description: description || "",
  })

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSave = (e) => {
    e.preventDefault()
    // aggiorna sul server
    dispatch(putExpAction(ID, expID, values))
    // ricarica la lista aggiornata
    dispatch(getExpAction(ID))

    console.log("Form da inviare:", values)
    setShow(false)
  }

  // const handleDelete = () => {
  //   dispatch(deleteExpAction(props.ID, expID, editExp))
  //   setShow(false)
  // }

  return (
    <>
      <Button
        variant="outline-primary rounded-pill"
        onClick={() => setShow(true)}
      >
        <i className="bi bi-pencil fs-5 text-muted"></i>
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica esperienza</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSave}>
          <Modal.Body>
            {/* Campi del form */}
            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>Qualifica*</Form.Label>
              <Form.Control
                type="text"
                name="role"
                value={values.role}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCompany">
              <Form.Label>Azienda*</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={values.company}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formStartDate">
              <Form.Label>Data di inizio*</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={values.startDate}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEndDate">
              <Form.Label>Data di fine</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={values.endDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formArea">
              <Form.Label>Località</Form.Label>
              <Form.Control
                type="text"
                name="area"
                value={values.area}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer className="justify-content-between">
            <Button variant="danger rounded-pill py-0">
              {/* onClick={handleDelete} */}
              <i className="bi bi-x-octagon text-white"></i> Elimina esperienza
            </Button>

            <Button variant="primary rounded-pill py-0" type="submit">
              Salva modifiche
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default EditExperienceForm
