export default function ForgotPassword() {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">

            <div className="section-header">
              <div className="section-accent" />
              <h2 className="section-title">Forgot Password</h2>
            </div>

            <p className="mt-3">
              Enter your registered email address and we’ll send you
              instructions to reset your password.
            </p>

            <form className="mt-4">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>

              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "var(--pc-primary)",
                  color: "#fff"
                }}
              >
                Send Reset Link
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
