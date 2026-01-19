import "./about.css";

export default function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
              alt="About pets"
              className="about-image"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="section-accent" />
            <h2 className="section-title">
              We Keep Your Pets Happy All Time
            </h2>

            <p className="mt-3">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum
              sit. Aliqu diam amet diam et eos.
            </p>

            <p>
              Clita erat ipsum et lorem et sit, sed stet lorem sit
              clita duo justo magna dolore erat amet.
            </p>

            {/* Features */}
            <div className="mt-4">
              <div className="about-feature">
                <div className="about-feature-icon">✓</div>
                <div className="about-feature-text">
                  Best In Industry
                </div>
              </div>

              <div className="about-feature">
                <div className="about-feature-icon">✓</div>
                <div className="about-feature-text">
                  Emergency Services
                </div>
              </div>

              <div className="about-feature">
                <div className="about-feature-icon">✓</div>
                <div className="about-feature-text">
                  24/7 Customer Support
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
