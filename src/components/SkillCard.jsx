import { Row, Col, Image } from "react-bootstrap"

const SkillCard = () => {
  return (
    <div className="p-2 mb-3">
      <h6 className="fw-semibold mb-1">Analisi dei dati</h6>

      <Row>
        <Col xs={2}>
          <Image
            src="https://placecats.com/50/50"
            className="rounded overflow-hidden border bg-light"
            style={{ width: "32px", height: "32px" }}
          ></Image>
        </Col>
        <Col xs={10}>
          <p className="mb-0 text-muted small">
            Researcher presso Humanitas University
          </p>
        </Col>
      </Row>
      <hr className="my-1" />
    </div>
  )
}

export default SkillCard
