// src/components/CartWidget.jsx
import { ShoppingCart } from "lucide-react"; // o usa un emoji 🛒 si no tenés íconos

const CartWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <ShoppingCart size={24} />
      <span>3</span> {/* número de ejemplo */}
    </div>
  );
};

export default CartWidget;
