import { useState } from 'react';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  deleteExpAction,
  getExpAction,
  putExpAction
} from '../redux/actions/experiencesAction';

function EditExperienceForm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const expID = props.expID;
  const dispatch = useDispatch();

  const formatDate = (date) =>
    date ? new Date(date).toISOString().split('T')[0] : '';

  const [values, setValues] = useState({
    role: props.role || '',
    company: props.company || '',
    startDate: formatDate(props.startD) || '',
    endDate: formatDate(props.endD) || null,
    area: props.area || '',
    description: props.description || ''
  });

  function editForm(formData) {
    const editExp = {
      role: formData.get('role'),
      company: formData.get('company'),
      endDate: formData.get('endDate'),
      startDate: formData.get('startDate'),
      area: formData.get('area'),
      description: formData.get('description')
    };

    console.log('Form da inviare:', editExp);

    dispatch(putExpAction(props.ID, expID, editExp));

    handleClose();
  }

  return (
    <>
      {/* Bottone per aprire il modal */}
      <Button variant="outline-primary rounded-pill" onClick={handleShow}>
        <i className="bi bi-pencil fs-5 text-muted"></i>
      </Button>

      {/* Modal vero e proprio */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica esperienza</Modal.Title>
        </Modal.Header>

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            editForm(formData);
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
                  fino a 2 ore. Scopri di più sulla{' '}
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
                value={values.role}
                required
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCompany">
              <Form.Label>Azienda o organizzazione*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Microsoft"
                name="company"
                value={values.company}
                required
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formStartDate">
              <Form.Label>Data di inizio*</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={values.startDate}
                required
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEndDate">
              <Form.Label>Data di fine</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={values.endDate}
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formArea">
              <Form.Label>Località</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Milano, Italia"
                name="area"
                value={values.area}
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}
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
                value={values.description}
                onChange={(e) => {
                  setValues({ ...values, [e.target.name]: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMedia">
              <p className="mb-0">
                <strong>Media</strong>
              </p>
              <p className="text-muted fs-7">
                Aggiungi contenuti multimediali come immagini, documenti, siti o
                presentazioni. Scopri di più sui{' '}
                <strong className="text-primary">
                  tipi di file multimediali supportati
                </strong>
                .
              </p>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer className="justify-content-between">
            <Button
              className="no-wrap"
              variant=" rounded-pill py-0 bg-danger text-white"
              type="button"
              onClick={() => {
                dispatch(deleteExpAction(props.ID, expID));
                console.log('esperienza cancellata');
                dispatch(getExpAction(props.ID));
              }}
            >
              <i className="bi bi-x-octagon text-white"></i> Elimina esperienza
            </Button>

            <Button
              className="no-wrap"
              variant="primary rounded-pill py-0"
              type="submit"
            >
              Salva modifiche
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditExperienceForm;
