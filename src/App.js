import './App.css';
import { Component } from 'react';
import { csvParse } from 'd3-dsv';
import dataCsv from './zipcodes_all';
import Map from './Components/Map';

const data = csvParse(dataCsv, (d) => {
  return {
    lon: +d.lon,
    lat: +d.lat,
    zipcode: +d.zipcode,
    city: d.city,
  };
});
class App extends Component {
  state = {
    data: data,
  };

  render() {
    // console.log(this.state.data);
    // const city = data.slice(0, 50).map((datum) => <p>{datum.city} </p>);
    return <Map data={this.state.data}></Map>;
  }
}

export default App;
