import { useNavigate, useLocation } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container d-flex align-items-center">

        {/* Logo */}
        <span
          className="navbar-brand fw-bold d-flex align-items-center"
          style={{ color: "var(--pc-primary)" }}
        >
          🐾 Pawrizz
        </span>

        {/* Center Menu */}
        <ul
          className="navbar-nav mx-auto fw-semibold"
          style={{ color: "var(--pc-text-heading)" }}
        >
          <li className="nav-item px-3">Home</li>
          <li className="nav-item px-3">About</li>
          <li className="nav-item px-3">Service</li>
          <li className="nav-item px-3">Product</li>
          <li className="nav-item px-3">
            Pages <span style={{ fontSize: "0.75rem" }}>▼</span>
          </li>
        </ul>
{/* Right CTA — EXACT PDF CONTACT STYLE */}
<div className="d-flex align-items-center">
   {!isLoginPage && (
     <span
       style={{
         backgroundColor: "var(--pc-primary)",
         color: "#ffffff",
         height: "34px",
         lineHeight: "34px",
         padding: "0 18px",
         fontSize: "0.85rem",
         fontWeight: "600",
         letterSpacing: "0.5px",
         textTransform: "uppercase",
         borderRadius: "2px",
         cursor: "pointer"
       }}
       onClick={() => navigate("/login")}
     >
       Sign In
     </span>
   )}
</div>
      </div>
    </nav>
  );
}
