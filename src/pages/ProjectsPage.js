import { Container } from "react-bootstrap"
import ProjectCard from "../components/ProjectCard";
import data from '../data.json';

const ProjectsPage = () => {


  const projects = data.map(project => <ProjectCard key={project.id} project={project} />);


  return (
    <Container fluid className="page">
      <Container >
        <div className="projects-header">
          <h1 className="projects-title">My Portfolio</h1>
          <p>See my works below. Unless explicitly stated otherwise, all their back-end and front-end parts were completely done by me..</p>
        </div>
        <section className="projects-wrapper row gx-5">
          {projects}
        </section>
      </Container>
    </Container>
  )
}

export default ProjectsPage