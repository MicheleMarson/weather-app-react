import React from 'react'
import { useContext } from 'react'
import { MyContext } from './ContextProvider'
import DataBox from './DataBox'
import styled from "styled-components"


const Display = () => {
  const [state] = useContext(MyContext)
  
  if(state.status === "loading"){
    return(
      <p>Loading</p>
    )
  }

  if(!state.data.list){
    return (
      <NotFound>City not found</NotFound>
    )
  }

  if(state.status === "loaded"){
    return(
      <>{!state.searching && (
        <Container>
          <h2 className="display__title">{state.input + ", " + state.data.city.country}</h2>
            {state.data?.list.slice(0, 8).map((item, index) => (
              <DataBox key={index} item={item}/>
            ))}
        </Container>
      )}
      </>
    )
  }
}

export default Display

// ------------------------------style---------------------------
const Container = styled.section`
  padding: 20px 16px;

  .display__title{
    text-align: center;
    padding: 50px 0;
    text-transform: capitalize;
    font-size: 1.6rem;
    text-shadow: 2px 2px 3px black;
  }
`

const NotFound = styled.h2`
  text-align: center;
  padding-top: 6rem;
`
// ------------------------------style---------------------------

