import { Container, Row, Col, Image, Button } from "react-bootstrap"
import { useState } from "react"

// importare i dati del post

const PostCard = ({ post }) => {
  const [active, setActive] = useState(false)

  return (
    <Container className="p-2 mb-3 bg-white rounded border border-1 border-secondary-subtle">
      {/* Row con il mini hero dell'utente */}
      <Row>
        {/*IMMAGINE UTENTE */}
        {/* Colonna sinistra superiore */}
        <Col xs={2}>
          <Image
            fluid
            // src={props.img}
            src="https://placecats.com/48/48"
            className=" overflow-hidden border bg-light"
            style={{ width: "48px", height: "48px" }}
          ></Image>
        </Col>
        {/* Colonna centrale superiore */}
        <Col xs={8}>
          <Col>
            {/* Aggiungere nome */}
            <p className="my-0">
              <strong>{post.username}</strong>
            </p>
          </Col>
          <Col>
            <p className="fs-7 text-secondary mb-0">76.559 follower</p>
          </Col>
          {/* Aggiungere createdAt */}
          <Col>
            <p className="fs-7 text-secondary">
              {new Date(post.createdAt).toLocaleDateString("it-IT", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}{" "}
              • <i className="bi bi-globe-americas"></i>
            </p>
          </Col>
        </Col>
        {/* Colonna destra superiore */}
        <Col xs={2} className="ps-4">
          <Button className="bg-transparent p-0 border-0 pe-2" variant="light">
            <i className="bi bi-three-dots"></i>
          </Button>{" "}
          <Button className="bg-transparent p-0 border-0" variant="light">
            <i className="bi bi-x-lg"></i>
          </Button>{" "}
        </Col>
      </Row>
      {/* Row con il TESTO dell'utente */}
      <Row>
        <Col>
          <p>{post.text}</p>
        </Col>
      </Row>
      {/* La row qua sotto serve per l'immagine se è presente! */}
      <Row>
        <Col>
          {/* <Image
            // src={props.img}
            src="https://placecats.com/50/50"
            className=" overflow-hidden border bg-light"
            style={{ width: "48px", height: "48px" }}
          ></Image> */}
        </Col>{" "}
      </Row>
      {/* Row di pulsanti */}
      <Row>
        <Col xs={3} className="pe-0">
          <Button
            className={`bg-transparent p-0 border-0 ${
              active ? "text-primary" : ""
            }`}
            variant="light"
            onClick={() => setActive(!active)}
          >
            <i className="bi bi-hand-thumbs-up"></i>Consiglia
          </Button>{" "}
        </Col>
        <Col xs={3} className="px-0">
          <Button className="bg-transparent p-0 border-0" variant="light">
            <i className="bi bi-chat-text"></i>{" "}
            <p className="d-inline">Commenta</p>
          </Button>{" "}
        </Col>
        <Col xs={3} className="px-0">
          <Button className="bg-transparent p-0 border-0" variant="light">
            <i className="bi bi-arrow-repeat "></i>Diffondi il post
          </Button>{" "}
        </Col>

        <Col xs={3} className="pe-0">
          <Button className="bg-transparent p-0 border-0" variant="light">
            <i className="bi bi-send-fill"></i>{" "}
            <p className="d-inline">Invia</p>
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  )
}

export default PostCard
