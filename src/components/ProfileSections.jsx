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
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {
  fetchMyProfile,
  fetchOtherProfile,
} from "../redux/actions/MyProfileAction"

const ProfileSections = () => {
  const params = useParams()
  // console.log(params.userId)

  // const userId = params.userId

  // const myId = useSelector((state) => {
  //   return state.profile.data._id
  // })

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if (userId === myId) {
  //     dispatch(fetchMyProfile())
  //   } else {
  //     dispatch(fetchOtherProfile(userId))
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [userId])

  return (
    <>
      <Container className="ps-0" fluid>
        <Row className="mt-6 wh-100">
          <Col xs={12} lg={8}>
            <HeroDinamic />
            <SezioneAnalisi />
            <Information />
            <SezioneAttivita ID={params.userId} />
            <SezioneLingue />
            <ExperienceSection ID={params.userId} />
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
