import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import { Github, BrowserChrome } from 'react-bootstrap-icons';

const Project = () => {
  //Scroll up every time loading project page
  window.scroll(0, 0);

  const { id } = useParams();
  const { name, description, stack, links, images } = data.find(project => project.id.toString() === id);

  return (
    <Container fluid className='page'>
      <Container className='project-container'>
        <h1 className='project-title'>{name}</h1>
        <div className='project-wrapper'>

          <div className='project-top'>
            <div className='project-left'>
              <p className='project-description'> {description}</p>
            </div>

            <div className='project-right'>
              <div className='project-header'>
              </div>
              <div className='project-image-container'>
                <img src={images.main} alt={`${name} project screenshot`} />
              </div>
            </div>
          </div>

          <div className='project-bottom'>
            <h4>Technologies Used: </h4>
            <div className='project-stack-wrapper'>
              {stack.map(tech => <li>{tech}</li>)}
            </div>
            <div>
              <div className='project-link-box'> <Github /> <a href={links.github}>Go To GitHub Repo</a></div>
              <div className='project-link-box'> <BrowserChrome /> <a href={links.deployed}>Go To Deployed Page</a></div>
            </div>
          </div>

        </div>
      </Container>
    </Container>
  )
}

export default Project