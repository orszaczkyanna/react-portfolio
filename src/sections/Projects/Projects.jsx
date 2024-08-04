import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/harris-johnsen-2"
          title="Viberr"
          descr="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/harris-johnsen-2"
          title="Fresh Burger"
          descr="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/harris-johnsen-2"
          title="Hipsster"
          descr="Glasses Shop"
        />
        <ProjectCard
          src={fitlift}
          link="https://github.com/Ade-mir/harris-johnsen-2"
          title="Fitlift"
          descr="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
