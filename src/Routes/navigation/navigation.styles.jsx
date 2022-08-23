import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div `
  height: 100px;
  width: 100%;
  diplay: flex;
  background-color: blue;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 0;
  border-radius: 5px;
  &:hover {
    filter: brightness(200%);
  }
`
export const NavigationLink = styled(Link) `
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: white;
`

export const NavLinkContainer = styled.div `
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 20px 0 0;
  .dropdown {
    overflow: hidden;
  }
  `

export const TextContainer = styled(Link) `
  height: 80%;
  float: left;
  align-items: center;
  margin: 5px 0 0 50px;
  padding: 8px 10px 0 10px;
  line-height: normal;
  text-decoration: none;
  &:hover {
    border: solid;
    color: white;
  }
`

export const Name = styled.h1 `
  font-weight: bolder;
  color: white;
  text-align: center;
  margin: 0;
`
export const Blurb = styled.h5 `
  overflow-wrap: normal;
  color: white;
  text-align: center;
  margin: 0;
`
export const FooterContainer = styled(NavigationContainer) `
  margin: 0;
`
