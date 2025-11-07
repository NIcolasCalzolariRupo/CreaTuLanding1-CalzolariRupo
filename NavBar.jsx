// src/components/NavBar.jsx
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Logo */}
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>MiTienda</h1>

      {/* Enlaces */}
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      {/* Carrito */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;
