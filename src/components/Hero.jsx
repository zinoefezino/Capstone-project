import "../styles/global.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-p">
          <h1>Explore Our Solar System Through Data</h1>
          <p id="hero-p">
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down the
            solar system in a clear, data-driven way.
          </p>
          <div className="hero-button">
            <a className="primary-button" href="#image">
              Explore the Data
            </a>
            <a className="secondary-button" href="#contact">
              Contact us
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="hero.png" alt="the world globe" />
        </div>
      </div>
    </section>
  );
}
