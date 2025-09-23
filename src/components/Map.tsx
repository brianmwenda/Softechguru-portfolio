import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    try {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        zoom: 15,
        center: [36.8219, -1.2921], // Nairobi, Kenya coordinates
      });

      // Add a marker for the business location
      new mapboxgl.Marker({ color: '#8b5cf6' })
        .setLngLat([36.8219, -1.2921])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<div><strong>Softech Guru</strong><br/>Your Digital Solutions Partner</div>')
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      setIsMapLoaded(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isMapLoaded) {
    return (
      <div className="w-full h-64 bg-muted/20 rounded-lg border border-border flex flex-col items-center justify-center p-6">
        <h3 className="text-lg font-semibold mb-4">Our Location</h3>
        <p className="text-sm text-muted-foreground mb-4 text-center">
          Enter your Mapbox public token to view our location on the map
        </p>
        <div className="flex gap-2 w-full max-w-md">
          <Input
            type="text"
            placeholder="Enter Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleTokenSubmit} disabled={!mapboxToken.trim()}>
            Load Map
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Get your token at{' '}
          <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            mapbox.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden border border-border">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;