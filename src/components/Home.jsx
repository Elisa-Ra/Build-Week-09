import { Container, Row, Col } from "react-bootstrap"
import AsideNotizieDx from "./AsideNotizieDx"
import MyFooter from "./MyFooter"

const Home = () => {
  return (
    <>
      <Container className="ps-0" fluid>
        <Row className="mt-6 wh-100">
          <Col xs={12} lg={8}>
            sezione feed
          </Col>
          <Col lg={4} xs={12}>
            <AsideNotizieDx />
          </Col>
        </Row>
        <MyFooter />
      </Container>
    </>
  )
}

export default Home
