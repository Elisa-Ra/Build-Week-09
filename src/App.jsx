import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import SuperiorNavBar from "./components/SuperiorNavBar"
import SezioneMessaggistica from "./components/SezioneMessaggistica"
import ProfileSections from "./components/ProfileSections"
import Home from "./components/Home"
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Container>
            <SuperiorNavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<ProfileSections />} />
            </Routes>
            <SezioneMessaggistica />
          </Container>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
