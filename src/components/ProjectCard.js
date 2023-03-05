import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { id, name, description, images, } = project;
  return (
    <div className="col-md-4 d-flex">
      <div className="card bg-custom-light mb-5" >
        <img className="card-img-top card-header-img" src={images.main} alt="Card image cap" />
        <div className="card-body card-content">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.substring(0, 200)}</p>
          <Link
            to={`/project/${id}`}
            className="btn bg-custom-primary color-custom-light"
            state={project}
          >See More</Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard