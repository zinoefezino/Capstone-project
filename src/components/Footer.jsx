import "../styles/global.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About</h3>

          <ul className="members-list">
            <li>FEYISAYO</li>
            <li>CHIBUZOR</li>
            <li>BLESSING</li>
            <li>ADENIYI</li>
            <li>JOY</li>
          </ul>
        </div>
        <hr />

        <div className="footer-bottom">
          <div className="footer-text">
            <p>&copy; 2026 Designed by Amaka & Ifeoma A.</p>

            <p>Built by Software Development Group 18. All rights reserved</p>
          </div>
          <div className="footer-links">
            <a
              href="https://tsacademyonline.com/"
              target="_blank"
              rel="noreferrer"
            >
              TSAcademy
            </a>

            <a
              href="https://github.com/zinoefezino/Capstone-project.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
