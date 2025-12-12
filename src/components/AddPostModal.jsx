import { useState } from 'react'
import { Button, Form, Modal, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import MiniHero from './MiniHero'

function AddPostModal(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  function getPost(formData) {
    const newPost = {
      text: formData.get('text') || ''
    }

    dispatch(postPostAction(props.ID, newPost))

    console.log('Post da inviare:', newPost)

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
            getPost(formData)
          }}
        >
          <Modal.Body>
            <MiniHero />
            <Row>
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
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Control
                as="textarea"
                rows={3}
                maxLength={2000}
                placeholder="Di cosa vorresti parlare?"
                name="text"
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary rounded-pill py-0" type="submit">
              Pubblica
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default AddPostModal
