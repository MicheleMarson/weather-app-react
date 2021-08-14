import React, { useState } from 'react'
import { useContext } from 'react'
import { MyContext } from './ContextProvider'
import styled, { css } from "styled-components"

const Search = () => {
  const [state, setState] = useContext(MyContext)
  const [pop, setPop] = useState(false)
  
  const fetchData =async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setState({...state, data:data, searching:!state.input?true:false, status:"loaded"})
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    let url
    //if input is empty , show alert popup
    if(!state.data){
      setState({...state, status:"error"})
    }
    if(!state.input){ 
      setPop(true)
    }else{
      setPop(false)
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${state.input}&appid=c933bac99e074c3df1427010c63af3ef&units=metric`
    }
    fetchData(url)
  }

  return (
    <Container state={state}>
      <SearchContent>
        <form onSubmit={(e) => handelSubmit(e)}> 
          <input
            value={state.input}
            className="search__input" 
            placeholder="Type the city name..."
            onChange={(e) => {
              setState({...state, input:e.target.value})
              setPop(false)
            }}
          />
        {
          pop ? (<Pop>Please Enter City Name!</Pop>) : null
        }
        </form>
      </SearchContent>
    </Container>
  )
}

export default Search

// ------------------------------style---------------------------
const Container = styled.section`
  z-index: 7;
  background: #262732;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  ::placeholder{
    color: rgba(255, 255, 255, 0.199);
  }

  ${props => props.state.searching ? css`
    bottom: 0px;
  `: css`
    transition:bottom 1s ;
    bottom:1100%; 

    input{
      display: none;
    }
  `}
`

const SearchContent = styled.div`
  height: 100%;
  width: 100%;

  form{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .search__input{
    position: relative;
    background: transparent;
    width: 300px;
    border: none;
    outline: none;
    font-size: 1rem;
    border-bottom: 1px solid #fff;
    padding: 10px 0;
    color: #fff;
  }
`

const Pop = styled.p`
  color: rgb(255, 108, 71);
  z-index: 2;
  top: 60%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`
// ------------------------------style---------------------------
