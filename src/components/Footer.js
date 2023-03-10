import { Container } from 'react-bootstrap';
import { EnvelopeAt, Github, Linkedin } from 'react-bootstrap-icons';


const Footer = () => {
  return (
    <footer className="bg-custom-dark text-center text-lg-start footer">
      <Container >     
      <div className="text-center color-custom-light p-3 footer-bottom" >
        <div className='footer-social-links'>
          <div> <a href="https://github.com/AleksandrRiabov" target="_blank" rel='noreferrer no-follow'> <Github /></a></div>
          <div> <a href='https://www.linkedin.com/in/aleksandr-riabov/' target="_blank" rel='noreferrer no-follow'> <Linkedin /></a></div>
          <div> <EnvelopeAt/> <span> sania.riabov@gmail.com</span></div>
        </div>
        
        © 2023 Copyright:
        <a className="text-light" href="https://github.com/AleksandrRiabov"> Aleksandr Riabov</a>
      </div>
      </Container>
    </footer>
  )
}

export default Footer