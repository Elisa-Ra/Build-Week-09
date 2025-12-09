import { Card, Button } from "react-bootstrap"
import EducationCard from "./EducationCard"

const EducationSection = () => {
  return (
    <Card className="p-3 mb-3 border-0 shadow-sm rounded-3">
      <h4 className="fw-bold">Formazione</h4>
      <EducationCard />
      <hr />
      <EducationCard />
      <hr />
      <Button variant="light" className="w-100 mt-2 fw-semibold text-primary">
        Mostra tutti i titoli di studio (4) →
      </Button>
    </Card>
  )
}

export default EducationSection
