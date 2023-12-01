import { useState } from "react";
import Header from "../components/Header";
import Categorias from "../components/Categorias";
import Produtos from "../components/Produtos";
import SearchBar from "../components/SearchBar";
import { SelectedProduct } from "../utils/types";
import { FoodOptionItem } from "../utils/types";

function Pedidos() {
  const [foundItemId, setFoundItemId] = useState<string | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const handleProductSelect = (product: FoodOptionItem, quantity: number) => {
    const existingProductIndex = selectedProducts.findIndex(
      (p) => p.name === product.name
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...selectedProducts];
      updatedProducts[existingProductIndex].quantity += quantity;

      setSelectedProducts(updatedProducts);
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity }]);
    }
    setTotalAmount(totalAmount + product.price);
  };
  return (
    <>
      <Header />
      <main className="w-5/6 m-auto mb-20">
        <SearchBar setFoundItemId={setFoundItemId} />
        <section className="mb-20">
          <h2 className="text-2xl font-bold">Categorias</h2>
          <span className="text-lg">Navegue por categoria</span>
          <Categorias />
        </section>
        <section className="mb-20">
          <h2 className="text-2xl font-bold">Produtos</h2>
          <span className="text-lg">
            Selecione um produto para adicionar ao seu pedido
          </span>
          <Produtos
            foundItemId={foundItemId}
            onSelectProduct={handleProductSelect}
            selectedProducts={selectedProducts}
          />
        </section>
        <section>
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.name}>
                <span>
                  {product.quantity}x {product.name}
                </span>
                <span>
                  R$
                  {(product.price * product.quantity)
                    .toFixed(2)
                    .replace(".", ",")}
                </span>
              </li>
            ))}
          </ul>
          <span>Total do Pedido:</span>
          <strong>{totalAmount.toFixed(2).replace(".", ",")}</strong>
        </section>
        <footer className="flex flex-row justify-end gap-16">
          <button
            className="text-2xl text-green-800 font-bold w-80 h-16 
          border-4 border-green-800 rounded-3xl disabled:border-gray-400 disabled:text-gray-400"
          >
            Cancelar
          </button>
          <button
            className="text-2xl text-white font-bold w-80 h-16 rounded-3xl
           bg-green-800 disabled:bg-gray-400"
          >
            Finalizar pedido
          </button>
        </footer>
      </main>
    </>
  );
}

export default Pedidos;
