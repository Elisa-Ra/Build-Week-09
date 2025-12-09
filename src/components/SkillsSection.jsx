import { Card, Button } from "react-bootstrap"
import SkillCard from "./SkillCard"

const SkillsSection = () => {
  return (
    <Card className="p-3 mb-3 border-0 shadow-sm rounded-3">
      <h4 className="fw-bold">Competenze</h4>

      <SkillCard />
      <SkillCard />

      <Button className="text-decoration-none text-black bg-transparent border-0 fw-semibold text-primary">
        Mostra tutte le competenze (19) →
      </Button>
    </Card>
  )
}

export default SkillsSection
