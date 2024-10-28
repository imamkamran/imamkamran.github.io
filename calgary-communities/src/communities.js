import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

const url = 'https://data.calgary.ca/resource/surr-xmvs.json';

const CommunityMap = () => {
    const [communities, setCommunities] = useState([]);

    // Fetch data from the API
    useEffect(() => {
        const fetchCommunities = async () => {
            try {
                console.log('Fetching communities...');
                const response = await axios.get(url);
                setCommunities(response.data);

                if (response.data.length === 0) {
                    console.log('No communities found.');
                } else {
                    console.log('Calgary Residential Communities:', response.data);
                }
            } catch (error) {
                console.error('Error fetching the communities data:', error.message);
            }
        };

        fetchCommunities();
    }, []);

    return (
        <MapContainer center={[51.1835, -114.0480]} zoom={13} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {communities.map((community) => {
                const coordinates = community.multipolygon.coordinates[0][0].map(([lng, lat]) => [lat, lng]);
                return <Polygon key={community.comm_code} positions={coordinates} color="blue" />;
            })}
        </MapContainer>
    );
};

export default CommunityMap;


