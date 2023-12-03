import categoryArray from "../utils/categoryArray";
import { categoryArrayType } from "../utils/types";

function Categorias() {
  const handleClick = (category: string): void => {
    const targetElement = document.getElementById(category);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <ul className="flex flex-row flex-wrap gap-y-4 justify-between mt-4">
      {categoryArray.map((item: categoryArrayType, index: number) => (
        <li
          key={index}
          onClick={() => handleClick(item.category)}
          className="flex flex-col items-center w-56 h-fit py-5 m-auto bg-white rounded-lg shadow-lg cursor-pointer"
        >
          <img src={item.image} alt={item.category} className="w-36 h-36" />
          <strong className="text-xl">{item.category}</strong>
        </li>
      ))}
    </ul>
  );
}

export default Categorias;
