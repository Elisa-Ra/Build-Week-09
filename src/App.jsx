import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Hero from "./components/Hero"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SezioneAnalisi from "./components/SezioneAnalisi"
import RightAside from "./components/RightAside"
import { Col, Container, Row } from "react-bootstrap"
import SezioneAttivita from "./components/SezioneAttivita"
import Information from "./components/Information"
import MyFooter from "./components/MyFooter"
import ExperienceSection from "./components/ExperienceSection"
import EducationSection from "./components/EducationSection"
import SuperiorNavBar from "./components/SuperiorNavBar"
import SkillsSection from "./components/SkillsSection"
import LicensesSection from "./components/LicensesSection"
import SezioneLingue from "./components/SezioneLingue"
import HeroDinamic from "./components/HeroDinamic"

function App() {
  return (
    <>
      <Container>
        <SuperiorNavBar />
        <Row className="mt-6">
          <Col xs={8}>
            <HeroDinamic />
            <Hero />
            <SezioneAnalisi />
            <SezioneAttivita />
            <SezioneLingue />
            <Information />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <LicensesSection />
          </Col>
          <Col lg={4} xs={12}>
            <RightAside />
          </Col>
        </Row>
        <MyFooter />
      </Container>
    </>
  )
}

export default App
