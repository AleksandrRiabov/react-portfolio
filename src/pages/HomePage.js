import { Container } from "react-bootstrap"
import avatar from '../assets/images/avatar.png'
import js from '../assets/images/js.png';
import nodeJs from '../assets/images/nodeJs.png';
import mongoDB from '../assets/images/mongoDB.png';
import reactIcon from '../assets/images/reactIcon.png';
import bootstrap from '../assets/images/bootstrap.png';
import jest from '../assets/images/jestIcon.png';
import ts from '../assets/images/ts.png';
import materialUI from '../assets/images/materialUI.png';


const HomePage = () => {
  return (
    <Container fluid className="page">
      <Container className="homePage">
        <div className="hero">
          <div className="hero-left color-custom-light">
            <h1 className="hero-title">Welcome To My Portfolio</h1>
            <p className="hero-subtitle">I'm Web Developer with a strong foundation in JavaScript and React. Driven to gain hands-on experience in the web and software development industry and contribute my technical skills to create innovative and user-friendly solutions. </p>
            <div className="hero-left-stack">
              <h4 className="stack-title">Technologies I use in my projects</h4>
              <div className="hero-left-stack-logos">
                <img src={js} alt='js icon' />
                <img src={reactIcon} alt='react icon' />
                <img src={nodeJs} alt='nodejs icon' />
                <img src={ts} alt='typescript icon' />
                <img src={mongoDB} alt='mongoDB icon' />
                <img src={bootstrap} alt='bootstrap icon' />
                <img src={jest} alt='jest icon' />
                <img src={materialUI} alt='mui icon' />
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img className="homepage-avatar" src={avatar} alt="Programmer avatar" />
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default HomePage