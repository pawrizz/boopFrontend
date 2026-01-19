import "./css/banner.css";

export default function BannerSection() {
  return (
    <section
      className="banner-section"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518717758536-85ae29035b6d')"
      }}
    >
      <div className="banner-overlay">
        <div className="container">
          <div className="banner-content">
            <div className="banner-accent" />

            <div className="banner-title-small">
              PET SHOP
            </div>

            <div className="banner-title-big">
              MAKE YOUR PETS HAPPY
            </div>

            <p className="banner-text">
              Dolore tempor clita lorem rebum kasd
              eirmod dolore diam eos kasd. Kasd
              clita ea justo est sed kasd erat clita sea.
            </p>

            <div className="banner-actions">
              <span className="banner-read">
                READ MORE
              </span>

              <span className="banner-video">
                ▶ Play Video
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
