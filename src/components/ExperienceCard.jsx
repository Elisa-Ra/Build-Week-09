import { Row, Col, Image } from "react-bootstrap"

const ExperienceCard = (props) => {
  return (
    <div className="p-2 mb-3">
      <Row>
        <Col xs={2}>
          {/* Logo azienda */}
          <Image
            src={props.img}
            className="rounded overflow-hidden border bg-light"
            style={{ width: "48px", height: "48px" }}
          ></Image>
        </Col>

        <Col xs={10}>
          <h6 className="fw-bold mb-0">{props.role}</h6>
          <p className="mb-0  text-muted">{props.company}</p>
          <p className="mb-0 small text-muted">
            {props.startD} '-' {props.endD ? props.endD : "Presente"}
            {/* · 2 anni 3 mesi */}
          </p>
          <p className="mb-2 small text-muted">{props.area}</p>

          <p className="small fw-semibold">{props.description}</p>
        </Col>
      </Row>
    </div>
  )
}

export default ExperienceCard
