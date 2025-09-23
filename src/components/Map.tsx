import React, { useEffect, useRef, useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Map = () => {
  const [googleApiKey, setGoogleApiKey] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const loadGoogleMapsScript = (apiKey: string) => {
    if (!apiKey.trim()) return;

    // Load the Extended Component Library script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js';
    
    script.onload = () => {
      initializeStoreLocator(apiKey);
    };
    
    document.head.appendChild(script);
  };

  const initializeStoreLocator = async (apiKey: string) => {
    if (!mapContainerRef.current) return;

    // Create API loader
    const apiLoader = document.createElement('gmpx-api-loader');
    apiLoader.setAttribute('key', apiKey);
    apiLoader.setAttribute('solution-channel', 'GMP_QB_locatorplus_v11_c');

    // Create store locator
    const storeLocator = document.createElement('gmpx-store-locator');
    storeLocator.setAttribute('map-id', 'DEMO_MAP_ID');
    
    // Apply custom styling
    storeLocator.style.cssText = `
      width: 100%;
      height: 100%;
      --gmpx-color-surface: hsl(var(--background));
      --gmpx-color-on-surface: hsl(var(--foreground));
      --gmpx-color-on-surface-variant: hsl(var(--muted-foreground));
      --gmpx-color-primary: hsl(var(--primary));
      --gmpx-color-outline: hsl(var(--border));
      --gmpx-fixed-panel-width-row-layout: 28.5em;
      --gmpx-fixed-panel-height-column-layout: 65%;
      --gmpx-font-family-base: "Inter", sans-serif;
      --gmpx-font-family-headings: "Inter", sans-serif;
      --gmpx-font-size-base: 0.875rem;
      --gmpx-hours-color-open: #188038;
      --gmpx-hours-color-closed: #d50000;
      --gmpx-rating-color: #ffb300;
      --gmpx-rating-color-empty: hsl(var(--muted));
    `;

    // Configuration for the store locator
    const CONFIGURATION = {
      "locations": [
        {
          "title": "Softech Guru",
          "address1": "Nairobi",
          "address2": "Kenya",
          "coords": { "lat": -1.2921, "lng": 36.8219 },
          "placeId": "ChIJZ4pnVck_LxgRKpesRnfgMCw"
        }
      ],
      "mapOptions": {
        "center": { "lat": -1.2921, "lng": 36.8219 },
        "fullscreenControl": true,
        "mapTypeControl": false,
        "streetViewControl": false,
        "zoom": 15,
        "zoomControl": true,
        "maxZoom": 17,
        "mapId": ""
      },
      "mapsApiKey": apiKey,
      "capabilities": {
        "input": false,
        "autocomplete": false,
        "directions": false,
        "distanceMatrix": false,
        "details": false,
        "actions": false
      }
    };

    // Clear container and add components
    mapContainerRef.current.innerHTML = '';
    mapContainerRef.current.appendChild(apiLoader);
    mapContainerRef.current.appendChild(storeLocator);

    // Wait for custom elements to be defined and configure
    try {
      await customElements.whenDefined('gmpx-store-locator');
      (storeLocator as any).configureFromQuickBuilder(CONFIGURATION);
      setIsMapLoaded(true);
    } catch (error) {
      console.error('Error loading Google Maps:', error);
    }
  };

  const handleApiKeySubmit = () => {
    if (googleApiKey.trim()) {
      loadGoogleMapsScript(googleApiKey.trim());
    }
  };

  if (!isMapLoaded) {
    return (
      <div className="w-full h-64 bg-muted/20 rounded-lg border border-border flex flex-col items-center justify-center p-6">
        <h3 className="text-lg font-semibold mb-4">Our Location</h3>
        <p className="text-sm text-muted-foreground mb-4 text-center">
          Enter your Google Maps API key to view our location
        </p>
        <div className="flex gap-2 w-full max-w-md">
          <Input
            type="text"
            placeholder="Enter Google Maps API key"
            value={googleApiKey}
            onChange={(e) => setGoogleApiKey(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleApiKeySubmit} disabled={!googleApiKey.trim()}>
            Load Map
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Get your API key at{' '}
          <a href="https://console.cloud.google.com/google/maps-apis" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Google Cloud Console
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden border border-border">
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
};

export default Map;