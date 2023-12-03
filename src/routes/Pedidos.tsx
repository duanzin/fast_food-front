import { useState } from "react";
import Header from "../components/Header";
import Categorias from "../components/Categorias";
import Produtos from "../components/Produtos";
import SearchBar from "../components/SearchBar";
import Resumo from "../components/Resumo";
import { OrderDetails, SelectedProduct } from "../utils/types";
import { FoodOptionItem } from "../utils/types";
import { create } from "../api/apiCalls";

function Pedidos() {
  const [foundItemId, setFoundItemId] = useState<string | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [finishPurchase, setFinishPurchase] = useState<boolean>(false);
  const [customer, setCustomer] = useState("");

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

  const handleCancel = () => {
    setSelectedProducts([]);
    setTotalAmount(0);
    setFinishPurchase(false);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedCustomer: string = customer.trim();
    if (!trimmedCustomer) {
      alert("por favor escreva seu nome");
    } else {
      try {
        const orderDetails: OrderDetails = {
          customer: customer,
          products: selectedProducts.map((product) => ({
            name: product.name,
            quantity: product.quantity,
          })),
        };
        await create(orderDetails);
        setFinishPurchase(false);
        setSelectedProducts([]);
        setTotalAmount(0);
        setCustomer("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Header />
      <main className="w-5/6 m-auto mb-20">
        {finishPurchase ? (
          <form onSubmit={handleFormSubmit}>
            <h2>Pagamento</h2>
            <article>
              <h3>Resumo da compra</h3>
              <Resumo
                selectedProducts={selectedProducts}
                totalAmount={totalAmount}
              />
            </article>
            <article>
              <label htmlFor="customer">Nome do cliente</label>
              <input
                type="text"
                id="customer"
                placeholder="Primeiro nome"
                value={customer}
                onChange={handleNameChange}
              />
            </article>
            <footer className="flex flex-row justify-end gap-16">
              <button
                onClick={handleCancel}
                className="text-2xl text-green-800 font-bold w-80 h-16 
          border-4 border-green-800 rounded-3xl"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="text-2xl text-white font-bold w-80 h-16 rounded-3xl
           bg-green-800"
              >
                Finalizar pedido
              </button>
            </footer>
          </form>
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
            <footer className="flex flex-row justify-end gap-16">
              <button
                onClick={handleCancel}
                className="text-2xl text-green-800 font-bold w-80 h-16 
          border-4 border-green-800 rounded-3xl disabled:border-gray-500 disabled:text-gray-500"
                disabled={selectedProducts.length === 0}
              >
                Cancelar
              </button>
              <button
                onClick={() => setFinishPurchase(true)}
                className="text-2xl text-white font-bold w-80 h-16 rounded-3xl
           bg-green-800 disabled:bg-gray-500"
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
