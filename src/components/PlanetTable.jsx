import { useState, useEffect } from 'react';

const planetImages = {
  Mercury: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg',
  Venus: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg',
  Earth: 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg',
  Mars: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
  Jupiter: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg',
  Saturn: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
  Uranus: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg',
  Neptune: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg',
  Pluto: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg',
};

const PlanetTable = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://anurella.github.io/json/planets.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ backgroundColor: '#f0f4ff', padding: '40px' }}>
      <h1 style={{ textAlign: 'center', color: '#1a3a8f' }}>
        Visualizing the Differences Between Planets
      </h1>
      <p style={{ textAlign: 'center', color: '#555', maxWidth: '600px', margin: '0 auto 40px' }}>
        Each planet in our solar system has unique physical characteristics.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {data.map((planet, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <img
              src={planetImages[planet.planet]}
              alt={planet.planet}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '16px', textAlign: 'center' }}>
              <p style={{ fontWeight: 'bold', margin: '0 0 8px' }}>{planet.planet}</p>
              <p style={{ fontWeight: 'bold', margin: 0 }}>
                Distance from Sun: {planet.distanceFromSun} million km
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetTable;