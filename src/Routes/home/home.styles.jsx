import styled from "styled-components"


export const ContentContainer = styled.div `
  align-items: center;
  padding: 50px 70px 50px 70px;
  & .subContainer {
    margin: 50px 0 50px 0;
    padding: 40px 40px;
    background-color: grey;
    border-radius: 8px;
    border: solid;
    align-items: center;

    & .carousel-container {
      margin: 0 10px 12px 0;
      padding: 0 0 12px 12px;
      background-color: #E5E7E9;
      border-radius: 10px;
    }
  }
`

export const Picture = styled.img `
  border-radius: 50%;
`
