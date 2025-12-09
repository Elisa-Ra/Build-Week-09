import { Container, Row, Col } from "react-bootstrap"

const Hero = () => {
  return (
    <>
      <Container className="border-3 bg-white">
        <Row>
          <Col xs={12}>Sopra</Col>
          <Col xs={12}>sotto</Col>
        </Row>
      </Container>
    </>
  )
}

export default Hero
