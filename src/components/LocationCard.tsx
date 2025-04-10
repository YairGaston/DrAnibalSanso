"use client";


import { MapPin, Phone, Clock } from "lucide-react";

export default function LocationCard({
  location,
}: {
  location: {
    name: string;
    city: string;
    address: string;
    phone: string;
    schedule?: string;
    mapUrl: string;
  };
}) {
  return (
    <div className="card location-card">
      <div className="card-content">
        <h3 className="card-title">{location.name}</h3>
        <p className="location-city">{location.city}</p>
        <div className="location-detail">
          <MapPin className="location-icon" />
          <p>{location.address}</p>
        </div>
        <div className="location-detail">
          <Phone className="location-icon" />
          <p>{location.phone}</p>
        </div>
        {location.schedule && (
          <div className="location-detail">
            <Clock className="location-icon" />
            <p>{location.schedule}</p>
          </div>
        )}
        <div className="location-map">
          <iframe
            src={location.mapUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa de ${location.name} - Consultorio del Dr. Aníbal Sansó en ${location.city}`}
          ></iframe>
        </div>
        <button
          className="button button-primary button-full button-icon"
          onClick={() => window.open(`tel:${location.phone.replace(/\s/g, "")}`)}
          aria-label={`Llamar a ${location.name} para reservar turno`}
        >
          <Phone size={16} />
          <span>Llamar para reservar</span>
        </button>
      </div>
    </div>
  );
}