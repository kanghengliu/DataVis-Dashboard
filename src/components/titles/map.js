"use client";
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Assuming your image is in the public directory and accessible at the '/HERE!.png' path
const customIcon = L.icon({
    iconUrl: '/HERE!.png',
    iconSize: [37, 37],    // Size of the icon, adjust as necessary
    iconAnchor: [25, 50],  // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -50], // Point from which the popup should open relative to the iconAnchor
});

const MoviesMap = ({ tconst }) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('/data/movie_locations.json')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.tconst === tconst);
                setLocations(filteredData);
            })
            .catch(err => console.error('Failed to load data', err));
    }, [tconst]);

    return (
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {locations.map((loc, index) => (
                <Marker
                    key={`${loc.tconst}-${index}`}
                    position={[loc.latitude, loc.longitude]}
                    icon={customIcon}  // Use the custom icon here
                >
                    <Tooltip>{loc.location}</Tooltip>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MoviesMap;