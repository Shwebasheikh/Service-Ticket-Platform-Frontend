import React, { useState } from 'react';
import { Button, Spinner, Alert } from 'react-bootstrap';

const LocationDetector = ({ onDetect }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDetect = () => {
    setLoading(true);
    setError('');

    if (!navigator.geolocation) {
      setError('Geolocation is not supported.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          const location = data.display_name || `Lat: ${latitude}, Lon: ${longitude}`;
          onDetect(location);
        } catch (err) {
          onDetect(`Lat: ${latitude}, Lon: ${longitude}`);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError('Unable to fetch your location.');
        setLoading(false);
      }
    );
  };

  return (
    <div className="mt-2">
      <Button variant="outline-secondary" size="sm" onClick={handleDetect} disabled={loading}>
        {loading ? (
          <>
            <Spinner animation="border" size="sm" /> Detecting...
          </>
        ) : (
          <>📍 Use My Location</>
        )}
      </Button>
      {error && <Alert variant="danger" className="mt-2 py-1">{error}</Alert>}
    </div>
  );
};

export default LocationDetector;
