import React from 'react';
import {withGoogleMap, GoogleMap, Marker, withScriptjs } from "react-google-maps"

const GoogleMaps = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.lat, lng: props.long }}
    >
    <Marker
        position={{ lat: props.lat, lng: props.long }}
    />
    </GoogleMap>
));

export default GoogleMaps
