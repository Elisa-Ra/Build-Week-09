import { useEffect } from "react"
import { Container, Row, Col, Image, Button, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchMyProfile,
  fetchOtherProfile,
} from "../redux/actions/MyProfileAction"
import { useNavigate, useParams } from "react-router-dom"

const HeroDinamic = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const userId = params.userId

  const myId = useSelector((state) => {
    return state.profile.data._id
  })

  const profile = useSelector((state) => {
    if (userId === myId) {
      return state.profile.data
    } else {
      return state.singleUser.data
    }
  })
  const loading = useSelector((state) => {
    if (userId === myId) {
      return state.profile.loading
    } else {
      return state.singleUser.loading
    }
  })
  const error = useSelector((state) => {
    if (userId === myId) {
      return state.profile.error
    } else {
      return state.singleUser.error
    }
  })

  useEffect(() => {
    if (userId === myId) {
      dispatch(fetchMyProfile())
    } else {
      dispatch(fetchOtherProfile(userId))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])
  return (
    <>
      {/* loading */}
      {loading && (
        <div className="text-center mt-5">
          <Spinner animation="border" />
        </div>
      )}
      {/* error */}
      {error && <p className="text-danger text-center mt-5">{error}</p>}
      {/* hero se no loading e no error */}
      {!error && !loading && profile && (
        <Container className="mx-2 mb-5 mt-0 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle">
          <Row>
            <Col>
              <Image
                src="https://placebear.com/1200/300"
                alt="Cover"
                fluid
                className="w-100 rounded-top"
              />
            </Col>
          </Row>

          {/* Immagine del profilo */}
          <Row className="position-relative">
            <Col xs={12} className="d-flex justify-content-start ms-3">
              <div
                className="position-absolute"
                style={{ transform: "translateY(-60px)" }}
              >
                <Image
                  src={profile?.image}
                  alt="Profile"
                  roundedCircle
                  className="border border-3 border-white img-profile cursor-pointer"
                  style={{ height: "100px", width: "100px" }}
                  onClick={() => {
                    navigate(`/profile/${profile?._id}`)
                  }}
                />
              </div>
            </Col>
          </Row>

          {/* Row sopra: divisa in sinistra e destra */}
          <Row className="mt-5 text-start ps-3 align-items-start">
            {/* Colonna sinistra */}
            <Col md={8}>
              <h3 className="fs-4">
                {profile?.name} {profile?.surname}
              </h3>
              <p className="fs-5 mb-0">{profile?.title || ""}</p>
              <p className="fs-6 mb-0">Formazione</p>
              <p className="fs-6 text-secondary">
                {profile?.area || "Località"} ·
                <a
                  href="#"
                  className="text-decoration-none text-primary fw-bold"
                >
                  {" "}
                  Informazioni di contatto
                </a>
              </p>
              <p className="fs-6">
                <a
                  href="#"
                  className="text-decoration-none text-primary fw-bold"
                >
                  300 collegamenti
                </a>
              </p>
            </Col>

            {/* Colonna destra */}
            <Col
              md={4}
              className="d-none d-md-flex justify-content-end align-items-start pe-4 mt-4"
            >
              <div className="rounded p-3 ">
                <p className="mb-0">{profile?.bio || "Formazione"}</p>
              </div>
            </Col>
          </Row>

          {/* Row sotto: unica colonna */}
          <Row className="text-start ps-3 align-items-start pb-5 w-100">
            <Col className="d-flex gap-2 justify-content-start ps-3">
              <Button variant="primary" size="sm" className="rounded-pill">
                Disponibile per
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded-pill"
              >
                Aggiungi sezione
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded-pill"
              >
                Migliora profilo
              </Button>
              <Button
                variant="outline-dark"
                size="sm"
                className="rounded-circle py-0 pb-2"
              >
                ...
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default HeroDinamic
