import React from 'react'
import { useContext } from 'react'
import { MyContext } from './ContextProvider'
import DataBox from './DataBox'


const Display = () => {
  const [state] = useContext(MyContext)
  
  if(state.status === "loading"){
    return(
      <p>Loading</p>
    )
  }

  if(state.status === "loaded"){
    return(
      <div className="display">
        <h2 className="display__title">{state.input}</h2>
        {state.data?.list.slice(0, 6).map((item, i) => (
            <DataBox key={i} item={item} />
        ))}
      </div>
    )
  }
}

export default Display
