import { Row, Col, Image } from "react-bootstrap"

const ExperienceCard = () => {
  return (
    <div className="p-2 mb-3">
      <Row>
        <Col xs={2}>
          {/* Logo azienda */}
          <Image
            src="https://placecats.com/50/50"
            className="rounded overflow-hidden border bg-light"
            style={{ width: "48px", height: "48px" }}
          ></Image>
        </Col>

        <Col xs={10}>
          <h6 className="fw-bold mb-0">Researcher</h6>
          <p className="mb-0  text-muted">Humanitas University</p>
          <p className="mb-0 small text-muted">
            ott 2023 – Presente · 2 anni 3 mesi
          </p>
          <p className="mb-2 small text-muted">Milano, Lombardia, Italia</p>

          <p className="small fw-semibold">
            Ricerca, Analisi dei dati e +7 competenze
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default ExperienceCard
