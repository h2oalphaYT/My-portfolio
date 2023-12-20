import React, { useState, useEffect } from 'react';
import styles from "./Projects.module.css";
import projects from "../../Data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 3));
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotateProjects = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
    const newProjects = [...visibleProjects.slice(1), projects[nextIndex]];
    setVisibleProjects(newProjects);
  };

  useEffect(() => {
    const interval = setInterval(rotateProjects, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.id || index}  // Use unique project id if available
            project={project}
            animationClass={styles.projectEnter} // Assuming you have defined this class in your CSS
          />
        ))}
      </div>
    </section>
  );
};
