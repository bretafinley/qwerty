import React from 'react';

class GoogleMap extends React.Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        })
    }

    render() {
        // can be referred to with this.refs.map
        return <div ref="map"></div>
    }
}

export default GoogleMap;