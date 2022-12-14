import React from 'react';
import './City.css'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLeftLong} from '@fortawesome/free-solid-svg-icons'


class City extends React.Component {
    constructor(props) {
      super(props);

    }
    render(){
        return(

            <div className='city'>
               <div className="container-city">
                <Link to={`/`} className='return'>
                <FontAwesomeIcon icon={faLeftLong} className='return-btn'/>
                </Link>
                <h2 className="title-city">{this.props.city.name}</h2>
                <hr className='hr' />
                <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+this.props.city.img+"@2x.png"} width="125" height="125" alt="" />    
                <hr className='hr' />
                <div className="container-temp">
                    <p className='temp-exact'>Temp: {this.props.city.temp}°C</p>
                    <p className='temp-exact'>Temp max: {this.props.city.max}°C</p>
                    <p className='temp-exact'>Temp min: {this.props.city.min}°C</p>
                </div>
                <div className="container-bottom-city">
                   
                    <div className='container-btm'>
                    <div className='wind-box'>
                        <p>Wind: {this.props.city.wind}</p>
                        <p>Clouds: {this.props.city.clouds}</p>
                    </div>
                    <div className='lat-box'>
                        <p>Longitud: {this.props.city.longitud}</p>
                        <p>Latitud: {this.props.city.latitud}</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }    
}

export default City