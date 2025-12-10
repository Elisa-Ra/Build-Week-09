import {
  Button,
  Card,
  Image,
  DropdownButton,
  DropdownItem,
  Collapse,
  Container,
  Col,
  Row
} from 'react-bootstrap';
import { MdArrowForwardIos } from 'react-icons/md';
import { TbDots } from 'react-icons/tb';
import { FaSquare } from 'react-icons/fa6';

const AsideNotizieDx = () => {
  const arrayNotizie = [
    'Netflix compra Warner Bros.',
    'In malattia con la televisita',
    'Mediaset acquisisce Radio Norba',
    'La Bei finanzia Scalapay',
    "Com'è andato alla fine il Black Friday"
  ];
  const arrayDate = [
    '1 giorno fa',
    '17 ore fa',
    '17 ore fa',
    '3 ore fa',
    '23 ore fa'
  ];

  return (
    <>
      <title>Profile Page</title>
      <Card className="mb-2">
        <Card.Body>
          <Card.Text className="fw-bold fs-5">Linkedin Notizie</Card.Text>
          <Card.Text className="text-muted">Storie principali</Card.Text>

          <div className="d-flex justify-content-between">
            <Card.Body>
              {/* sezione notizie */}
              {arrayNotizie.map((articolo, index) => {
                return (
                  <div key={index}>
                    <Card.Text className="fw-bold fs-7 mb-0">
                      {articolo}
                    </Card.Text>
                    <Card.Text className="text-muted fs-7 mb-2">
                      {arrayDate[index]}
                    </Card.Text>
                  </div>
                );
              })}
              <DropdownButton size="sm" title="Mostra altro" variant="light">
                <DropdownItem>Ti piacerebbe!!</DropdownItem>
              </DropdownButton>
              {/* sezione giochi */}
              <Card.Text className="text-muted fs-6 mt-2">
                I giochi di oggi
              </Card.Text>
              <Container>
                <Row className="flex-column">
                  <Col xs={12}>
                    <Row className="align-items-center justify-content-start">
                      <Col xs={2}>
                        <Image
                          src="src\assets\img\zip.png"
                          className="mini-img"
                        ></Image>
                      </Col>
                      <Col xs={7}>
                        <Card.Text className="fw-bold fs-7 mb-0">
                          {'Zip #268'}
                        </Card.Text>
                        <Card.Text className="text-muted fs-8 text-nowrap">
                          Completa il percorso
                        </Card.Text>
                      </Col>
                      <Col xs={3}>
                        <MdArrowForwardIos />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12}>
                    <Row className="align-items-center justify-content-start">
                      <Col xs={2}>
                        <Image
                          src="src\assets\img\sudoku.png"
                          className="mini-img"
                        ></Image>
                      </Col>
                      <Col xs={7}>
                        <Card.Text className="fw-bold fs-7 mb-0">
                          {'Mini Sudoku #121'}
                        </Card.Text>
                        <Card.Text className="text-muted fs-8 text-nowrap">
                          Il gioco classico in versione mini
                        </Card.Text>
                      </Col>
                      <Col xs={3}>
                        <MdArrowForwardIos />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12}>
                    <Row className="align-items-center justify-content-start">
                      <Col xs={2}>
                        <Image
                          src="src\assets\img\tango.png"
                          className="mini-img"
                        ></Image>
                      </Col>
                      <Col xs={7}>
                        <Card.Text className="fw-bold fs-8 mb-0">
                          {'Tango #429'}
                        </Card.Text>
                        <Card.Text className="text-muted fs-7 text-nowrap">
                          Armonizza la griglia
                        </Card.Text>
                      </Col>
                      <Col xs={3}>
                        <MdArrowForwardIos />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12}>
                    <Row className="align-items-center justify-content-start">
                      <Col xs={2}>
                        <Image
                          src="src\assets\img\queens.png"
                          className="mini-img"
                        ></Image>
                      </Col>
                      <Col xs={7}>
                        <Card.Text className="fw-bold fs-7 mb-0">
                          {'Queens #589'}
                        </Card.Text>
                        <Card.Text className="text-muted fs-8 text-nowrap">
                          Incorona ogni regione
                        </Card.Text>
                      </Col>
                      <Col xs={3}>
                        <MdArrowForwardIos />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
              <DropdownButton size="sm" title="Mostra altro" variant="light">
                <DropdownItem>Ti piacerebbe!!</DropdownItem>
              </DropdownButton>
            </Card.Body>
            <i className="bi bi-pencil"></i>
          </div>
        </Card.Body>
      </Card>
      {/* sezione annuncio */}
      <Card>
        <Card.Body>
          <Card.Text className="fw-bold fs-7 mb-0 text-end">
            Annuncio
            <TbDots className="ms-2" />
          </Card.Text>
          <Card.Text className="text-muted fs-7 mb-2">
            {'nome utente'}, enjoy 50% off 2 months of Linkedin Premium
          </Card.Text>
          <Container>
            <Row className="flex-nowrap justify-content-center align-items-center">
              <Col className="d-flex justify-content-end">
                <Image
                  src="https://placebear.com/100/100"
                  className="p-0 w-75"
                  roundedCircle
                  fluid="true"
                ></Image>
              </Col>
              <Col className="d-flex justify-content-start align-items-center">
                <Card.Text>
                  <FaSquare fill="#E7A33E" className="me-2" />
                  Premium
                </Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      {/* sezione Prova Windows */}
      <Card className='mb-3'>
        <Card.Body>
          <Container fluid>
            <Row className="justify-content-between align-items-center">
              <Col xs={4} className="me-1">
                <Button className="badge-oro text-black" disabled>
                  <strong>SUGGERIMENTO</strong>
                </Button>
              </Col>
              <Col xs={7}>
                <Card.Text className="fw-muted fs-7">
                  Prova Linkedin sull'app per Windows
                </Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default AsideNotizieDx;
