import ExperienceCard from "./ExperienceCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getExpAction } from "../redux/actions/experiencesAction"
import { Container, Card, Button, Row, Col, Spinner } from "react-bootstrap"

import FormExperiences from "./FormExperiences"

const ExperienceSection = (props) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.experiences.data
  })
  const loading = useSelector((state) => {
    return state.experiences.loading
  })
  useEffect(() => {
    dispatch(getExpAction(props.ID))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.ID])
  return (
    <Container className=" mx-2 mb-5 mt-0 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle">
      <Card className="p-3 mb-3 border-0 rounded-3">
        <Row>
          <Col xs={12} md={8}>
            <h4 className="fw-bold">Esperienza</h4>
          </Col>
          <Col xs={12} md={4}>
            <FormExperiences />
          </Col>
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
            {data &&
              data.map((exp, index) => {
                return (
                  <ExperienceCard
                    img={exp.image}
                    role={exp.role}
                    company={exp.company}
                    startD={exp.startDate}
                    endD={exp.endDate}
                    area={exp.area}
                    key={index}
                    description={exp.description}
                  />
                )
              })}
          </Col>
        </Row>

        {/* singola esperienza */}

        <Button className="text-decoration-none text-black bg-transparent border-0 fw-semibold text-primary">
          Mostra tutte le esperienze (7) →
        </Button>
      </Card>
    </Container>
  )
}

export default ExperienceSection
