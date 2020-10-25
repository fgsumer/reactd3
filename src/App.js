import './App.css';
import { Component } from 'react';
import { csvParse } from 'd3-dsv';
import dataCsv from './zipcodes_1000';
import Map from './Components/Map';

const data = csvParse(dataCsv, (d) => {
  return {
    lon: -d.lon,
    lat: +d.lat,
    zipcode: +d.zipcode,
    city: d.city,
  };
});
class App extends Component {
  state = {
    data: data,
    width: 700,
    height: 500,
  };

  render() {
    // console.log(this.state.data);
    const city = data.slice(0, 50).map((datum) => <p>{datum.city} </p>);
    return (
      <div className="App">
        <Map data={this.state.data} width={this.state.width} height={this.state.height}></Map>
        <p>{city}</p>
      </div>
    );
  }
}

export default App;
