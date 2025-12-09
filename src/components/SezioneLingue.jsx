import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

const SezioneLingue = () => {
  return (
    <Container className=" mx-2 mb-5 mt-0 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle">
      <div className="col-12 bg-white border rounded p-3">
        <h2 className="fs-5 fw-bold mb-4">Lingue</h2>
        <div className="mb-3">
          <p className="fw-bold mb-1">English</p>
          <p className="text-muted small mb-2">
            Conoscenza professionale completa
          </p>
        </div>
        <hr />
        <div className="my-3">
          <p className="fw-bold mb-1">French</p>
          <p className="text-muted small mb-2">
            Conoscenza lavorativa limitata
          </p>
        </div>

        <hr />
        <div className="text-center mt-3">
          <a href="#lingue" className="text-decoration-none fw-semibold">
            Mostra tutte le lingue (5) &rarr;
          </a>
        </div>
      </div>
    </Container>
  )
}

export default SezioneLingue
