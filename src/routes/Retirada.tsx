import { useState, useEffect } from "react";
import Header from "../components/Header";
import NameRender from "../components/nameRender";
import { getMeals } from "../api/apiCalls";
import { ReceivedOrder } from "../utils/types";

function Retirada() {
  const [orders, setOrders] = useState<ReceivedOrder[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await getMeals();
        setOrders(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchOrders();
  }, []);
  return (
    <>
      <Header />
      <main className="flex flex-row w-5/6 m-auto mb-20">
        <section className="w-1/2 border-r-2 border-black border-solid">
          <h2 className="text-6xl font-bold">Preparando:</h2>
          <NameRender orders={orders.filter((order) => order.status === 0)} />
        </section>
        <section className="w-1/2 pl-10">
          <h2 className="text-6xl font-bold">Pronto:</h2>
          <NameRender orders={orders.filter((order) => order.status === 1)} />
        </section>
      </main>
    </>
  );
}

export default Retirada;
