import categoryArray from "../utils/categoryArray";

function Categorias() {
  return (
    <ul>
      {categoryArray.map((item, index) => (
        <li key={index}>
          <img src={item.image} alt={item.category} />
          <strong>{item.category}</strong>
        </li>
      ))}
    </ul>
  );
}

export default Categorias;
