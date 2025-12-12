/* eslint-disable react-hooks/exhaustive-deps */
import ExperienceCard from './ExperienceCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getExpAction } from '../redux/actions/experiencesAction'
import { Container, Card, Row, Col, Spinner } from 'react-bootstrap'

import FormExperiences from './FormExperiences'

const ExperienceSection = (props) => {
  console.log('id passato da profileSection: ', props.ID)
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.experiences.data
  })
  const loading = useSelector((state) => {
    return state.experiences.loading
  })
  const myId = useSelector((state) => {
    return state.profile.data._id
  })
  useEffect(() => {
    dispatch(getExpAction(props.ID))
  }, [props.ID])
  return (
    <Container className=" mx-2 mb-5 mt-0 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle">
      <Card className="p-3 mb-3 border-0  rounded-3">
        <Row>
          <Col xs={12} md={8}>
            <h4 className="fw-bold">Esperienza</h4>
          </Col>
          {props.ID === myId ? (
            <Col xs={12} md={4}>
              <FormExperiences ID={props.ID} />
            </Col>
          ) : (
            <Col xs={12} md={8}></Col>
          )}
        </Row>
        <Row>
          <Col>
            {/* loading */}
            {loading && (
              <div className="text-center py-3">
                <Spinner animation="border" />
              </div>
            )}

            {/* map esperienza */}
            {data && data.length > 0 ? (
              data.map((exp, index) => (
                <ExperienceCard
                  img={exp.image}
                  role={exp.role}
                  company={exp.company}
                  startD={exp.startDate}
                  endD={exp.endDate}
                  area={exp.area}
                  key={index}
                  description={exp.description}
                  expID={exp._id}
                  ID={props.ID}
                />
              ))
            ) : (
              <>
                <h3 className="fs-5 fw-bold mb-1">
                  Non hai ancora inserito esperienze
                </h3>
                <p className="text-muted small">
                  Le esperienze che condividi appariranno qui
                </p>
              </>
            )}
          </Col>
        </Row>

        {/* singola esperienza */}
        {}
      </Card>
    </Container>
  )
}

export default ExperienceSection
