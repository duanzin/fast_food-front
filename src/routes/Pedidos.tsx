import { useState } from "react";
import Header from "../components/Header";
import Categorias from "../components/Categorias";
import Produtos from "../components/Produtos";
import SearchBar from "../components/SearchBar";
import Resumo from "../components/Resumo";
import { SelectedProduct } from "../utils/types";
import { FoodOptionItem } from "../utils/types";
import OrderForm from "../components/OrderForm";

function Pedidos() {
  const [foundItemId, setFoundItemId] = useState<string | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [finishPurchase, setFinishPurchase] = useState<boolean>(false);

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
    const fullPrice: number = product.price * quantity;
    setTotalAmount(totalAmount + fullPrice);
  };

  const handleCancel = () => {
    setSelectedProducts([]);
    setTotalAmount(0);
    setFinishPurchase(false);
  };

  return (
    <>
      <Header />
      <main className="w-5/6 m-auto mb-20 max-[1200px]:w-11/12">
        {finishPurchase ? (
          <OrderForm
            selectedProducts={selectedProducts}
            totalAmount={totalAmount}
            handleCancel={handleCancel}
          />
        ) : (
          <>
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
            {selectedProducts.length > 0 && (
              <Resumo
                selectedProducts={selectedProducts}
                totalAmount={totalAmount}
              />
            )}
            <footer className="flex flex-row items-center justify-end gap-x-16 gap-y-5 max-[510px]:flex-col">
              <button
                onClick={handleCancel}
                className="text-2xl text-green-800 font-bold w-80 h-16 
                  border-4 border-green-800 rounded-3xl disabled:border-gray-500
                   disabled:text-gray-500 max-[370px]:w-11/12"
                disabled={selectedProducts.length === 0}
              >
                Cancelar
              </button>
              <button
                onClick={() => setFinishPurchase(true)}
                className="text-2xl text-white font-bold w-80 h-16 rounded-3xl
           bg-green-800 disabled:bg-gray-500 max-[370px]:w-11/12"
                disabled={selectedProducts.length === 0}
              >
                Finalizar pedido
              </button>
            </footer>
          </>
        )}
      </main>
    </>
  );
}

export default Pedidos;
