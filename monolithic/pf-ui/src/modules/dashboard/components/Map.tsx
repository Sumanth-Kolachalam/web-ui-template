import React, { useMemo, useCallback } from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.scss';

// Keep local types as `any` to avoid external declaration issues in this file.
const indiaBoundsGeoJson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { name: 'India Bounds' },
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [68.17665, 6.5546], // Southwest
                        [97.40256, 6.5546], // Southeast
                        [97.40256, 35.6745], // Northeast
                        [68.17665, 35.6745], // Northwest
                        [68.17665, 6.5546], // Close polygon
                    ],
                ],
            },
        },
    ],
} as const;

const Map: React.FC = () => {
    const data = useMemo(() => {
        return indiaBoundsGeoJson;
    }, []);

    const geoStyle = useMemo(() => {
        return {
            color: '#4A90E2',
            weight: 2,
            fillColor: '#E0F3FF',
            fillOpacity: 0.5,
        } as const;
    }, []);

    const center = useMemo(() => {
        return [22.9734, 78.6569] as [number, number];
    }, []);

    const onEachFeature = useCallback((feature: unknown, layer: unknown) => {
        const props = (feature as Record<string, unknown>)?.properties as
            | Record<string, unknown>
            | undefined;
        const nameVal = props?.name;
        let name = '';
        if (typeof nameVal === 'string' || typeof nameVal === 'number') {
            name = String(nameVal);
        } else if (nameVal) {
            try {
                name = JSON.stringify(nameVal);
            } catch {
                name = '';
            }
        }
        const l = layer as { on?: (ev: string, fn: (...args: unknown[]) => void) => void } | undefined;
        if (l?.on) {
            l.on('click', () => {
                alert(`Clicked on ${name}`);
            });
        }
    }, []);

    return (
        <div className="card p-0">
            {/* @ts-expect-error react-leaflet prop typing mismatch */}
            <MapContainer center={center} zoom={4} className="map">
                {/* @ts-expect-error react-leaflet prop typing mismatch */}
                <GeoJSON data={data} style={geoStyle as unknown} onEachFeature={onEachFeature as unknown} />
            </MapContainer>
        </div>
    );
};

export default Map;
