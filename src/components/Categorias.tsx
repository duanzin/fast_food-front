import categoryArray from "../utils/categoryArray";
import { categoryArrayType } from "../utils/types";

function Categorias() {
  return (
    <ul className="flex flex-row justify-between mt-4">
      {categoryArray.map((item: categoryArrayType, index: number) => (
        <li
          key={index}
          className="flex flex-col items-center w-56 h-fit py-5 bg-white rounded-lg shadow-lg"
        >
          <img src={item.image} alt={item.category} className="w-36 h-36" />
          <strong className="text-xl">{item.category}</strong>
        </li>
      ))}
    </ul>
  );
}

export default Categorias;
