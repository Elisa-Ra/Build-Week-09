import { Container, Card } from 'react-bootstrap';
import LicensesCard from './LicensesCard';

const LicensesSection = () => {
  const certifications = [
    {
      title: 'International English Language Testing System (IELTS) - C1 Level',
      issuer: 'IDP Education Ltd',
      date: 'lug 2025',
      img: 'https://placecats.com/50/50',
      id: '1'
    },
    {
      title: 'ECDL',
      issuer: '',
      date: 'gen 2007',
      img: 'https://placecats.com/50/50',
      id: '2'
    }
  ];
  return (
    <Container className=" mx-2 mb-5 mt-0 rounded bg-white p-0 w-100 w-lg-50 border border-1 border-secondary-subtle">
      <Card className="p-3 mb-3 border-0 rounded-3">
        <h4 className="fw-bold">Licenze e certificazioni</h4>
        {certifications.map((cert) => {
          return <LicensesCard key={cert.id} cert={cert} />;
        })}
      </Card>
    </Container>
  );
};

export default LicensesSection;
