import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SezioneAnalisi from "./components/SezioneAnalisi"
import RightAside from "./components/RightAside"
import { Col, Container, Row } from "react-bootstrap"
import SezioneAttivita from "./components/SezioneAttivita"
import Information from "./components/Information"
import MyFooter from "./components/MyFooter"
import SuperiorNavBar from "./components/SuperiorNavBar"
import Interests from "./components/Interests"
import SezioneLingue from "./components/SezioneLingue"
import HeroDinamic from "./components/HeroDinamic"
import SezioneMessaggistica from "./components/SezioneMessaggistica"
import ProfileSections from "./components/ProfileSections"

function App() {
  return (
    <>
      <Container>
        <SuperiorNavBar />
        <Row className="mt-6">
          <Col xs={8}>
            <HeroDinamic />
            <SezioneAnalisi />
            <Information />
            <SezioneAttivita />
            <SezioneLingue />
            <ProfileSections />
            <Interests />
          </Col>
          <Col lg={4} xs={12}>
            <RightAside />
          </Col>
        </Row>
        <MyFooter />
      </Container>

      <SezioneMessaggistica />
    </>
  )
}

export default App
