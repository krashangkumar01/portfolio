import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Skills.css";

const skillsData = [
  { image: "js.png", name: "JavaScript" },
  { image: "ts.png", name: "TypeScript" },
  { image: "HTML5.png", name: "HTML5" },
  { image: "css.png", name: "CSS3" },
  { image: "react.jpg", name: "React" },
  { image: "nodejs.png", name: "Node JS" },
  { image: "nextjs.png", name: "Next JS" },
  { image: "sailsjs.png", name: "Sails JS" },
  { image: "ghostjs.jpeg", name: "Ghost JS" },
  { image: "expressjs.png", name: "Express JS" },
  { image: "graphql.png", name: "GraphQL" },
  { image: "git.png", name: "Git" },
  { image: "github.png", name: "GitHub" },
  { image: "sqlserver.png", name: "SQL Server" },
  { image: "mysql.png", name: "MySQL" },
  { image: "postman.png", name: "Postman" },
  { image: "dynamodb.jpeg", name: "Amazon Dynamo DB" },

];

function Skills() {
  return (
    <Container>
      <div id="skills">
        <h1 id="subtitle">Skills</h1>
        <Row xs={2} md={0} lg={4} className="g-4">
          {skillsData.map((skill, index) => (
            <Col key={index}>
              <Card className="skill-card">
                <Card.Body>
                  <img src={skill.image} alt={skill.name} className="skill-image" />
                  <Card.Title>{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Skills;
