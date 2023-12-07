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

  return (
    <dialog
      open={isOpen}
      onClose={onClose}
      className="fixed top-1/3 p-10 bg-white rounded-xl"
    >
      <header className="flex flex-row justify-between">
        <h2 className="text-4xl font-bold">Revise seu pedido!</h2>
        <button onClick={onClose} className="text-3xl text-gray-500 font-bold">
          X
        </button>
      </header>
      <div className="flex flex-row">
        <img src={product.image} alt={product.name} className="w-36 h-36" />
        <div>
          <strong className="text-2xl">{product.name}</strong>
          <p className="text-xl">{product.description}</p>
          <div className="w-fit text-2xl border-solid border-y-2 border-green-800 rounded-full">
            <button
              onClick={() => setQuantity(quantity - 1)}
              className="text-white text-center font-bold bg-green-800 rounded-full w-10 h-10"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
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
           bg-green-800"
      >
        Adicionar ao pedido
      </button>
    </dialog>
  );
}

export default ProductDialog;
