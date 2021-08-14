import React from 'react'
import "../style/Title.css" 
import SearchIcon from '@material-ui/icons/Search'
import { useContext } from 'react'
import { MyContext } from './ContextProvider'

const Title = () => {
  const [state, setState] = useContext(MyContext)

  return (
    <header className="title">
      <h1>Weather App</h1>
      <SearchIcon 
        onClick={() => setState({...state, searching:true})} 
        fontSize="large" 
        className={`title__icon ${state.searching ? "hide" : ""}`}
      />
    </header>
  )
}

export default Title
