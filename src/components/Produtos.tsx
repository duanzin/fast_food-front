import foodOptions from "../utils/foodOptionsArray";
import { FoodOption } from "../utils/types";

function Produtos() {
  return (
    <div className="flex flex-col gap-20">
      {foodOptions.map((item: FoodOption, index: number) => (
        <ul
          key={index}
          id={item.category}
          className="flex flex-row justify-between"
        >
          {item.options.map((childItem, childIndex: number) => (
            <li
              key={childIndex}
              className="flex flex-col justify-center items-center w-60 h-72 px-3 bg-white rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={childItem.image}
                alt={childItem.name}
                className="w-36 h-36"
              />
              <strong className="text-lg">{childItem.name}</strong>
              <span className="text-center">{childItem.description}</span>
              <strong className="text-lg">
                R${childItem.price.toFixed(2).replace(".", ",")}
              </strong>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default Produtos;
