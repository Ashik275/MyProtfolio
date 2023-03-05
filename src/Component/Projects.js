import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Row>
        <Col>
          <h2>Project</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <Tab.Container id="projects-tab" defaultActiveKey="first">
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab Three</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content
              id="slideInUp"
              // className={
              //   isVisible ? "animate__animated animate__slideInUp" : ""
              // }
            >
              <Tab.Pane eventKey="first">
                <Row>
                  {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quam, quod neque provident velit, rem explicabo
                  excepturi id illo molestiae blanditiis, eligendi dicta
                  officiis asperiores delectus quasi inventore debitis quo.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque quam, quod neque provident velit, rem explicabo
                  excepturi id illo molestiae blanditiis, eligendi dicta
                  officiis asperiores delectus quasi inventore debitis quo.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};

export default Projects;
