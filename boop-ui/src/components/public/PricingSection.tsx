import "./css/pricing.css";

export default function PricingSection() {
  return (
    <section className="section section-light">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-accent" />
          <h2 className="section-title">
            Competitive Pricing for Pet Services
          </h2>
        </div>

        {/* Pricing Plans */}
        <div className="row g-4">

          {/* Basic */}
          <div className="col-lg-4">
            <div className="pricing-card">
              <div className="pricing-title">Basic</div>
              <div className="pricing-price">$49</div>
              <div className="pricing-duration">/ Month</div>

              <ul className="pricing-features">
                <li>Pet Boarding</li>
                <li>Pet Feeding</li>
                <li>Pet Grooming</li>
                <li>Pet Training</li>
              </ul>

              <span className="pricing-btn">Order Now</span>
            </div>
          </div>

          {/* Standard (FEATURED) */}
          <div className="col-lg-4">
            <div className="pricing-card featured">
              <div className="pricing-title">Standard</div>
              <div className="pricing-price">$99</div>
              <div className="pricing-duration">/ Month</div>

              <ul className="pricing-features">
                <li>Pet Boarding</li>
                <li>Pet Feeding</li>
                <li>Pet Grooming</li>
                <li>Pet Training</li>
                <li>Pet Exercise</li>
              </ul>

              <span className="pricing-btn">Order Now</span>
            </div>
          </div>

          {/* Extended */}
          <div className="col-lg-4">
            <div className="pricing-card">
              <div className="pricing-title">Extended</div>
              <div className="pricing-price">$149</div>
              <div className="pricing-duration">/ Month</div>

              <ul className="pricing-features">
                <li>Pet Boarding</li>
                <li>Pet Feeding</li>
                <li>Pet Grooming</li>
                <li>Pet Training</li>
                <li>Pet Exercise</li>
                <li>Pet Treatment</li>
              </ul>

              <span className="pricing-btn">Order Now</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
