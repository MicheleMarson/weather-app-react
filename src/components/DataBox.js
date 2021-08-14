import React, {useState} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled, {css} from "styled-components"
// import {} from "../style/DataBox"

const DataBox = ({item}) => {
  const [showMore, setShowMore] = useState(false)
  const {dt_txt, main, weather, wind} = item
  const month = dt_txt.split(" ")[0].split("-")
  const hours = dt_txt.split(" ")[1].split(":")

  
  return (
    <Container>
      <Info showMore={showMore}>
        <p className="dataBox__time">{month[1]}/{month[2]} - {hours[0]}:{hours[1]}</p>
        <p className="dataBox__temp">{Math.round(main.temp)}°C</p>
        <img className="dataBox__icon" src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="icon"/>
        <div onClick={() => setShowMore(!showMore)} className="dataBox__iconBox">
          <ExpandMoreIcon fontSize="large" className={`dataBox__arrow`}/>
        </div>
      </Info>
      {
        showMore ? (
          <MoreInfo>
              <p>Wind speed: {wind.speed} km/h</p>
              <p>Weather: {weather[0].description}</p>
              <p>Humidity: {main.humidity}%</p>
              <p>Pressure : {main.pressure} Pa</p>
          </MoreInfo>
        ) : null
      }
    </Container>
  )
}

export default DataBox


// ------------------------------style---------------------------
const Container = styled.section`
  max-width: 600px;
  margin: 0 auto;
  &:not(:last-child){
    margin-bottom: 6px;
  }  
`

const Info = styled.div`
  display: flex;
  background: #262732;
  align-items: center;
  justify-content: space-between;

  p{
    padding: 0 20px;
  }

  .dataBox__iconBox{
    cursor: pointer;
    background: #1A1B23;
    transition: transform .4s;
    padding: 30px;
  }
  
  .dataBox__iconBox:hover{
    background: #111218;
  }

  .dataBox__arrow{
    transform: rotate(0deg);
    transition: transform .2s ease-out;
    ${props => props.showMore && css`
      transform:rotate(180deg);
    `}
  }

  @media (max-width:375px) {
    .dataBox__icon{
      display: none;
    }
  }
`

const MoreInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  background: #3F404B;
  padding: 20px;

  p{
    padding: 10px 0;
  }

  @media (max-width:375px) {
    display: flex;
    flex-direction: column;
  }
`
// ------------------------------style---------------------------
