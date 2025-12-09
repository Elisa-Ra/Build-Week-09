import { useEffect, useState } from "react"
import { Button, Card, Col, Image, Row, Spinner } from "react-bootstrap"

const RightAside = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const API =
    "https://striveschool-api.herokuapp.com/api/profile/654df010254e8800183f18a4"
  useEffect(() => {
    fetch(API, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZGIwN2QzMjJmNTAwMTUxMDc2YTAiLCJpYXQiOjE3NjUyNjgyMzEsImV4cCI6MTc2NjQ3NzgzMX0.xpmE3XKHeFyn9woNxPxv0Fs_cK7s5T7gtcpLwDMBGII`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else throw new Error("Errore Fetch", res.status)
      })
      .then((data) => {
        setUsers(data.slice(0, 5))
        setLoading(false)
        console.log(data.slice(0, 5))
      })
      .catch((err) => {
        console.log("Errore nel fetch", err)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <title>Profile Page</title>
      <Card className="mb-2">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Text className="fw-bold fs-5">Lingua del profilo</Card.Text>
              <Card.Text className="text-muted">Italiano</Card.Text>
            </div>
            <i className="bi bi-pencil"></i>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <Card.Text className="fw-bold fs-5">
                Profilo pubblico e URL
              </Card.Text>
              <Card.Text className="text-muted">
                www.linkedin.com/in/me
              </Card.Text>
            </div>
            <i className="bi bi-pencil"></i>
          </div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <h5>Persone che potresti conoscere</h5>
          {loading ? (
            <div className="text-center py-3">
              <Spinner animation="border" />
            </div>
          ) : (
            users.map((user) => {
              return (
                <>
                  <Row key={user._id} className="mb-3 d-flex">
                    <Col className="d-flex me-3" md={2}>
                      <Image
                        src={user.image}
                        alt={`${user.name} ${user.surname}`}
                        className="me-3 rounded-circle"
                        style={{ height: "48px", width: "48px" }}
                      />
                    </Col>
                    <Col className="d-flex flex-column" md={8}>
                      <div className="fw-semibold">
                        {user.name} {user.surname}
                      </div>
                      <div className="text-muted">
                        {user.title || "Professionista"}
                      </div>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-pill text-center mt-1"
                      >
                        <i className="bi bi-person-plus me-2"></i>
                        Collegati
                      </Button>
                    </Col>
                  </Row>
                  <hr className="my-2 mx-2" />
                </>
              )
            })
          )}
          <Button
            variant="link"
            className="text-center fw-semibold text-decoration-none text-black"
          >
            Mostra tutto
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}
export default RightAside
