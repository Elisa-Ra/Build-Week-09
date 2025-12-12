import { Container, Row, Col } from "react-bootstrap"
import LeftBar from "./LeftBar"
import CreaPost from "./CreaPost"
import Consigliati from "./Consigliati"
import AsideNotizieDx from "./AsideNotizieDx"
import PostCard from "./PostCard"

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
        <Col xs={12} md={6}>
          <CreaPost />
          <PostCard />
          <Consigliati />
        </Col>

        {/* Destra */}
        <Col xs={12} md={3}>
          <AsideNotizieDx />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
