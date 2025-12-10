import { Col, Row } from "react-bootstrap"
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

const ProfileSections = () => {
  return (
    <>
      <Row className="mt-6">
        <Col xs={8}>
          <HeroDinamic />
          <SezioneAnalisi />
          <Information />
          <SezioneAttivita />
          <SezioneLingue />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <LicensesSection />
          <Interests />
          <MyFooter />
        </Col>
        <Col lg={4} xs={12}>
          <RightAside />
        </Col>
      </Row>
      <MyFooter />
    </>
  )
}
export default ProfileSections
