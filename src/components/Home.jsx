import { Container, Row, Col } from "react-bootstrap"
import LeftBar from "./LeftBar"
import CreaPost from "./CreaPost"
import Consigliati from "./Consigliati"
import AsideNotizieDx from "./AsideNotizieDx"
import FormExperiences from "./FormExperiences"

const Home = () => {
  return (
    <Container className="mt-6">
      <title>LinkedIn</title>
      <Row>
        {/* Sinistra */}
        <Col xs={12} md={3}>
          <LeftBar />
        </Col>

        {/* Centro */}
        <Col xs={12} md={5}>
          <CreaPost />

          <Consigliati />
        </Col>

        {/* Destra */}
        <Col xs={12} md={4}>
          <AsideNotizieDx />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
