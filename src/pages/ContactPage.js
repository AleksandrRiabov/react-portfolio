import { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"
import { Github, Linkedin, Mailbox } from "react-bootstrap-icons"

const ContactPage = () => {
  const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  }
  const [form, setForm] = useState(initialState);
  const { firstname, lastname, email, message } = form;

  const handleSubmit = e => {
    e.preventDefault();

    if (!Object.values(form).every(input => input.trim())) {
      alert("All field required");
      return
    }

    alert(`Thank you ${firstname} ${lastname}! \n I will replay to ${email}`)
    setForm(initialState);
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }


  return (
    <Container fluid className="page">
      <Container className="contact-page" >
        <div className="contact-header" >
          <h1>Contact Me</h1>
        </div>
        <div className="row">
          <div className="contact-left col-lg-8">
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control onChange={handleChange} type="text" placeholder="First Name" value={firstname} name='firstname' />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control onChange={handleChange} type="text" placeholder="Last Name" value={lastname} name="lastname" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={handleChange} type="email" placeholder="Enter email" value={email} name="email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Message</Form.Label>
                <Form.Control onChange={handleChange} value={message} as="textarea" rows={3} name="message" />
              </Form.Group>
              <Button className="bg-custom-secondary submit-btn" type="submit">
                Send Message
              </Button>
            </Form>
          </div>
          <div className="contact-right col-lg-4">
            <div className="contact-links">
              <div><Github /> <a href="https://github.com/AleksandrRiabov" target="_blank" rel='noreferrer no-follow'> My GitHub</a></div>
              <div> <Linkedin /> <a href='https://www.linkedin.com/in/aleksandr-riabov/' target="_blank" rel='noreferrer no-follow'> LinkedIn</a></div>
              <div> <Mailbox /> <span> sania.riabov@gmail.com</span></div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default ContactPage