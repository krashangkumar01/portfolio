import "./Projects.css";
import { Button, Container, Modal } from "react-bootstrap";
import { useState } from "react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Bloging Website",
      // date: "Mar 2023 - May 2023",¸
      description:
        "Created Bloging Websites - Myholidays Blog and Regency Blog",
      image: "./projects/MyholidaysBlog.png",
      tags: ["GhostJS", "NodeJS", "handlebars"],
      category: "fullstack",
      // github: "",
      links: ["https://www.myholidays.com/blog/", "https://regencyholidays.com/blog"],
    },
    {
      id: 2,
      title: "Newsletter",
      // date: "Jan 2023 - Feb 2023",
      description:
        "Lead Newsletter CMS project, in this implement APIs for saving data through cms panel and shows content on landing pages. Admin Panel created on React and APIs implemented on NodeJS using graphql and landing pages created on nextjs",
      image: "./projects/newsletter_lp.png",
      tags: ["ReactJs", "NodeJS", "GraphQL", "NextJS", "SQLServer", "TypeScript"],
      category: "fullstack",
      // github: "https://github.com/shafa-shabudeen/MovieFrontEnd",
      links: ["https://www.myholidays.com/en-qa/newsletters/lp/flight-deals/mar11",]
    },
    {
      id: 3,
      title: "Packages",
      // date: "Jun 2023 - Jul 2023",
      description:
        "Implemet Packages CMS for creating and publish packages detail pages and packages listing pages with indrustary logics",
      image: "./projects/myholidays_packages.png",
      tags: ["NodeJS", "ReactJS", "NextJS", "TypeScript", "SailsJS", "SQLServer"],
      category: "fullstack",
      // github: "https://github.com/shafa-shabudeen/TODO-List-web",
      links: ["https://www.myholidays.com/travel/maldives-honeymoon-packages/", "https://www.regencyholidays.com/packages/qatar-tour-packages/"]
    },
    {
      id: 4,
      title: "Flights",
      // date: "Mar 2023 - Mar 2023",
      description:
        "Lead Flight CMS project, it is implemented for publish flight pages. Flight pages implemented in these type - City Pages (i.e. flight-to-doha), City Pair Pages (i.e. flights-from-doha-to-delhi), State Pair Pages, Country Pair Pages, Flight Theme Pages",
      image:
        "./projects/flight_cms.png",
      tags: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "Solr", "SailsJS", "SQLServer", "DynamoDB"],
      category: "fullstack",
      link: ["https://www.myholidays.com/en-us/flights-from-philadelphia-to-san-juan"]
    },
    {
      id: 5,
      title: "Hotel",
      // date: "Mar 2023 - Mar 2023",
      description:
        "Implemet Hotel CMS whole project from scratch using NodeJS, ReactJS, SailsJS. In this we published five type of pages - Hotel City Listing Pages, Hotel Detail Page, Hotel Country Page, Star Rating Pages, Property Type Pages",
      image:
        "./projects/hotel_cms.png",
      tags: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "SailsJS", "SQLServer"],
      category: "fullstack",
      link: []
    },
  ];

  const [toggle, setToggle] = useState("all");

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <div className="projects">
      <Container id="projects">
        <div id="Wrapper">
          <h1 id="Title">Projects</h1>
          {/* <div id="ToogleButtonGroup">
            {toggle === "all" ? (
              <Button
                active
                value="all"
                onClick={() => setToggle("all")}
                id="ToogleButton"
              >
                All
              </Button>
            ) : (
              <Button
                value="all"
                onClick={() => setToggle("all")}
                id="ToogleButton"
              >
                All
              </Button>
            )}
            <div className="vr" />
            {toggle === "fullstack" ? (
              <Button
                active
                value="fullstack"
                onClick={() => setToggle("fullstack")}
                id="ToogleButton"
              >
                FULLSTACK'S
              </Button>
            ) : (
              <Button
                value="fullstack"
                onClick={() => setToggle("fullstack")}
                id="ToogleButton"
              >
                FULLSTACK'S
              </Button>
            )}
            <div className="vr" />
            {toggle === "frontend" ? (
              <Button
                active
                value="frontend"
                onClick={() => setToggle("frontend")}
                id="ToogleButton"
              >
                FRONTEND'S
              </Button>
            ) : (
              <Button
                value="frontend"
                onClick={() => setToggle("frontend")}
                id="ToogleButton"
              >
                FRONTEND'S
              </Button>
            )}
            {/* <div className="vr" />
            {toggle === "backend" ? (
              <Button
                active
                value="backend"
                onClick={() => setToggle("backend")}
                id="ToogleButton"
              >
                BACKEND'S
              </Button>
            ) : (
              <Button
                value="backend"
                onClick={() => setToggle("backend")}
                id="ToogleButton"
              >
                BACKEND'S
              </Button>
            )} 
        </div> */}
          <div id="CardContainer">
            {toggle === "all" &&
              projects.map((project, index) => (
                <Button onClick={() => handleOpenModal(project)} id="Card">
                  <img id="Image" src={project.image} />
                  <div id="Tags">
                    {project.tags?.map((tag, index) => (
                      <div id="Tag">{tag}</div>
                    ))}
                  </div>
                  <div id="Details">
                    <div id="TagTitle">{project.title}</div>
                    <div id="Date">{project.date}</div>
                    <div id="Description">{project.description}</div>
                  </div>
                </Button>
              ))}
            {projects
              .filter((item) => item.category == toggle)
              .map((project) => (
                <Button onClick={() => handleOpenModal(project)} id="Card">
                  <img id="Image" src={project.image} />
                  <div id="Tags">
                    {project.tags?.map((tag, index) => (
                      <div id="Tag">{tag}</div>
                    ))}
                  </div>
                  <div id="Details">
                    <div id="TagTitle">{project.title}</div>
                    <div id="Date">{project.date}</div>
                    <div id="Description">{project.description}</div>
                  </div>
                </Button>
              ))}
          </div>
        </div>
      </Container >
      {/* Modal for displaying project details */}
      <Modal Modal show={showModal} onHide={handleCloseModal} centered >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedProject?.image} alt={selectedProject?.title} id="Image" />
          <p id="Date" style={{ marginTop: "10px" }}>{selectedProject?.date}</p>
          <p style={{ marginTop: "1rem", marginBottom: "1rem", textAlign: "justify", fontSize: "1.1rem" }}>{selectedProject?.description}</p>
          <div id="Tags">
            {selectedProject?.tags.map((tag, index) => (
              <div id="Tag" key={index}>{tag}</div>
            ))}
          </div>
          <p style={{ marginTop: "15px" }}>
            {selectedProject?.links?.length &&
              selectedProject?.links?.map((link, indx) => (
                <p style={{ display: "inline", marginLeft: "10px" }}>
                  <a href={link} target="_blank" rel="noopener noreferrer">Live Page {selectedProject?.links?.length > 1 ? indx + 1 : ''}</a>
                </p>
              ))

            }
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div >
  );
}

export default Projects;
