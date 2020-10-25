import { Component } from 'react';
import { geoAlbers, geoPath } from 'd3-geo';
import { selectAll, select } from 'd3-selection';

let dimensions = {
  width: window.innerWidth * 0.9,
  height: window.innerHeight * 0.9,
  margin: {
    top: 20,
    left: 20,
  },
};
dimensions.boundedWidth = dimensions.width - dimensions.margin.left;
dimensions.boundedHeight = dimensions.height - dimensions.margin.top;

class Map extends Component {
  componentDidMount() {
    const { data } = this.props;
    const projection = geoAlbers()
      .scale(1300)
      .translate([dimensions.boundedWidth / 2, dimensions.boundedHeight / 2]);

    const path = geoPath().projection(projection);

    const g = select(this.refs.map);

    g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cy', (d) => projection([-d.lon, +d.lat])[1])
      .attr('cx', (d) => projection([-d.lon, +d.lat])[0])
      .attr('r', 1.3)
      .style('opacity', 0.3)
      .style('fill', '#88CEC4');
  }
  render() {
    return (
      <svg
        ref="map"
        width={dimensions.boundedWidth}
        height={dimensions.boundedHeight}
        viewBox={`0, 0, ${dimensions.width}, ${dimensions.height}`}
      />
    );
  }
}
export default Map;
