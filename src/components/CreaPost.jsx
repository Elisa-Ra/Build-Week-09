import React from 'react';

const CreaPost = () => {
    return (
        <div className="card p-3 mb-3 mt-4" style={{ maxWidth: '600px' }}>

            <div className="d-flex align-items-center mb-3">
                <div className="bg-secondary rounded-circle me-3" style={{ width: '45px', height: '40px' }}></div>

                <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Crea un post"
                    style={{ height: '50px' }}
                />
            </div>

            <div className="d-flex justify-content-around pt-2">
                <button className="btn btn-sm text-secondary d-flex align-items-center fw-semibold" type="button">
                    <i className="bi bi-play-btn-fill text-success me-2 fs-5"></i>
                    Video
                </button>

                <button className="btn btn-sm text-secondary d-flex align-items-center fw-semibold" type="button">
                    <i className="bi bi-image-fill text-primary me-2 fs-5"></i>
                    Foto
                </button>

                <button className="btn btn-sm text-secondary d-flex align-items-center fw-semibold" type="button">
                    <i className="bi bi-journal-text text-danger me-2 fs-5"></i>
                    Scrivi un articolo
                </button>
            </div>

        </div>
        
    );
};

export default CreaPost;
