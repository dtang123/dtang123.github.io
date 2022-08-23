import { Fragment, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NavigationContainer, NavigationLink, NavLinkContainer, TextContainer, Name, Blurb, FooterContainer } from './navigation.styles'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const Navigation = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);
  }, [])

  const navigateAbout = () => {
    navigate("/about")
  }

  const navigateSkills = () => {
    navigate("/skills")
  }

  const navigateProjects = () => {
    navigate("/projects")
  }

  const navigateContact = () => {
    navigate("/contact")
  }

  return (
    <Fragment>
        <NavigationContainer>
          <TextContainer to='/'>
            <Name>David Tang</Name>
            <Blurb>CS Student at Purdue</Blurb>
          </TextContainer>

            { windowSize > 768 ?
            <NavLinkContainer>
              <NavigationLink to='/about'> About Me </NavigationLink>
              <NavigationLink to='/skills'> Skills </NavigationLink>
              <NavigationLink to='/projects'> Personal Projects </NavigationLink>
              <NavigationLink to='/contact'> Contact Me </NavigationLink>
            </NavLinkContainer>
            :
              <div style={{justifyContent: 'flex-end'}}>
                <DropdownButton title="Menu">
                    <Dropdown.Item onClick={navigateAbout}> About Me </Dropdown.Item>
                    <Dropdown.Item onClick={navigateSkills}> Skills </Dropdown.Item>
                    <Dropdown.Item onClick={navigateProjects}> Personal Projects </Dropdown.Item>
                    <Dropdown.Item onClick={navigateContact}> Contact Me </Dropdown.Item>
                </DropdownButton>
              </div>
          }
        </NavigationContainer>
      <Outlet />
      <FooterContainer>
        <NavigationLink to='/about'> About Me </NavigationLink>
        <NavigationLink to='/about'> About Me </NavigationLink>
        <NavigationLink to='/about'> About Me </NavigationLink>
      </FooterContainer>
    </Fragment>
  )
}

export default Navigation;
