import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  width: 75px;
  height: 15px;
  margin: 20px auto;

  & > * {
    animation: opacity 1s infinite;
    width: 15px;
    height: 15px;
    margin: 0 5px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    float: left;
  }

  @keyframes opacity {
    0%, 100% { opacity: 1; }
    60% { opacity: 0; }
  }

  @-webkit-keyframes opacity {
    0%, 100% { opacity: 1; }
    60% { opacity: 0; }
  }

  @-moz-keyframes opacity {
    0%, 100% { opacity: 1; }
    60% { opacity: 0; }
  }

  @-ms-keyframes opacity {
    0%, 100% { opacity: 1; }
    60% { opacity: 0; }
  }

  @-o-keyframes opacity {
    0%, 100% { opacity: 1; }
    60% { opacity: 0; }
  }
`


const BallOne = styled.div`
  animation-delay: 0.1s;
`
const BallTwo = styled.div`
  animation-delay: 0.3s;
`
const BallThree = styled.div`
  animation-delay: 0.5s;
`

const Loader = ({ children }) => (
  <Container>
    <BallOne/>
    <BallTwo/>
    <BallThree/>
  </Container>
)

export default Loader
