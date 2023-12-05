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
      <main
        className="flex flex-row w-5/6 gap-y-5 m-auto mb-20 max-[920px]:w-11/12 
      max-[800px]:flex-col max-[800px]:items-center"
      >
        <section className="w-1/2 border-r-2 border-black border-solid max-[800px]:w-fit max-[800px]:border-0">
          <h2 className="text-6xl font-bold max-[450px]:text-5xl">
            Preparando:
          </h2>
          <NameRender
            orders={orders.filter((order) => order.status === false)}
          />
        </section>
        <section className="w-1/2 pl-10 max-[800px]:w-fit max-[800px]:pl-0">
          <h2 className="text-6xl font-bold max-[450px]:text-5xl">Pronto:</h2>
          <NameRender
            orders={orders.filter((order) => order.status === true)}
          />
        </section>
      </main>
    </>
  );
}

export default Retirada;
