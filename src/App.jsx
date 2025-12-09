import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Hero from "./components/Hero"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RightAside from "./components/RightAside"
import { Col, Container, Row } from "react-bootstrap"
import SezioneAnalisi from "./components/SezioneAnalisi"
import Information from "./components/Information"
import Footer from "./components/Footer"

function App() {
  return (
    <Container>
      <Row>
        <Col lg={8} xs={12}>
          <Hero />
          <SezioneAnalisi />
          <Information />
        </Col>

        <Col lg={4} xs={12}>
          <RightAside />
        </Col>
      </Row>
      <Footer />
    </Container>
  )
}

export default App
