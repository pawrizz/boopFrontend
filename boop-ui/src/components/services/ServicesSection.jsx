import "./services.css";

export default function ServicesSection() {
  const services = [
    "Pet Boarding",
    "Pet Feeding",
    "Pet Grooming",
    "Pet Training",
    "Pet Exercise",
    "Pet Treatment"
  ];

  return (
    <section className="section section-light">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-accent" />
          <h2 className="section-title">
            Our Excellent Pet Care Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service) => (
            <div key={service} className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-icon">
                  🐾
                </div>
                <div className="service-title">
                  {service}
                </div>
                <div className="service-text">
                  Kasd dolor no lorem sit tempor at
                  justo rebum rebum stet justo elitr
                  dolor amet sit.
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
