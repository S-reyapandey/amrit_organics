import React, { useRef } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Directions, Home } from "@mui/icons-material";

function MapComponent() {
  const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
  const mapRef = useRef(null);
  const initialView = {
    latitude: 28.6139,
    longitude: 77.209,
    zoom: 12,
  };

  const resetView = () => {
    if(mapRef.current){
        mapRef.current.flyTo({
            center: [initialView.longitude, initialView.latitude],
            zoom: initialView.zoom,
            essential: true,
        });
    }
  };

  const getDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${initialView.latitude},${initialView.longitude}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden">
      <Map
       ref={mapRef}
        initialViewState={initialView}
        style={{ width: "100%", height: "300px" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        attributionControl={false}
        cooperativeGestures={true}
        
      >
        <Marker latitude={initialView.latitude} longitude={initialView.longitude} anchor="bottom"/>
          
        
        <NavigationControl position="top-right" />
      </Map>

      <div className="absolute top-4 left-4 flex flex-col gap-4 z-10">
        {/* Reset View Icon */}
        <div
          onClick={resetView}
          className="p-2 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition"
          title="Reset View"
        >
          <Home className="text-blue-600" />
        </div>
        {/* Get Directions Icon */}
        <div
          onClick={getDirections}
          className="p-2 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition"
          title="Get Directions"
        >
          <Directions className="text-green-600" />
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
