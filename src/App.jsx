import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import SuperiorNavBar from "./components/SuperiorNavBar"
import SezioneMessaggistica from "./components/SezioneMessaggistica"
import ProfileSections from "./components/ProfileSections"
import Home from "./components/Home"

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <SuperiorNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfileSections />} />
          </Routes>
        </BrowserRouter>
        <SezioneMessaggistica />
      </Container>
    </>
  )
}

export default App
