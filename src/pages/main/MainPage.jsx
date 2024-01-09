import React, { useState } from "react";
import ProjectCard from "../../components/project-card/ProjectCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./MainPage.scss";
import Filter from "../../components/filter/Filter";

export const MainPage = () => {
  const [project, setProject] = useState([
    {
      name: "Weather Dashboard",
      href: "/weather",
    },
    {
      name: "Calculator",
      href: "/href",
    },
    {
      name: "To-Do List",
      href: "/href",
    },
    {
      name: "Simon Says",
      href: "/href",
    },
    {
      name: "Password Generator",
      href: "/href",
    },
    {
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
              <ProjectCard name={project.name} href={project.href} />
            ))
          : ""}
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
