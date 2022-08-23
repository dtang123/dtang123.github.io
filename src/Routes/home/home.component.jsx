import { Picture } from './home.styles'
import ProfilePic from '../../assets/logo192.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { ContentContainer } from './home.styles'
import { ReactComponent as BedImg } from '../../assets/bed-solid.svg'
import { ReactComponent as RunImg } from '../../assets/person-running-solid.svg'
import { ReactComponent as SportImg } from '../../assets/football-solid.svg'
import { ReactComponent as PythonImg } from '../../assets/python-brands.svg'
import { ReactComponent as ReactImg } from '../../assets/react-brands.svg' 
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <ContentContainer>
      <Container fluid="md" className="subContainer">
        <Row>
          <Col md={{ span: 3, offset: 2 }} >
            <Picture src={ProfilePic} alt="Picture of David" class="col"/>
          </Col>
          <Col md={{ offset: 1 }}>
            <h1>Hello, my name is David</h1>
            <h5>This is my personal site</h5>
          </Col>
        </Row>
      </Container>
        <Container fluid="md" className="subContainer">
        <h1>Preview</h1>
          <Row>
            <Col md={{ span: 4}} className="carousel-container">
              <h3>About Me</h3>
              <Carousel>
                <Carousel.Item>
                  <BedImg/>
                  <Carousel.Caption>
                      <h5>Sleep</h5>
                      <p>I love my sleep</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <RunImg />
                  <Carousel.Caption>
                      <h5>Running</h5>
                      <p>I like to run in my spare time</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <SportImg/>
                  <Carousel.Caption>
                      <h5>Watching Sports</h5>
                      <p>I like to watch sports</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <Button className="more-button" variant="outline-info">See More</Button>
            </Col>
            <Col md={{ span: 4}} className="carousel-container">
              <h3>Skills</h3>
              <Carousel>
                <Carousel.Item>
                  <PythonImg />
                  <Carousel.Caption>
                      <h5>Python</h5>
                      <p>I like to run in my spare time</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <ReactImg />
                  <Carousel.Caption>
                      <h5>React</h5>
                      <p>I like to run in my spare time</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <Carousel.Caption>
                      <h5>TensorFlow</h5>
                      <p>I like to run in my spare time</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <Button className="more-button" variant="outline-info">See More</Button>
            </Col>
            <Col md={{ span: 4}} className="carousel-container">
              <h3>Projects</h3>
              <Carousel>
                <Carousel.Item>
                  Hello
                </Carousel.Item>
                <Carousel.Item>
                  Hi
                </Carousel.Item>
                <Carousel.Item>
                  osdfa
                </Carousel.Item>
              </Carousel>
              <Button className="more-button" variant="outline-info">See More</Button>
            </Col>
          </Row>
        </Container>
    </ContentContainer>
  )
}

export default Home;
