import { Container, Card, Button, Row, Col } from "react-bootstrap"
import ExperienceCard from "./ExperienceCard"
import FormExperiences from "./FormExperiences"

const ExperienceSection = () => {
  return (
    <Container className=" mx-2 mb-5 mt-0 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle">
      <Card className="p-3 mb-3 border-0 shadow-sm rounded-3">
        <Row>
          <Col>
            <h4 className="fw-bold">Esperienza</h4>
          </Col>
          <Col>
            <FormExperiences />
          </Col>
        </Row>

        {/* singola esperienza */}
        <ExperienceCard />
        <hr />
        <ExperienceCard />
        <hr />
        <ExperienceCard />
        <hr />

        <Button className="text-decoration-none text-black bg-transparent border-0 fw-semibold text-primary">
          Mostra tutte le esperienze (7) →
        </Button>
      </Card>
    </Container>
  )
}

export default ExperienceSection
