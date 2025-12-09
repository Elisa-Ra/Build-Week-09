import { Container, Row, Col } from 'react-bootstrap';

const AziendeDropdownDetails = () => {
  const array1 = [
    'Assumi su Linkedin',
    'Vendi su Linkedin',
    'Offerta di lavoro gratuita',
    'Fai pubblicità su Linkedin',
    'Inizia con Permium',
    'Impara con Linkedin',
    'Centro per amministratori'
  ];
  const array2 = [
    'Trova, attrai e assumi',
    'Sblocca nuove opportunità di vendita',
    'Ottieni rapidamente candidati qualificati',
    'Acquisisci clienti e fai crescere la tua azienda',
    'Amplia e sfrutta la tua rete',
    'Corsi per formare i tuoi dipendenti',
    'Gestisci i dettagli di fatturazione e account'
  ];

  return (
    <Container>
      <Row className="fs-7 flex-nowrap">
        <Col xs="auto" className="border-end-1">
          <h6 className="mb-3">Le mie app</h6>
          <Row className="flex-column justify-content-between g-2">
            <Col className="mb-2">
              <h6 className="fs-7">Vendi</h6>
              <h6 className="fs-7">Gruppi</h6>
              <h6 className="fs-7">Gestisci fatturazione</h6>
            </Col>
            <Col className="mb-2">
              <p className="text-muted">Talent</p>
              <h6 className="fs-7">Talent insights</h6>
              <h6 className="fs-7">Pubblica un'offerta di lavoro</h6>
            </Col>
            <Col className="mb-2">
              <p className="text-muted">Vendite</p>
              <h6 className="fs-7">Talent insights</h6>
            </Col>
            <Col className="mb-2">
              <p className="text-muted">Marketing</p>
              <h6 className="fs-7">Pubblicizza</h6>
            </Col>
            <Col className="mb-2">
              <p className="text-muted">Learning</p>
              <h6 className="fs-7">Learning</h6>
            </Col>
          </Row>
        </Col>
        <Col xs="auto">
          <h6>Scopri altro per il business</h6>
          <Row className="g-2">
            {array1.map((item, index) => {
              return (
                <Col key={index} xs={12}>
                  <h6 className="fs-7">{item}</h6>
                  <p className="fs-8">{array2[index]}</p>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AziendeDropdownDetails;
