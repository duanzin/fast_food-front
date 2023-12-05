import { useState } from "react";
import Resumo from "./Resumo";
import { OrderDetails, SelectedProduct } from "../utils/types";
import { create } from "../api/apiCalls";

function OrderForm({
  selectedProducts,
  totalAmount,
  handleCancel,
}: {
  selectedProducts: SelectedProduct[];
  totalAmount: number;
  handleCancel: () => void;
}) {
  const [customer, setCustomer] = useState<string>("");
  const [observation, setObservation] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer(e.target.value);
  };

  const handleObservationChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setObservation(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    const trimmedCustomer: string = customer.trim();
    const trimmedObservation: string = observation.trim();
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
        if (
          trimmedObservation !== null &&
          trimmedObservation !== undefined &&
          trimmedObservation !== ""
        ) {
          orderDetails.observation = trimmedObservation;
        }
        await create(orderDetails);
        handleCancel();
        setCustomer("");
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2 className="text-4xl font-bold">Pagamento</h2>
      <article>
        <strong className="text-lg">Resumo da compra</strong>
        <Resumo selectedProducts={selectedProducts} totalAmount={totalAmount} />
      </article>
      <article className="flex flex-col mb-20">
        <label htmlFor="customer" className="font-bold text-lg">
          Nome do cliente
        </label>
        <input
          type="text"
          id="customer"
          name="customer"
          placeholder="Primeiro nome"
          maxLength={20}
          autoComplete="off"
          value={customer}
          onChange={handleNameChange}
          className="bg-gray-100 p-4 w-96 rounded-md placeholder:text-lg 
                max-[415px]:w-full focus:outline-none"
        />
        <label htmlFor="obs" className="font-bold text-lg">
          Observações
        </label>
        <textarea
          id="obs"
          name="obs"
          placeholder="Adicione uma observação ao pedido"
          value={observation}
          onChange={handleObservationChange}
          className="bg-gray-100 p-4 h-52 w-full rounded-md placeholder:text-lg 
            resize-none focus:outline-none"
        />
      </article>
      <footer className="flex flex-row justify-end items-center gap-x-16 gap-y-5 max-[510px]:flex-col">
        <button
          onClick={handleCancel}
          className="text-2xl text-green-800 font-bold w-80 h-16 
          border-4 border-green-800 rounded-3xl max-[370px]:w-11/12"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="text-2xl text-white font-bold w-80 h-16 rounded-3xl
           bg-green-800 max-[370px]:w-11/12"
        >
          Finalizar pedido
        </button>
      </footer>
    </form>
  );
}

export default OrderForm;
