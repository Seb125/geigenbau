import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const OSMMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log(mapRef.current)
    //if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([52.51252421927479, 13.271941597183538], 13); // Koordinaten für die Anfangsposition der Karte

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker([52.51252421927479, 13.271941597183538]).addTo(map);

    return () => {
      map.remove(); // Entfernen der Karte, wenn die Komponente entladen wird
    };
  }, []);

  return <div ref={mapRef} style={{ height: "300px", width: "800px"}} className='mb-5'/>;
};

export default OSMMap;
