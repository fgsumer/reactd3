import './App.css';
import { Component } from 'react';
import { csvParse } from 'd3-dsv';
import dataCsv from './zipcodes_1000';
import Map from './Components/Map';
import SearchZipcodes from './Components/Search';

const data = csvParse(dataCsv, (d) => {
  return {
    lon: +d.lon,
    lat: +d.lat,
    zipcode: d.zipcode,
    city: d.city,
  };
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      query: '',
      filteredZipCodes: [],
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
  }
  onSearchHandler(event) {
    this.setState({
      query: event.target.value,
    });

    //console.log(this.state.query);
  }
  // componentDidUpdate() {
  //   this.state.filteredZipCodes = this.state.data.filter((d) =>
  //     d.zipcode.startsWith(this.state.query),
  //   );

  //   //console.log(this.state.filteredZipCodes);
  // }

  // componentWillUpdate() {
  //   filtered = this.state.filteredPersons.map((d, i) => <p key={i}>{d}</p>);
  // }
  render() {
    // console.log(this.state.data);
    // const city = data.slice(0, 50).map((datum) => <p>{datum.city} </p>);

    // console.log(filteredPersons);

    return (
      <>
      <SearchZipcodes
        onSearchHandler={this.onSearchHandler}
          query={this.state.query}
        ></SearchZipcodes>
        <Map data={this.state.data} query={this.state.query}></Map>;
      </>
    );
  }
}

export default App;
