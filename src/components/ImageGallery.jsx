import { useEffect, useState } from "react";
import "../styles/global.css";

const planetImages = {
  Mercury:
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
  Venus:
    "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
  Earth:
    "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
  Mars: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
  Jupiter:
    "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
  Saturn:
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  Uranus: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
  Neptune:
    "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
  Pluto:
    "https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg",
};

const planetFacts = [
  ["Terrestrial Planets", "", "Mercury", "0.330", "4,879", "5427", "3.7"],
  ["", "", "Venus", "4.87", "12,104", "5243", "8.9"],
  ["", "", "Earth", "5.97", "12,756", "5514", "9.8"],
  ["", "", "Mars", "0.642", "6,792", "3933", "3.7"],
  ["Jovian Planets", "Gas Giant", "Jupiter", "1898", "142,984", "1326", "23.1"],
  ["", "Gas Giant", "Saturn", "568", "120,536", "687", "9.0"],
  ["", "Ice Giant", "Uranus", "86.8", "51,118", "1271", "8.7"],
  ["", "Ice Giant", "Neptune", "102", "49,528", "1638", "11.0"],
  ["Dwarf Planets", "", "Pluto", "0.0130", "2,376", "1850", "0.7"],
];

function ImageGallery() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load planet data");
        return response.json();
      })
      .then((data) => {
        setPlanets(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="image" className="planet-container">
      <h1 className="planet-title">
        Visualizing the Differences Between Planets
      </h1>

      <p className="planet-subtitle">
        Each planet in our solar system has unique physical characteristics.
        Visual comparisons help highlight how vastly different terrestrial
        planets are from gas giants and ice giants.
      </p>

      {loading && <p className="planet-status">Loading planets...</p>}
      {error && <p className="planet-status planet-error">Error: {error}</p>}

      {!loading && !error && (
        <div className="planet-grid">
          {planets.map((planet) => (
            <div key={planet.planet} className="planet-card">
              <figure>
                <img src={planetImages[planet.planet]} alt={planet.planet} />

                <figcaption>
                  <p>{planet.planet}</p>
                  <p>Distance from Sun: {planet.distanceFromSun} million km</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ImageGallery;
