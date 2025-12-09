import React from "react"
import { Container, Row, Col, Dropdown } from "react-bootstrap"
import { IoShieldHalf } from "react-icons/io5"

const Footer = function () {
  return (
    <>
      <Container>
        <Row className="text-muted">
          <Col lg={2} md={4} sm={6} xs={12} className="mb-4">
            <ul className="list-unstyled">
              <li className="text-dark mb-2">Informazioni</li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Informativa sulla community professionale
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  privacy e condizioni
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Sales Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Centro Sicurezza
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={4} sm={6} xs={12} className="mb-3">
            <ul className="list-unstyled">
              <li className="text-dark mb-2">Accessibilità</li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Carriera
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Opzioni per gli annunci pubblicitari
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Mobile
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={4} sm={6} xs={12} className="mb-3">
            <ul className="list-unstyled">
              <li className="text-dark mb-2">Talent Solutions</li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Soluzioni di marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  pubblicità
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Piccole imprese
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={4} sm={6} xs={12} className="mb-4">
            <div className="d-flex align-items-start text-muted mb-3">
              <span>
                <i class="bi bi-question-circle-fill"></i>
              </span>
              <a href="#" className="text-decoration-none">
                <strong className="text-dark">Domande</strong>
                <p className="mb-0 small text-muted">
                  Visita il nostro Centro assistenza
                </p>
              </a>
            </div>
            <div className="d-flex align-items-start text-muted mb-3">
              <span>
                <i class="bi bi-gear-fill"></i>
                <a href="#" className="text-decoration-none">
                  <strong className="text-dark">
                    Gestisci il tuo account e la tua privacy
                  </strong>
                  <p className="mb-0 small text-muted">Vai alle impostazioni</p>
                </a>
              </span>
            </div>
            <div className="d-flex align-items-start text-muted mb-3">
              <span>
                <IoShieldHalf />
              </span>
              <a href="#" className="text-decoration-none">
                <strong className="text-dark">
                  Trasparenza sui contenuti consigliati
                </strong>
                <p className="mb-0 small text-muted">
                  Scopri di più sui contenuti consigliati
                </p>
              </a>
            </div>
          </Col>
          <Col lg={2} md={4} sm={6} xs={12} className="mb-4">
            <strong className="text-dark ">Seleziona lingua</strong>
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-language"
                className="w-100 text-start"
              >
                Italiano (italiano)
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Italiano(Italiano)</Dropdown.Item>
                <Dropdown.Item href="#">English(English)</Dropdown.Item>
                <Dropdown.Item href="#">Deutsch(Tedesco)</Dropdown.Item>
                <Dropdown.Item href="#">Français(Français)</Dropdown.Item>
                <Dropdown.Item href="#">Nederlands(Olandese)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <p className="text-muted">
          LinkedIn Corporation <i class="bi bi-c-circle"></i> 2025
        </p>
      </Container>
    </>
  )
}

export default Footer
