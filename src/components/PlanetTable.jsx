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