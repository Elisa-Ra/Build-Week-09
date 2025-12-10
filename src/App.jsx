import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import MyFooter from "./components/MyFooter"
import SuperiorNavBar from "./components/SuperiorNavBar"
import SezioneMessaggistica from "./components/SezioneMessaggistica"
import ProfileSections from "./components/ProfileSections"

function App() {
  return (
    <>
      <Container>
        <SuperiorNavBar />
        <ProfileSections />
        <MyFooter />
      </Container>

      <SezioneMessaggistica />
    </>
  )
}

export default App
