import { useState } from "react"
import AddPostModal from "./AddPostModal"
import { useSelector } from "react-redux"

const CreaPost = () => {
  const profile = useSelector((state) => state.profile.data)
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className="card p-3 mb-3">
        <div className="d-flex align-items-center mb-3">
          <img
            src={profile?.image || "https://placebear.com/100/100"}
            className="bg-secondary rounded-circle me-3"
            style={{ width: "45px", height: "40px" }}
          ></img>
          <div
            className="form-control rounded-pill text-start"
            style={{ height: "50px", cursor: "pointer" }}
            onClick={() => setShowModal(true)}
          >
            Crea un Post
          </div>
        </div>

        <div className="d-flex justify-content-around pt-2">
          <button
            className="btn btn-sm text-secondary d-flex align-items-center fw-semibold"
            type="button"
          >
            <i className="bi bi-play-btn-fill text-success me-2 fs-5"></i>
            Video
          </button>

          <button
            className="btn btn-sm text-secondary d-flex align-items-center fw-semibold"
            type="button"
          >
            <i className="bi bi-image-fill text-primary me-2 fs-5"></i>
            Foto
          </button>

          <button
            className="btn btn-sm text-secondary d-flex align-items-center fw-semibold"
            type="button"
          >
            <i className="bi bi-journal-text text-danger me-2 fs-5"></i>
            Scrivi un articolo
          </button>
        </div>
      </div>
      <AddPostModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  )
}

export default CreaPost
