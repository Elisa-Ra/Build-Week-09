import React from 'react';

const IMAGE_URL = "https://img.freepik.com/foto-gratuito/foto-del-modello-di-consistenza-della-pietra_58702-16052.jpg?semt=ais_hybrid&w=740&q=80";

const styles = {
  img: {
    width: "48px",
    height: "48px",
    objectFit: "cover",
  
  },
  followBtn: {
    minWidth: "80px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  }
};

const Consigliati = () => {
  return (
    <div className="card p-3 shadow-sm mx-auto" style={{ maxWidth: "600px" }}>

      <div className="fw-semibold mb-2">Consigli per te</div>
      <hr className="mt-0 mb-2" />
      <div className="d-flex align-items-center py-3">

        <img src={IMAGE_URL} alt="logo" style={styles.img} className="me-3" />

        <div className="flex-grow-1">
          <div className="fw-bold">Sintak Srl</div>
          <div className="text-secondary small">Total Solution Provider</div>

          <div className="text-secondary" style={{ fontSize: "0.7rem" }}>
            <i className="bi bi-graph-up-arrow me-1"></i>
            Le persone che vivono in italia seguono anche queste pagine
          </div>
        </div>

        <button className="btn btn-outline-primary btn-sm rounded-pill"
          style={styles.followBtn}>
          + Segui
        </button>
      </div>

      <hr className="my-0" />
      <div className="d-flex align-items-center py-3">

        <img src={IMAGE_URL} alt="logo" style={styles.img} className="me-3" />

        <div className="flex-grow-1">
          <div className="fw-bold">Trenitalia</div>
          <div className="text-secondary small">La rivoluzione della mobilità è green.</div>
        </div>

        <button className="btn btn-outline-primary btn-sm rounded-pill"
          style={styles.followBtn}>
          + Segui
        </button>
      </div>

      <hr className="my-0" />

      <div className="d-flex align-items-center py-3">

        <img src={IMAGE_URL} alt="logo" style={styles.img} className="me-3" />

        <div>
          <div className="fw-bold">Tango Brook</div>
          <div className="text-secondary small">
            Harnessing technology <br/>with industry expertise 
             to solve  real-world challenges.
          </div>
        </div>

        <button className="btn btn-outline-primary btn-sm rounded-pill"
          style={styles.followBtn}>
          + Segui
        </button>
      </div>

      <div className="text-center mt-3 pt-2 border-top">
        <a href="#" className="fw-semibold text-primary text-decoration-none">
          Visualizza altro <i className="bi bi-arrow-right"></i>
        </a>
      </div>

    </div>
  );
};

export default Consigliati;
