import { Container } from "react-bootstrap"
import ProjectCard from "../components/ProjectCard";
import data from '../data.json';

const ProjectsPage = () => {


  const projects = data.map(project => <ProjectCard key={project.id} project={project} />);


  return (
    <Container fluid className="page">
      <Container >
        <div>
          <h1>Have a look on some of my works</h1>
        </div>
        <section className="projects-wrapper row gx-5">
          {projects}
        </section>
      </Container>
    </Container>
  )
}

export default ProjectsPage