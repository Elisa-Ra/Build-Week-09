import { useEffect, useState } from "react"
import { Container, Row, Col, Image, Button, Spinner } from "react-bootstrap"

const Information = () => {
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
        <Container className="mx-2 mb-5 mt-5 rounded bg-white p-0 w-100 w-lg-50 p-4 border border-1 border-secondary-subtle">
          <h3>Informazioni</h3>
          {profile.bio && profile.bio.trim() !== "" ? (
            <p>{profile.bio}</p>
          ) : (
            <p className="text-secondary">
              Non è ancora stata aggiunta una bio.
            </p>
          )}
        </Container>
      )}
    </>
  )
}

export default Information
