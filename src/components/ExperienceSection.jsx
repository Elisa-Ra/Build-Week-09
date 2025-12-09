import { Card, Button } from "react-bootstrap"
import ExperienceCard from "./ExperienceCard"

const ExperienceSection = () => {
  return (
    <Card className="p-3 mb-3 border-0 shadow-sm rounded-3">
      <h4 className="fw-bold">Esperienza</h4>

      <ExperienceCard />
      <hr />
      <ExperienceCard />
      <hr />
      <ExperienceCard />
      <hr />

      <Button variant="light" className="w-100 mt-2 fw-semibold text-primary">
        Mostra tutte le esperienze (7) →
      </Button>
    </Card>
  )
}

export default ExperienceSection
