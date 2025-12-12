import { Container, Row, Col, Image } from "react-bootstrap"
// importare i dati del post

const PostCard = () => {
  return (
    <Container className="p-2 mb-3 bg-white rounded border border-1 border-secondary-subtle">
      {/* Row con il mini hero dell'utente */}
      <Row>
        {/*IMMAGINE UTENTE */}
        {/* Colonna sinistra superiore */}
        <Col xs={2}>
          <Image
            // src={props.img}
            src="https://placecats.com/50/50"
            className=" overflow-hidden border bg-light"
            style={{ width: "48px", height: "48px" }}
          ></Image>
        </Col>
        {/* Colonna centrale superiore */}
        <Col xs={8}>
          <Col>
            {/* Aggiungere nome */}
            <p className="my-0">
              <strong>Nome</strong>
            </p>
          </Col>
          <Col>
            <p className="fs-7 text-secondary mb-0">76.559 follower</p>
          </Col>
          {/* Aggiungere createdAt */}
          <Col>
            <p className="fs-7 text-secondary">
              createdAt • <i className="bi bi-globe-americas"></i>
            </p>
          </Col>
        </Col>
        {/* Colonna destra superiore */}
        <Col xs={2}>
          <i className="bi bi-three-dots"></i> <i class="bi bi-x-lg"></i>
        </Col>
      </Row>
      {/* Row con il TESTO dell'utente */}
      <Row>
        <Col>
          <p>aggiungere testo utente</p>
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
          <i className="bi bi-hand-thumbs-up"></i>
          <p className="d-inline fs-6">Consiglia</p>
        </Col>
        <Col xs={3} className="px-0">
          <i className="bi bi-chat-text"></i>{" "}
          <p className="d-inline">Commenta</p>
        </Col>
        <Col xs={3} className="px-0">
          <i className="bi bi-arrow-repeat"></i>{" "}
          <p className="d-inline">Diffondi il post</p>
        </Col>
        <Col xs={3} className="pe-0">
          <i className="bi bi-send-fill"></i> <p className="d-inline">Invia</p>
        </Col>
      </Row>
    </Container>
  )
}

export default PostCard
