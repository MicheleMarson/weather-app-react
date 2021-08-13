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
        onClick={() => setState({...state, search:true})} 
        fontSize="large" 
        className={`title__icon ${state.search ? "hide" : ""}`}
      />
    </header>
  )
}

export default Title
