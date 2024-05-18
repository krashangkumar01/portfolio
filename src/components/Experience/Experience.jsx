import React from "react";
import { Container, Stack, Row, Col } from "react-bootstrap";
import "./Experience.css";
import "./Timeline.css";
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Affixious Consulting Pvt Ltd (A Myholidays Company)",
    img: "affixious.jpeg",
    date: "Dec 2023 - Present",
    endDate: "Present",
    skills: ["Javascript", "TypeScript", "NodeJS", "ReactJS", "NextJS", "SailsJS", "GraphQL", "Restfull APIs", "Ghost JS", "Sails JS", "Team Management", "Module Lead"],
    description: [
      "Responsiblity to handle team of 5 developers",
      "Developed four user-friendly CMS Panel - Packages, Hotel , Flights and Newsletter using React to streamline content management for the web application accordingly across localized websites.",
      "Implement self node version changes as per project requirement using .sh file into projects",
      "Enhanced performance of MyHolidays.com web application by implementing service workers,caching, and optimizing Google Core Web Vitals. Resulted in 60% faster revisits and a 30% performance boost.",
      "Enhanced MyHolidays flight flight web application by improving code quality and performance, resulting in a 34% faster page speed.",
      "Enhanced performance of Myholidays Blog and Regency Blog web applications by implementing images uploading to CDN, optimization. Resulted in 60% faster revisits and a 30% performance boost. Improved loading speed, interactivity, and visual stability for an enhanced user experience and increased search engine visibility.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Affixious Consulting Pvt Ltd (A Myholidays Company)",
    img: "affixious.jpeg",
    date: "OCT 2021 - NOV 2023",
    endDate: "NOV 2023",
    skills: ["Javascript", "TypeScript", "NodeJS", "ReactJS", "NextJS", "SailsJS", "Restfull APIs", "Ghost JS", "Sails JS"],
    description: [
      "Developed three user-friendly CMS Panel - Packages, Hotel , Flights using React to streamline content management for the web application accordingly across localized websites.",
      "Enhanced performance of MyHolidays.com web application by implementing service workers,caching, and optimizing Google Core Web Vitals. Resulted in 60% faster revisits and a 30% performance boost.",
      "Enhanced MyHolidays flight flight web application by improving code quality and performance, resulting in a 34% faster page speed.",
      "Enhanced performance of Myholidays Blog and Regency Blog web applications by implementing images uploading to CDN, optimization. Resulted in 60% faster revisits and a 30% performance boost. Improved loading speed, interactivity, and visual stability for an enhanced user experience and increased search engine visibility.",
    ],
  }
];

const TimelineItem = ({ isPresent }) => (
  <div className="timeline-item">
    <div className={`timeline-dot ${isPresent ? "filled" : ""}`}></div>
    <div className="timeline-content"></div>
  </div>
);


function Experience() {
  return (
    <Container id="experience">
      <h1 id="subtitle">Experience</h1>
      <Stack gap={3} id="stack">
        {experiences.map((experience, index) => (
          <Row key={index}>
            <Col xs={2} id="timeline">
              <TimelineItem isPresent={experience.endDate === "Present"} />
            </Col>
            <Col>
              <div className="Card">
                <div className="Top">
                  <img src={`./${experience.img}`} alt={experience.role} />
                  <div className="Body">
                    <div className="Role">{experience.role}</div>
                    <div className="Company">{experience.company}</div>
                    <div className="Date">{experience.date}</div>
                  </div>
                </div>
                <div className="Description">
                  <span>
                    {experience?.description && (
                      <ul className="DescriptionList">
                        {experience.description.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </span>
                  {experience?.skills && (
                    <>
                      <br />
                      <div className="Skills">
                        <b>Skills:</b>
                        <div className="ItemWrapper">
                          {experience?.skills?.map((skill, index) => (
                            <div key={index} className="Skill">
                              <FontAwesomeIcon icon={faCircleDot} className="Icon" /> {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Stack>
    </Container>
  );
}

export default Experience;
