import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import './Certifications.css';

function Certifications() {
  const certificateData = [
    {
      title: "Full Stack Development",
      description: "TechGen Computer Training Insitute",
      image: "Full-Stack-Certificate.jpeg",
    },
    {
      title: "Getting Started with MongoDB Atlas",
      description: "MongoDB University",
      image: "mongodb-certificate.jpg",
    },
    {
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      description: "IBM by Coursera",
      image: "web-development.jpg",
    },
    {
      title: "Introduction to Cloud computing ",
      description: "IBM by Coursera",
      image: "cloud-computing.jpg",
    },
    {
      title: "Advance Software Engineering Virtual Experience Program",
      description: "Walmart Global Tech India",
      image: "walmart.jpg",
    },
    {
      title: "Professional Java Developer",
      description: "Udemy",
      image: "udemy.jpg",
    },
    {
      title: "Advanced Java Programming",
      description: "Linkedin Learning",
      image: "Advance-Java-certificate.jpg",
    },
    {
      title: "TCS iON Career Edge- Young Professional",
      description: "TCS iON",
      image: "tcs-ion.jpg",
    },
    {
      title: "Introduction To SQL",
      description: "DataCamp",
      image: "sql.jpg",
    },
  
  ];

  return (
    <Container id='certifications'>
      <h1 id='subtitle'>Certifications</h1>
      <Carousel className='cert-carousel'>
        {certificateData.map((certificate, idx) => (
          <Carousel.Item key={idx}>
            <div
              className="cert-image-container"
              style={{ backgroundImage: `url(./${certificate.image})` }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default Certifications;
