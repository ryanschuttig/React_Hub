import React, { useState } from "react";
import ProjectCard from "../../components/project-card/ProjectCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./MainPage.scss";

export const MainPage = () => {
  const [project, setProject] = useState([
    {
      name: "Weather Dashboard",
      href: "/href",
    },
    {
      name: "Calculator",
      href: "/href",
    },
    {
      name: "To-Do List",
      href: "/href",
    },
  ]);

  return (
    <>
      <Header />
      <div className="container">
        {project.length
          ? project.map((project) => (
              <ProjectCard name={project.name} href={project.href} />
            ))
          : ""}
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
