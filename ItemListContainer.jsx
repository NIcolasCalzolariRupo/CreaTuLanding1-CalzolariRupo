// src/components/ItemListContainer.jsx
const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>{greeting}</h2>
      <p>Próximamente, nuestro catálogo de productos</p>
    </div>
  );
};

export default ItemListContainer;
