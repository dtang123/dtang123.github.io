import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ContactContainer } from './contact.styles';
import emailjs from 'emailjs-com';


const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_5trxnxh', 'template_v0gvpll', e.target, 'XyHOUIZQ-cgoRnpZX')
      .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          window.location.reload()   
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <Form className="email-form" onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="from_email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Subject</Form.Label>
          <Form.Control placeholder="Enter subject" name="subject" required/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={8} aria-label="With textarea" name="message" required/>
        </Form.Group>
        <Button type="submit">Send</Button>
      </Form>
    </ContactContainer>
  )
}


export default Contact;
