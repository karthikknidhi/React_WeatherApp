import React , {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMaps';


class WeatherList extends Component{

renderWeather(city){
const name = city.city.name;
const temps = _.map(city.list.map(weather => weather.main.temp),(temp) =>temp-273);
const pressure = city.list.map(weather => weather.main.pressure);
const humidity = city.list.map(weather => weather.main.humidity);
const {lon,lat} = city.city.coord;

return(
<tr key = {name}>
<td><GoogleMap lon = {lon} lat = {lat}/></td>
<td> 
<Chart data = {temps} color = "red" units = "&#8451;" />
</td>
<td> 
<Chart data = {pressure} color = "green" units = "hPa" />
</td>
<td> 
<Chart data = {humidity} color = "black" units = "%" />
</td>
</tr>
);
}

render(){
return(
	<table className = "table table-hover">
	<thead>
	<tr>
	<th>City</th>
	<th>Temperature(&#8451;)</th>
	<th>Pressure(hPa)</th>
	<th>Humidity(%)</th>
	</tr>
	</thead>
	<tbody>
	{this.props.weather.map(this.renderWeather)}
	</tbody>
	</table>
);
}
}

function mapStateToProps({weather}){

	return {weather}; //es6 for state.weather

}

export default connect(mapStateToProps)(WeatherList);