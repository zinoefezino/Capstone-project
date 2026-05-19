import "../styles/global.css";

function PlanetTable() {
  return (
    <section className="table-section">
      <div className="container">
        <div className="table-text">
          <h2>Planetary Facts at a Glance</h2>
          <p>
            Below is a comparative table of major planets in our solar system.
            The data highlights key physical properties used by astronomers and
            researchers worldwide.
          </p>
          <strong>
            Data about the planets of our solar system (Planetary facts taken
            from NASA)
          </strong>
        </div>

        <div className="table">
          <table className="planet-table">
            <thead>
              <tr>
                <th scope="col" colSpan="2"></th>
                <th scope="col">Name</th>
                <th scope="col">Mass (10²⁴kg)</th>
                <th scope="col">Diameter (km)</th>
                <th scope="col">Density (kg/m³)</th>
                <th scope="col">Gravity (m/s²)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th
                  colSpan="2"
                  rowSpan="4"
                  scope="rowgroup"
                  className="side-table"
                >
                  Terrestrial Planets
                </th>
                <td>Mercury</td>
                <td>0.330</td>
                <td>4,879</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Venus</td>
                <td>4.87</td>
                <td>12,104</td>
                <td>5243</td>
                <td>8.9</td>
              </tr>
              <tr>
                <td>Earth</td>
                <td>5.97</td>
                <td>12,756</td>
                <td>5514</td>
                <td>9.8</td>
              </tr>
              <tr>
                <td>Mars</td>
                <td>0.642</td>
                <td>6,792</td>
                <td>3933</td>
                <td>3.7</td>
              </tr>

              <tr>
                <th rowSpan="4" scope="rowgroup" className="side-table">
                  Jovian Planets
                </th>
                <th rowSpan="2" scope="rowgroup" className="side-table">
                  Gas Giants
                </th>
                <td>Jupiter</td>
                <td>1898</td>
                <td>142,984</td>
                <td>1326</td>
                <td>23.1</td>
              </tr>
              <tr>
                <td>Saturn</td>
                <td>568</td>
                <td>120,536</td>
                <td>687</td>
                <td>9.0</td>
              </tr>
              <tr>
                <th rowSpan="2" scope="rowgroup" className="side-table">
                  Ice Giants
                </th>
                <td>Uranus</td>
                <td>86.8</td>
                <td>51,118</td>
                <td>1271</td>
                <td>8.7</td>
              </tr>
              <tr>
                <td>Neptune</td>
                <td>102</td>
                <td>49,528</td>
                <td>1638</td>
                <td>11.0</td>
              </tr>

              <tr>
                <th colSpan="2" scope="row" className="side-table">
                  Dwarf Planets
                </th>
                <td>Pluto</td>
                <td>0.0130</td>
                <td>2,376</td>
                <td>1850</td>
                <td>0.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default PlanetTable;
