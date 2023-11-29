import foodOptions from "../utils/foodOptionsArray";
import { FoodOption } from "../utils/types";

function Produtos() {
  return (
    <>
      {foodOptions.map((item: FoodOption, index: number) => (
        <ul
          key={index}
          id={item.category}
          className="flex flex-row justify-between"
        >
          {item.options.map((childItem, childIndex: number) => (
            <li
              key={childIndex}
              className="flex flex-col items-center cursor-pointer"
            >
              <img
                src={childItem.image}
                alt={childItem.name}
                className="w-36 h-36"
              />
              <strong className="text-lg">{childItem.name}</strong>
              <span>{childItem.description}</span>
              <strong className="text-lg">{childItem.price}</strong>
            </li>
          ))}
        </ul>
      ))}
    </>
  );
}

export default Produtos;
