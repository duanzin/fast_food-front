import { useState } from "react";
import { FoodOptionItem } from "../utils/types";

function ProductDialog({
  isOpen,
  onClose,
  product,
  addProduct,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: FoodOptionItem;
  addProduct: (product: FoodOptionItem, quantity: number) => void;
}) {
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToOrder = () => {
    addProduct(product, quantity);
    onClose();
  };
  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 99));
  };

  return (
    <dialog
      open={isOpen}
      onClose={onClose}
      className="fixed top-1/3 p-10 bg-white rounded-xl border-4 border-green-800 
      max-[524px]:w-5/6 max-[524px]:top-28"
    >
      <header className="flex flex-row justify-between mb-7">
        <h2 className="text-4xl font-bold">Revise seu pedido!</h2>
        <button onClick={onClose} className="text-3xl text-gray-500 font-bold">
          X
        </button>
      </header>
      <div className="flex flex-row mb-7 gap-10 max-[524px]:flex-col max-[524px]:gap-3">
        <img src={product.image} alt={product.name} className="w-40 h-40" />
        <div>
          <strong className="text-2xl">{product.name}</strong>
          <p className="text-xl">{product.description}</p>
          <div className="w-fit text-2xl border-solid border-y-2 border-green-800 rounded-full">
            <button
              onClick={handleDecrease}
              className="text-white text-center font-bold bg-green-800 rounded-full w-10 h-10"
            >
              -
            </button>
            <span className="mx-3">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="text-white text-center font-bold bg-green-800 rounded-full w-10 h-10"
            >
              +
            </button>
          </div>
        </div>
        <strong className="text-2xl">
          R${product.price.toFixed(2).replace(".", ",")}
        </strong>
      </div>
      <button
        onClick={handleAddToOrder}
        className="text-2xl text-white font-bold w-80 h-16 rounded-3xl
           bg-green-800 max-[490px]:w-11/12"
      >
        Adicionar ao pedido
      </button>
    </dialog>
  );
}

export default ProductDialog;
