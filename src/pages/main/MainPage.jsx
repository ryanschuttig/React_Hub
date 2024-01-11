import React, { useState } from "react";
import ProjectCard from "../../components/project-card/ProjectCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./MainPage.scss";
import Filter from "../../components/filter/Filter";

export const MainPage = () => {
  const [project, setProject] = useState([
    {
      id: 1,
      name: "Weather Dashboard",
      href: "/weather",
    },
    {
      id: 2,
      name: "Calculator",
      href: "/href",
    },
    {
      id: 3,
      name: "To-Do List",
      href: "/href",
    },
    {
      id: 4,
      name: "Simon Says",
      href: "/href",
    },
    {
      id: 5,
      name: "Password Generator",
      href: "/href",
    },
    {
      id: 6,
      name: "Recipe List",
      href: "/href",
    },
  ]);

  return (
    <>
      <Header />
      <Filter />
      <div className="container">
        {project.length
          ? project.map((project) => (
              <ProjectCard name={project.name} key={project.id} href={project.href} />
            ))
          : ""}
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
