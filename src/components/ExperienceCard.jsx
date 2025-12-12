import { Row, Col, Image } from 'react-bootstrap'
import EditExperienceForm from './EditExperienceForm'
import { useSelector } from 'react-redux'

const ExperienceCard = (props) => {
  const startDConverted = props.startD
    ? props.startD.slice(0, 10).split('-').reverse().join('/')
    : null

  const endDConverted = props.endD
    ? props.endD.slice(0, 10).split('-').reverse().join('/')
    : null

  const myId = useSelector((state) => {
    return state.profile.data._id
  })

  return (
    <div className="p-2 mb-3">
      <Row>
        <Col xs={2}>
          {/* Logo azienda */}
          <Image
            src={props.img}
            className="rounded overflow-hidden border bg-light"
            style={{ width: '48px', height: '48px' }}
          ></Image>
        </Col>

        <Col xs={8}>
          <h6 className="fw-bold mb-0">{props.role}</h6>
          <p className="mb-0  text-muted">{props.company}</p>
          <p className="mb-0 small text-muted">
            {startDConverted} - {endDConverted ? endDConverted : 'Presente'}
            {/* · 2 anni 3 mesi */}
          </p>
          <p className="mb-2 small text-muted">{props.area}</p>

          <p className="small fw-semibold">{props.description}</p>
        </Col>
        {props.ID === myId ? (
          <Col xs={2}>
            <EditExperienceForm
              img={props.image}
              role={props.role}
              company={props.company}
              startD={props.startD}
              endD={props.endD}
              area={props.area}
              description={props.description}
              expID={props.expID}
              ID={props.ID}
            />
          </Col>
        ) : (
          <Col xs={2}></Col>
        )}
      </Row>
    </div>
  )
}

export default ExperienceCard
