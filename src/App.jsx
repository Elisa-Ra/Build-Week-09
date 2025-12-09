import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Hero from "./components/Hero"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SezioneAnalisi from "./components/SezioneAnalisi"
import RightAside from "./components/RightAside"
import { Col, Container, Row } from "react-bootstrap"

function App() {
  return <>(
    <Container>
      <Row>

        <Col xs={8}>
          <Hero />
        </Col>
        <Col xs={4}>
          <RightAside />
        </Col>
      </Row>
    </Container>
  )

</>
}

export default App
