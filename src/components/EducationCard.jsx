import { Row, Col, Image } from "react-bootstrap"

const EducationCard = () => {
  return (
    <div className="p-2 mb-3">
      <Row>
        <Col xs={2}>
          <Image
            src="https://placecats.com/50/50"
            className="rounded overflow-hidden border bg-light"
            style={{ width: "48px", height: "48px" }}
          ></Image>
        </Col>

        <Col xs={10}>
          <h6 className="fw-bold mb-0">Hopital Cardiologique de Lille</h6>
          <p className="mb-0">
            Borsa di Ricerca in Cardiochirurgia e Chirurgia Vascolare
          </p>
          <p className="mb-1 text-muted">2014 – 2015</p>
        </Col>
      </Row>
    </div>
  )
}

export default EducationCard
