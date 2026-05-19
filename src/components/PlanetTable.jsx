import { useState, useEffect } from 'react';
import '../styles/global.css';

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
    <div id='Image' className="planet-container">
      <h1 className="planet-title">
        Visualizing the Differences Between Planets
      </h1>
      <p className="planet-subtitle">
        Each planet in our solar system has unique physical characteristics.
      </p>
      <div className="planet-grid">
        {data.map((planet, index) => (
          <div key={index} className="planet-card">
            <figure>
              <img
                src={planetImages[planet.planet]}
                alt={planet.planet}
              />
              <figcaption>
                <p>{planet.planet}</p>
                <p>Distance from Sun: {planet.distanceFromSun} million km</p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};
function PlanetTable() {
  return (
    <section className="table-section">
      <div className="container">
        <div className="table-text">
          <h2>Planetary Facts at a Glance</h2>
          <p>
            Data about the planets of our solar system (Planetary facts taken
            from NASA)
          </p>
        </div>

        <div className="table">
          <table className="planet-table">
            <caption>
              Detailed breakdown of planetary data including mass, diameter,
              and gravity.
            </caption>

            <thead>
              <tr>
                <th scope="col" colSpan="2"></th>
                <th scope="col">Name</th>
                <th scope="col">Mass(10 24kg)</th>
                <th scope="col">Diameter(km)</th>
                <th scope="col">Density(kg/m3)</th>
                <th scope="col">Gravity(m/s2)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th colSpan="2" rowSpan="4" className="side-table">
                  Terrestial Planets
                </th>
                <td>Mercury</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td>Venus</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td>Earth</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td>Mars</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <th rowSpan="4" className="side-table">
                  Jovian Planets
                </th>
                <th rowSpan="2" className="side-table">
                  Gas Giant
                </th>
                <td>Jupiter</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td>Saturn</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <th rowSpan="2" className="side-table">
                  Ice Giant
                </th>
                <td>Uranus</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td>Neptune</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <th colSpan="2" className="side-table">
                  Dwarf Planets
                </th>
                <td>Pluto</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr />
    </section>
  );
}

export default PlanetTable;