import { Container } from "react-bootstrap"
import CreaPost from "./CreaPost"

const Home = () => {
  return (
    <>
      <Container className="mt-6">
        <Row>
          <Col>
            {" "}
            <h1>HOME</h1>
          </Col>
        </Row>
      </Container>
      <CreaPost/>
    </>
  )
}

export default Home
