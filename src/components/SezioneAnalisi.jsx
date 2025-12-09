import { Card, Row, Col, Button } from 'react-bootstrap';
import { IoEyeOutline, IoBarChartOutline } from 'react-icons/io5'; 
import { PiChartLineFill } from "react-icons/pi"; 

const SezioneAnalisi = () => {
  return (
    <div 
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        width: '100%',       
        minWidth: '250px'     
      }}
    >
      <Card className="mb-0 border-0">
        <Card.Body className="p-3"> 
          <h5 className="fw-bold mb-1">Analisi</h5>
      
          <p className="text-secondary small d-flex align-items-center mb-3">
            <IoEyeOutline className="me-1" style={{ fontSize: '1.1rem' }} /> Solo per te
          </p>

          <Row className="mb-2">
            <Col xs="auto" className="pe-0">
              <PiChartLineFill style={{ fontSize: '1.2rem' }} />
            </Col>
            <Col>
              <span className="fw-bold me-1">0</span>
              <span className="text-dark small">visualizzazioni del profilo</span>
              <p className="mt-1">
                Aggiorna il tuo profilo per attrarre visitatori.
              </p>
            </Col>
          </Row>

          <hr className="my-2" />

          <Row className="mb-2">
            <Col xs="auto" className="pe-0">
              <IoBarChartOutline style={{ fontSize: '1.2rem' }} />
            </Col>
            <Col>
              <span className="fw-bold me-1">0</span>
              <span className="text-dark small">impressioni del post</span>
              <p className="mb-0">
                Crea un post per aumentare l'interesse.
              </p>
              <p className="text-muted small mt-1 mb-0">
                Ultimi 7 giorni
              </p>
            </Col>
          </Row>
          
        </Card.Body>

        <Card.Footer className="p-0 border-0">
          <Button 
            variant="light" 
            className="w-100 py-2 text-center text-decoration-none fw-bold">
            Mostra tutte le analisi →
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default SezioneAnalisi;
