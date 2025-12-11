import { Container, Card, Button } from "react-bootstrap"
import EducationCard from "./EducationCard"

const EducationSection = () => {
  return (
    <Container className=" mx-2 mb-5 mt-0 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle">
      <Card className="p-3 mb-3 border-0 rounded-3">
        <h4 className="fw-bold">Formazione</h4>
        {/* singola formazione */}
        <EducationCard />
        <hr />
        <EducationCard />
        <hr />
        <Button className="text-decoration-none text-black bg-transparent border-0 fw-semibold text-primary">
          Mostra tutti i titoli di studio (4) →
        </Button>
      </Card>
    </Container>
  )
}

export default EducationSection
