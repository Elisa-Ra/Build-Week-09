import { Col, Container, Row } from "react-bootstrap"
import EducationSection from "./EducationSection"
import HeroDinamic from "./HeroDinamic"
import LicensesSection from "./LicensesSection"
import SezioneAnalisi from "./SezioneAnalisi"
import SezioneLingue from "./SezioneLingue"
import SkillsSection from "./SkillsSection"
import SezioneAttivita from "./SezioneAttivita"
import ExperienceSection from "./ExperienceSection"
import Interests from "./Interests"
import Information from "./Information"
import RightAside from "./RightAside"
import MyFooter from "./MyFooter"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const ProfileSections = () => {
  const params = useParams()
  const profile = useSelector((state) => state.profile.data)

  console.log(params.userId)
  return (
    <>
      <Container className="ps-0" fluid>
        <Row className="mt-6 wh-100">
          <Col xs={12} lg={8}>
            <HeroDinamic />
            <SezioneAnalisi />
            <Information />
            <SezioneAttivita />
            <SezioneLingue />
            <ExperienceSection ID={profile?._id} />
            <EducationSection />
            <SkillsSection />
            <LicensesSection />
            <Interests />
          </Col>
          <Col lg={4} xs={12}>
            <RightAside />
          </Col>
        </Row>
        <MyFooter />
      </Container>
    </>
  )
}
export default ProfileSections
