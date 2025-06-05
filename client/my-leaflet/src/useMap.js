import {useEffect, useState, useRef} from 'react';
import leaflet from 'leaflet';


function useMap(mapRef, city) {
    const [map, setMap] = useState(null);
    const isRenderedRef = useRef(false);
  
    useEffect(() => {
      if (mapRef.current !== null && !isRenderedRef.current) {
        const instance = leaflet.map(mapRef.current, {
          center: {
            lat: city.lat,
            lng: city.lng,
          },
          zoom: city.zoom,
        });
  
        leaflet
          .tileLayer(
            'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
            {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            },
          )
          .addTo(instance);
  
        setMap(instance);
        isRenderedRef.current = true;
      }
    }, [mapRef, city]);
  
    return map;
  }
  
  export default useMap;