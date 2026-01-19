import "./css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row">

          {/* About */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Pawrizz</h5>
            <p>
              Diam dolor diam ipsum sit. Aliqu diam amet diam
              et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>

          {/* Get In Touch */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Get In Touch</h5>
            <p>123 Street, New York, USA</p>
            <p>+012 345 67890</p>
            <p>info@example.com</p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul>
              <li><span className="footer-link">Home</span></li>
              <li><span className="footer-link">About Us</span></li>
              <li><span className="footer-link">Our Services</span></li>
              <li><span className="footer-link">Pricing Plan</span></li>
              <li><span className="footer-link">Contact Us</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          © Pawrizz. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
