import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Page, NavigationContainer, NavigationLink, NavLinkContainer, TextContainer, Name, Blurb, FooterContainer, SocialsLinkContainer, SocialsLink } from './navigation.styles'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navigation = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);
  }, [])

  return (
    <Page>
          <NavigationContainer>
            <TextContainer to='/'>
              <Name>David Tang</Name>
              <Blurb>CS Student at Purdue</Blurb>
            </TextContainer>

              { windowSize > 768 ?
              <NavLinkContainer>
                <NavigationLink to='/about'> About Me </NavigationLink>
                <NavigationLink to='/projects'> Personal Projects </NavigationLink>
                <NavigationLink to='/contact'> Contact Me </NavigationLink>
              </NavLinkContainer>
              :
                <div style={{justifyContent: 'flex-end'}}>
                  <DropdownButton title="Menu">
                      <Dropdown.Item href="/about"> About Me </Dropdown.Item>
                      <Dropdown.Item href="/projects"> Personal Projects </Dropdown.Item>
                      <Dropdown.Item href="/contact"> Contact Me </Dropdown.Item>
                  </DropdownButton>
                </div>
            }
          </NavigationContainer>
        <Outlet />
          <FooterContainer>
            <SocialsLinkContainer>
              <SocialsLink href="https://www.instagram.com/" target="_blank">
                <FontAwesomeIcon icon={brands("instagram")} />
              </SocialsLink>
              <SocialsLink href="https://www.linkedin.com/in/david-tang-882063214/" target="_blank">
                <FontAwesomeIcon icon={brands("linkedin")} />
              </SocialsLink>
              <SocialsLink href="https://github.com/dtang123" target="_blank">
                <FontAwesomeIcon icon={brands("github")} />
              </SocialsLink>
            </SocialsLinkContainer>
        </FooterContainer>
        
    </Page>
  )
}

export default Navigation;
