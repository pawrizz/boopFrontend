export default function Register() {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">

            <div className="section-header">
              <div className="section-accent" />
              <h2 className="section-title">Create Account</h2>
            </div>

            <form className="mt-4">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" />
              </div>

              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "var(--pc-primary)",
                  color: "#fff"
                }}
              >
                Sign Up
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
