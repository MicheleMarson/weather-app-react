import React from 'react' 
import SearchIcon from '@material-ui/icons/Search'
import { useContext } from 'react'
import { MyContext } from './ContextProvider'
import styled from "styled-components"

const Title = () => {
  const [state, setState] = useContext(MyContext)

  return (
    <Container>
      <h1>Weather App</h1>
      <SearchIcon 
        onClick={() => setState({...state, searching:true})} 
        fontSize="large" 
        className={`title__icon ${state.searching ? "hide" : ""}`}
      />
    </Container>
  )
}

export default Title

// ------------------------------style---------------------------
const Container = styled.header`
  z-index: 10;
  font-size: 1.6rem;
  text-align: center;
  background: #262732;
  position: relative;
  padding: 20px;

  .title__icon{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 60px;
    cursor: pointer;
    z-index:10;
  }
  
  .title__icon.hide{
    display: none;
  }

  @media (max-width:375px){
    font-size:1rem;
  
    .title__icon{
      right: 10px;
    }
  }
`
// ------------------------------style---------------------------
