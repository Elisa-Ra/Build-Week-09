import { useEffect, useState } from "react"
import { Container, Row, Col, Image, Button, Spinner } from "react-bootstrap"

const LeftBar = () => {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const API = "https://striveschool-api.herokuapp.com/api/profile/me"
  useEffect(() => {
    fetch(API, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGIwN2QzMjJmNTAwMTUxMDc2YTAiLCJpYXQiOjE3NjUyNjgyMzEsImV4cCI6MTc2NjQ3NzgzMX0.xpmE3XKHeFyn9woNxPxv0Fs_cK7s5T7gtcpLwDMBGII`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else throw new Error("Errore Fetch Profilo", res.status)
      })
      .then((data) => {
        setProfile(data)
        setLoading(false)
        console.log(data)
      })
      .catch((err) => {
        console.log("Errore nel fetch", err)
        setLoading(false)
        setError(err.message)
      })
  }, [])
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
        <>
          <Container className="mx-2 mb-2 mt-4 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle ">
            {/* Mini Hero della homepage  */}
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
                  style={{ transform: "translateY(-30px)" }}
                >
                  <Image
                    src={profile.image}
                    alt="Profile"
                    roundedCircle
                    className="border border-3 border-white img-profile"
                    style={{ height: "70px", width: "70px" }}
                  />
                </div>
              </Col>
            </Row>

            {/* Row sopra: divisa in sinistra e destra */}
            <Row className="mt-5 text-start ps-3 align-items-start">
              {/* Colonna sinistra */}
              <Col md={8}>
                <h3 className="fs-4 mb-0">
                  {profile.name} {profile.surname}
                </h3>
                <p className="fs-5 mb-0 ">{profile.title || ""}</p>
                <p className="fs-6 text-secondary">
                  {profile.area || "Località"}
                </p>
              </Col>
            </Row>
          </Container>
          {/* Collegamenti (Home) */}
          <Container className="mx-2 mb-2 mt-0 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle ">
            <Row className="pt-3 text-start ps-3 align-items-start">
              {/* Colonna sinistra */}
              <Col md={8}>
                <p className="fs-5 mb-0 ">
                  <strong>Collegamenti</strong>
                </p>
                <p className="fs-6 text-secondary">Espandi la tua rete</p>
              </Col>
              <Col>
                <p className="text-primary">30</p>
              </Col>
            </Row>
          </Container>
          {/* Premium  */}
          <Container className="mx-2 mb-2 mt-0 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle ">
            <Row className="pt-3 text-start ps-3 align-items-start">
              {/* Colonna sinistra */}
              <Col>
                <p className="fs-6 mb-0 text-secondary">
                  Raggiungi i tuoi obiettivi di carriera
                </p>
                <p className="fs-6 mb-0 ">
                  {" "}
                  <i class="bi bi-slash-square-fill text-warning"></i> Da non
                  perdere: Premium per 0 EUR
                </p>
              </Col>
            </Row>
          </Container>
          {/* Premium  */}
          <Container className="mx-2 mb-2 mt-0 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle ">
            <Row className="pt-3 text-start ps-3 align-items-start">
              {/* Colonna sinistra */}
              <Col>
                <p className="fs-6 mb-2">
                  <strong>
                    <i class="bi bi-bookmark-fill me-1"></i> Elementi salvati
                  </strong>
                </p>
                <p className="fs-6 mb-2">
                  <strong>
                    <i class="bi bi-people-fill me-1"></i> Gruppi
                  </strong>
                </p>
                <p className="fs-6 mb-2">
                  <strong>
                    <i class="bi bi-newspaper me-1"></i> Newsletter
                  </strong>
                </p>
                <p className="fs-6 mb-2">
                  <strong>
                    <i class="bi bi-calendar me-1"></i> Eventi
                  </strong>
                </p>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  )
}

export default LeftBar
