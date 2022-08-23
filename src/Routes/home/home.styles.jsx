import styled from "styled-components"


export const ContentContainer = styled.div `
  align-items: center;
  padding: 50px 65px 50px 65px;
  & .subContainer {
    margin: 50px 0 50px 0;
    padding: 40px 40px;
    background-color: grey;
    border-radius: 8px;
    border: solid;
    align-items: center;
    & .row-container {
      justify-content: space-around;
      margin-top: 30px;
      & .carousel-container {
        margin: 0 0 12px 0;
        padding: 12px 12px 12px 12px;
        background-color: #E5E7E9;
        border-radius: 10px;
        & .more-button {
          margin-top: 15px;
        }
      }
    }
    
  }
`

export const Picture = styled.img `
  border-radius: 50%;
`
