import { Container, Row, Col } from "react-bootstrap"
import LeftBar from "./LeftBar"
import CreaPost from "./CreaPost"

const Home = () => {
  return (
    <Container className="mt-6">
      <Row>
        {/* Sinistra */}
        <Col xs={12} md={3}>
          <LeftBar />
        </Col>

        {/* Centro */}
        <Col xs={12} md={5}>
          <CreaPost />
        </Col>

        {/* Destra */}
        <Col xs={12} md={4}>
          {/* Qui puoi mettere suggerimenti, pubblicità, ecc. */}
        </Col>
      </Row>
    </Container>
  )
}

export default Home
