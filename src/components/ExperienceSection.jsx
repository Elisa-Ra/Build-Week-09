import { Container, Card, Button, Spinner } from "react-bootstrap"
import ExperienceCard from "./ExperienceCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getExpAction } from "../redux/actions/experiencesAction"

// const queryParams = new URLSearchParams(location.search)
// const userId = queryParams.get("userId")

const ExperienceSection = ({ userId }) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.experiences.data
  })
  const loading = useSelector((state) => {
    return state.experiences.loading
  })
  useEffect(() => {
    dispatch(getExpAction(userId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])
  return (
    <Container className=" mx-2 mb-5 mt-0 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle">
      <Card className="p-3 mb-3 border-0 shadow-sm rounded-3">
        <h4 className="fw-bold">Esperienza</h4>

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
        <hr />

        <Button className="text-decoration-none text-black bg-transparent border-0 fw-semibold text-primary">
          Mostra tutte le esperienze (7) →
        </Button>
      </Card>
    </Container>
  )
}

export default ExperienceSection
