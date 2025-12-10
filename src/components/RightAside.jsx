import { useEffect } from "react"
import { Button, Card, Col, Image, Row, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../redux/actions/userActions"

const RightAside = () => {
  const users = useSelector((state) => {
    return state.user.users
  })
  const loading = useSelector((state) => state.user.loading)
  // const error = useSelector((state) => state.user.error)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            users.slice(0, 5).map((user) => {
              return (
                <div key={user._id}>
                  <Row className="mb-3 d-flex">
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
                </div>
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
