import { Container, Row, Col } from 'react-bootstrap';
import { IoMdCompass } from 'react-icons/io';
import { HiUserGroup } from 'react-icons/hi';
import { RiFileSettingsLine } from 'react-icons/ri';
import { MdOutlineBarChart } from 'react-icons/md';
import { BsFillClipboardMinusFill } from 'react-icons/bs';
import { HiCheck } from 'react-icons/hi';
import { GoGoal } from 'react-icons/go';
import { BsPlayBtnFill } from 'react-icons/bs';

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
        <Col xs="auto" className="border-end border-end-1 ms-2">
          <h6 className="mb-3">Le mie app</h6>
          <Row className="flex-column justify-content-between g-2">
            <Col className="mb-2 text-nowrap">
              <h6 className="fs-7">
                <IoMdCompass fill="#0A65C0" className="me-1" />
                Vendi
              </h6>
              <h6 className="fs-7">
                <HiUserGroup fill="#0A65C0" className="me-1" /> Gruppi
              </h6>
              <h6 className="fs-7">
                <RiFileSettingsLine fill="#0A65C0" className="me-1" />
                Gestisci fatturazione
              </h6>
            </Col>
            <Col className="mb-2">
              <p className="text-muted">Talent</p>
              <h6 className="fs-7">
                {' '}
                <MdOutlineBarChart fill="#0A65C0" className="me-1" /> Talent
                insights
              </h6>
              <h6 className="fs-7">
                <BsFillClipboardMinusFill fill="#0A65C0" className="me-1" />{' '}
                Pubblica un'offerta di lavoro
              </h6>
            </Col>
            <Col className="mb-2">
              <p className="text-muted">Vendite</p>
              <h6 className="fs-7">
                <HiCheck fill="#0A65C0" className="me-1" />
                Marketplace dei servizi
              </h6>
            </Col>
            <Col className="mb-2">
              <p className="text-muted">Marketing</p>
              <h6 className="fs-7">
                <GoGoal fill="#0A65C0" className="me-1" />
                Pubblicizza
              </h6>
            </Col>
            <Col className="mb-2">
              <p className="text-muted">Learning</p>
              <h6 className="fs-7">
                <BsPlayBtnFill fill="#0A65C0" className="me-1" /> Learning
              </h6>
            </Col>
          </Row>
        </Col>
        <Col xs="auto" className="ms-4">
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
