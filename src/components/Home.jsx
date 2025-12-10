import { Container, Row, Col } from "react-bootstrap"
import LeftBar from "./LeftBar"
import CreaPost from "./CreaPost"

const Home = () => {
  return (
    <>
      <Container className="mt-6">
        <Row>
          {/* Sinistra */}
          <Col xs={3}>
            <LeftBar />
          </Col>
          {/* Centro */}
          <Col xs={5}>
            <CreaPost />
          </Col>
          {/* Destra */}
          <Col xs={4}></Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
