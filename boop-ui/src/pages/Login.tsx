
import { useState, FormEvent } from "react";
import { login, LoginPayload } from "../api/auth.api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const payload: LoginPayload = { email, password };
      const response = await login(payload);
      console.log("Login success:", response.data);
      // TEMP: just log token for now
      // Later → store JWT + redirect by role
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="section-header">
              <div className="section-accent" />
              <h2 className="section-title">Sign In</h2>
            </div>
            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* Register and forgot password div starts */}
              <div className="d-flex justify-content-between mb-3">
                <span
                  style={{
                    color: "#0d6efd",
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                  onClick={() => navigate("/signup")}
                >
                  Don’t have an account? Register
                </span>
                <span
                  style={{
                    color: "#0d6efd",
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot password?
                </span>
              </div>
              {/* Register and forgot password div end */}
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "var(--pc-primary)",
                  color: "#fff"
                }}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
