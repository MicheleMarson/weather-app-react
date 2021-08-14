import React, { useState } from 'react'
import { useContext } from 'react'
import "../style/Search.css"
import { MyContext } from './ContextProvider'
// https://api.openweathermap.org/data/2.5/forecast?q=London&appid=c933bac99e074c3df1427010c63af3ef
// icons : http://openweathermap.org/img/wn/10d@2x.png  _> change 10d 

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
    if(!state.input){ 
      setPop(true)
    }else{
      setPop(false)
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${state.input}&appid=c933bac99e074c3df1427010c63af3ef&units=metric`
    }
    fetchData(url)
  }

  console.log(state.data);

  return (
    <section className={`search ${state.searching ? "" : "hide"}`}>
      <div className="search__content">
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
          pop ? (<p className="pop">Please Enter City Name!</p>) : null
        }
        </form>
      </div>
    </section>
  )
}

export default Search
