import { Col, Image, Row } from "react-bootstrap"

const LicensesCard = ({ cert }) => {
  return (
    <>
      <Row>
        <Col xs={2}>
          {/* Logo azienda */}
          <Image
            src={cert.img}
            alt={cert.title}
            className="rounded overflow-hidden border bg-light"
            style={{ width: "48px", height: "48px" }}
          ></Image>
        </Col>

        <Col xs={10}>
          <h6 className="fw-bold ">{cert.title}</h6>
          {cert.issuer && <p className="mb-0 text-muted">{cert.issuer}</p>}
          <p className="small text-muted mb-0">Data di rilascio: {cert.date}</p>
        </Col>
      </Row>
      <hr />
    </>
  )
}
export default LicensesCard
