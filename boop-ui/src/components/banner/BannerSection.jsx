export default function HeroSection() {
  return (
    <div
      className="section"
      style={{ backgroundColor: "var(--pc-bg-main)" }}
    >
      <div className="container d-flex justify-content-center">
        <div
          className="p-5 text-center"
          style={{
            backgroundColor: "var(--pc-bg-card)",
            borderRadius: "16px",
            maxWidth: "420px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)"
          }}
        >
          <h2 style={{ color: "var(--pc-text-title)" }}>
            Pawrizz
          </h2>

          <p style={{ color: "var(--pc-text-body)" }}>
            Your pet health companion — adoption, care & assistance
            in one place.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="btn btn-success px-4">
              Open Boop Assist
            </button>
            <button className="btn btn-outline-success px-4">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
