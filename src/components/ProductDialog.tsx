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
  return (
    <dialog open={isOpen} onClose={onClose}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>Price: R${product.price.toFixed(2).replace(".", ",")}</span>
      <div>
        <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <span>Quantity: {quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <button onClick={onClose}>Cancelar</button>
      <button
        onClick={() => {
          addProduct(product, quantity);
        }}
      >
        Adicionar ao pedido
      </button>
    </dialog>
  );
}

export default ProductDialog;
