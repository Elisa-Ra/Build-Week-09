import { Container } from "react-bootstrap"
import CreaPost from "./CreaPost"
import Consigliati from "./Consigliati"
const Home = () => {
  return (
    <>
      <Container fluid>
        <h1>HOME</h1>
      </Container>
      <CreaPost/>
      <Consigliati/>
    </>
  )
}

export default Home
