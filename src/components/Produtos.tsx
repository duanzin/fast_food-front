import foodOptions from "../utils/foodOptionsArray";
import { FoodOption, FoodOptionItem, SelectedProduct } from "../utils/types";

function Produtos({
  foundItemId,
  onSelectProduct,
  selectedProducts,
}: {
  foundItemId: string | null;
  onSelectProduct: (product: FoodOptionItem, quantity: number) => void;
  selectedProducts: SelectedProduct[];
}) {
  return (
    <article className="flex flex-col gap-20">
      {foodOptions.map((item: FoodOption, index: number) => (
        <ul
          key={index}
          id={item.category}
          className="flex flex-row flex-wrap gap-y-4 justify-between"
        >
          {item.options.map((childItem, childIndex: number) => (
            <button
              key={childIndex}
              id={childItem.name}
              className={`flex flex-col justify-center items-center w-60 h-72 
              px-3 m-auto bg-white rounded-lg shadow-lg cursor-pointer disabled:sepia disabled:cursor-default ${
                foundItemId === childItem.name ? "animate-ping" : ""
              }`}
              onClick={() => onSelectProduct(childItem, 1)}
              disabled={selectedProducts.some((p) => p.name === childItem.name)}
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
            </button>
          ))}
        </ul>
      ))}
    </article>
  );
}

export default Produtos;
