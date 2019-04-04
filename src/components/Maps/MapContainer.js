import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { MapPin } from './MapPin';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                latitud: '',
                longitud: '',
                name: '',
            }
        }
    }
    render() {
        let located, center,name;
        if(this.props.data) {
            const {location} = this.props.data;
           name=this.props.data.name;
           center =  { lat: location.latitud, lng: location.longitud };
           located = { latitud: location.latitud, longitud: location.longitud };
        } else {
            center= {lat: -34.6090988,
            lng: -58.3654266};
            located = { latitud: -34.6090999, longitud:-58.3634268};
            name="Despegar.com"
        }
        return (
            // Important! Always set the container height explicitly
            <div style={{ marginLeft:30, marginTop:20, height: '50vh', width: '70%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBLS9PMpSPO1utBmhNQKB57m092DCZcq7Q' }}
                    defaultCenter={center}
                    defaultZoom={this.props.zoom}>
                    <MapPin
                        lat={located.latitud}
                        lng={located.longitud}
                        text={name}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

MapContainer.defaultProps = {
    zoom: 15
};
