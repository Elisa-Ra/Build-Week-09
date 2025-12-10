import { useEffect, useState } from "react"
import { Container, Row, Col, Image, Button, Spinner } from "react-bootstrap"
import { useSelector } from "react-redux"

const Information = () => {
  const profile = useSelector((state) => {
    return state.profile.data
  })

  return (
    <>
      {profile && (
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
