import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-custom-dark text-center text-lg-start footer">
      <Container >
        <div className='row '>
          <Link to='/home' className='col-md-3 col-xs-12 footer-link'> Home</Link>
          <Link to='/projects' className='col-md-3 col-xs-12 footer-link'> Projects</Link>
          <Link to='/contact' className='col-md-3 col-xs-12 footer-link'> Contact</Link>
          <Link to='/resume' className='col-md-3 col-xs-12 footer-link'> Resume</Link>
        </div>
      </Container>
      <div className="text-center color-custom-light p-3 footer-bottom" >
        © 2023 Copyright:
        <a className="text-light" href="https://github.com/AleksandrRiabov"> Aleksandr Riabov</a>
      </div>


    </footer>
  )
}

export default Footer