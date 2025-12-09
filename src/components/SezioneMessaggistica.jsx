import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SezioneMessaggistica = () => {
  return (
    <div
      className="bg-white border rounded shadow p-2 position-fixed"
      style={{
        right: "20px",
        bottom: "0",
        zIndex: 9999,
      }}
    >
      <div className="w-100 w-sm-75 w-md-50 w-lg-30 w-xl-20">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <i
              className="bi bi-person-circle fs-4 me-2"
              style={{ cursor: "pointer" }}
            ></i>
            <h6 className="fw-bold mb-0 me-3">Messaggistica</h6>
          </div>
          <div className="text-muted d-flex align-items-center ms-3">
            <i
              className="bi bi-three-dots mx-2"
              title="Altro"
              style={{ cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-pencil mx-2"
              style={{ cursor: "pointer" }}
            ></i>
            <i
              className="bi bi-chevron-up mx-2"
              style={{ cursor: "pointer" }}
            ></i>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SezioneMessaggistica;
