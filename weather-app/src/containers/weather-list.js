import React from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map';


class WeatherList extends React.Component {
    renderWeather(d, i) {
        const name = d.city.name;
        const temps = d.list.map((weather) => {
            return weather.main.temp;
        });
        const pressures = d.list.map((weather) => {
            return weather.main.pressure;
        });
        const humidities = d.list.map((weather) => {
            return weather.main.humidity;
        });

        const lat = d.city.coord.lat;
        const lng = d.city.coord.lon;

        return (
            <tr key={i}>
                <td><GoogleMap lat={lat} lng={lng} /></td>
                <td><Chart data={temps} units="K" color="red" /></td>
                <td><Chart data={pressures} units="hPa" color="green" /></td>
                <td><Chart data={humidities} units="%" color="blue" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// identical to passing state and just pulling off the 'weather' attribute
function mapStateToProps({weather}) {
    // check out index.js, we bind it to state.weather in our root reducer
    return { weather }
    // identical to: return { weather: weather }
}

// this exports the "connected" version of WeatherList
export default connect(mapStateToProps)(WeatherList);