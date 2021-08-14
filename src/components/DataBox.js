import React, {useContext, useState} from 'react'
import "../style/DataBox.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MyContext } from './ContextProvider';

const DataBox = ({item}) => {
  const [showMore, setShowMore] = useState(false)
  const {dt_txt, main, weather, wind} = item
  const month = dt_txt.split(" ")[0].split("-").join("/")
  const hours = dt_txt.split(" ")[1].split(":")
  const [state] = useContext(MyContext)
  console.log(state);

  return (
    <div className="dataBox">
      <div className="dataBox__info">
        <p className="dataBox__time">{month} - {hours[0]}:{hours[1]}</p>
        <p className="dataBox__temp">{Math.round(main.temp)}°C</p>
        <img className="dataBox__icon" src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="icon"/>
        <div 
          onClick={() => setShowMore(!showMore)} 
          className="dataBox__iconBox"
        >
          <ExpandMoreIcon fontSize="large" className={`dataBox__arrow ${showMore ? "flip" : "unflip"}`}/>
        </div>
      </div>
      <div className={`dataBox__moreInfo ${showMore ? "show" : ""}`}>
        <p>Wind speed: {wind.speed} km/h</p>
        <p>Weather: {weather[0].description}</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Pressure : {main.pressure} Pa</p>
      </div>
    </div>
  )
}

export default DataBox


