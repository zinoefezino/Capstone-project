import React, { useState, useEffect } from 'react';

const PlanetVisualizer = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://le-systeme-solaire.net[]=isPlanet,eq,true')
      .then(res => res.json())
      .then(data => {
        // Sort by distance from sun (semiMajorAxis)
        const sortedPlanets = data.bodies.sort((a, b) => a.semiMajorAxis - b.semiMajorAxis);
        setPlanets(sortedPlanets);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading the Solar System...</p>;

  return (
    <div style={{ padding: '20px', background: '#1a1a1a', color: 'white' }}>
      <h1>Solar System Comparison</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {planets.map(planet => (
          <div key={planet.id} style={{ border: '1px solid #444', padding: '15px', borderRadius: '8px' }}>
            <h2>{planet.englishName}</h2>
            <p>🌍 Gravity: {planet.gravity} m/s²</p>
            <p>📏 Radius: {planet.meanRadius} km</p>
            <p>🧪 Type: {planet.density > 3 ? 'Terrestrial' : 'Giant'}</p>

            {/* Visual indicator of size */}
            <div style={{
              width: `${planet.meanRadius / 1000}px`,
              height: `${planet.meanRadius / 1000}px`,
              background: 'skyblue',
              borderRadius: '50%',
              margin: '10px auto'
            }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetVisualizer;
