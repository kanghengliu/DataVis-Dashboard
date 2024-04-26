import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MoviesMap = ({ tconst }) => {
    const [locations, setLocations] = useState([]);

    // Load the locations data
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
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc, index) => (
                <Marker key={index} position={[loc.latitude, loc.longitude]}>
                    <Tooltip>{loc.location}</Tooltip>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MoviesMap;
