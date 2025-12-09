import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const SezioneAttivita = () => {
  return (
    <div className="col-12 col-md-4 border rounded shadow-sm bg-white p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fs-5 fw-bold mb-0">Attività</h2>
        <div className="d-flex align-items-center">
          <button
            type="button"
            className="btn btn-outline-primary rounded-pill me-2 py-1 px-3"
          >
            Crea un post
          </button>
          <i className="bi bi-pencil fs-5 text-muted"></i>
        </div>
      </div>

      <p className="text-muted fw-bold mb-3">
        0 <span className="fw-normal">follower</span>
      </p>

      <div className="my-5 text-center text-md-start">
        <h3 className="fs-5 fw-bold mb-1">Non hai ancora pubblicato nulla</h3>
        <p className="text-muted small">I post che condividi appariranno qui</p>
      </div>

      <div className="text-center text-md-start mt-4">
        <a href="#attivita" className="text-decoration-none fw-bold">
          Mostra tutte le attività &rarr;
        </a>
      </div>
    </div>
  )
}

export default SezioneAttivita
