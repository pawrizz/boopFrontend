export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "var(--pc-primary)" }}
    >
      <div className="container">
        <span className="navbar-brand fw-bold text-white">
          🐾 Pawrizz
        </span>

        <ul className="navbar-nav me-auto ms-4">
          <li className="nav-item text-white me-3">Home</li>
          <li className="nav-item text-white me-3">Services</li>
          <li className="nav-item text-white">About</li>
        </ul>

        <div className="text-white fw-semibold">
          <span className="me-3">Sign Up</span>
          <span>Sign In</span>
        </div>
      </div>
    </nav>
  );
}
