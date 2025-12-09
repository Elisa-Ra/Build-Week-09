import { Container, Card, Button } from "react-bootstrap"
import ExperienceCard from "./ExperienceCard"

const ExperienceSection = () => {
  return (
    <Container className=" mx-2 mb-5 mt-0 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle">
      <Card className="p-3 mb-3 border-0 shadow-sm rounded-3">
        <h4 className="fw-bold">Esperienza</h4>
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
