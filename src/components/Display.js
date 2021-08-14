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
      <>{state.data.list && !state.searching ? (
        <div className="display">
          <h2 className="display__title">{state.input + ", " + state.data.city.country}</h2>
            {state.data?.list.slice(0, 8).map((item, index) => (
              <DataBox key={index} item={item} index={index}/>
            ))}
        </div>
      ):(<h2 className="display__notFound">City not found</h2>)}     
      </>
    )
  }
}

export default Display
