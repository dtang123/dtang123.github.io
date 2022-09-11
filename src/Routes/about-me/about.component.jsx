import { EducationContainer, PageContainer, SkillsContainer } from './about.styled'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <PageContainer>
      <EducationContainer>
        <h1>Education</h1>
        <br/>
        <h3><b>Purdue University</b></h3>
        <br/>
        <h6>&emsp;&emsp; BS Computer Science</h6>
        <h6>&emsp;&emsp; West Lafayette, IN</h6>
        <h6>&emsp;&emsp; Expected May 2026</h6>
        <br/>
        <h3><b>Dublin Jerome High School</b></h3>
        <br/>
        <h6>&emsp;&emsp; Dublin, OH</h6>
        <h6>&emsp;&emsp; 2018 - 2022</h6>
      </EducationContainer>
      <hr/>
      <SkillsContainer>
        <h1>Skills</h1>
        <h6>Languages</h6>
        <Row className="skill-row" xs={2} md={4} lg={6}>
          <Col sm={{span:1, offset: 1}} className="skill">
            Python
          </Col>
          <Col sm={{span:1, offset: 1}} className="skill">
            Java
          </Col>
          <Col sm={{span:1, offset: 1}} className="skill">
            Javascript
          </Col>
          <Col sm={{span:1, offset: 1}} className="skill">
            HTML
          </Col>
          <Col sm={{span:1, offset: 1}} className="skill">
            CSS
          </Col>
          <Col sm={{span:1, offset: 1}} className="skill">
            C++
          </Col>
          <Col sm={{span:1, offset: 1}} className="skill">
            SQL
          </Col>
        </Row>
        <br/>
        <h6>Technologies/Frameworks</h6>
        <Row className="skill-row" xs={2} md={4} lg={6}>
        <Col sm={{span:1, offset: 1}} className="skill">
            React
          </Col>
          <Col sm={{span:1, offset: 1}} className="skill">
            Flask
          </Col>
          <Col sm={{span:1, offset: 1}} className="skill">
            Bootstrap
          </Col>
          <Col sm={{span:1, offset: 1}} className="skill">
            Git
          </Col>
          <Col sm={{span:1, offset: 1}} className="skill">
            SQL Alchemy
          </Col>
          <Col sm={{span:1, offset: 1}} className="skill">
            APIs
          </Col>
        </Row>
      </SkillsContainer>
    </PageContainer>
  )
}

export default About;
