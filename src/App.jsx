import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SuperiorNavBar from './components/SuperiorNavBar';
import SezioneMessaggistica from './components/SezioneMessaggistica';
import ProfileSections from './components/ProfileSections';
import Home from './components/Home';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
