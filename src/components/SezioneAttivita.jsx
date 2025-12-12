import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Container } from "react-bootstrap"
import AddPostModal from "./AddPostModal"
import { useSelector } from "react-redux"
import PostCard from "./PostCard"

const SezioneAttivita = (props) => {
  const profile = useSelector((state) => state.profile.data)
  const users = useSelector((state) => state.users.data) || []
  const posts = useSelector((state) => state.posts.data)

  const myId = profile?._id
  const isItMe = props.ID === myId

  const user = isItMe ? profile : users.find((user) => user._id === props.ID)

  const userPosts = isItMe
    ? posts.filter((post) => post.username === profile?.username)
    : posts.filter((post) => post.user?._id === props.ID)
  console.log("attività", userPosts)

  const [showModal, setShowModal] = useState(false)
  return (
    <Container className=" mx-2 mb-5 mt-0 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle">
      <div className="col-12 border rounded bg-white p-3">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fs-5 fw-bold mb-0">Attività</h2>

          {props.ID === myId ? (
            <div className="d-flex align-items-center">
              <button
                type="button"
                className="btn btn-outline-primary rounded-pill me-2 py-1 px-3"
                onClick={() => setShowModal(true)}
              >
                Crea un post
              </button>
              <i className="bi bi-pencil fs-5 text-muted"></i>{" "}
            </div>
          ) : (
            <div className="d-flex align-items-center"> </div>
          )}
        </div>

        <p className="text-muted fw-bold mb-3">
          0 <span className="fw-normal">follower</span>
        </p>

        {userPosts.length === 0 ? (
          <div className="my-5 text-center text-md-start">
            <h3 className="fs-5 fw-bold mb-1">Non ci sono ancora posts</h3>
            <p className="text-muted small">I post appariranno qui</p>
          </div>
        ) : (
          userPosts.map((post) => (
            <PostCard key={post._id} post={post} users={users} />
          ))
        )}

        <div className="text-center text-md-start mt-4">
          <a href="#attivita" className="text-decoration-none fw-bold">
            Mostra tutte le attività &rarr;
          </a>
        </div>
      </div>
      <AddPostModal show={showModal} handleClose={() => setShowModal(false)} />
    </Container>
  )
}

export default SezioneAttivita
