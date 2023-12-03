import { useEffect, useState } from "react";
import { getMeals } from "../api/apiCalls";
import Header from "../components/Header";
import { ReceivedOrder } from "../utils/types";
import OrderRender from "../components/OrderRender";

function Cozinha() {
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
      <main className="flex flex-row w-5/6 gap-y-5 m-auto mb-20 max-[1000px]:w-11/12 max-[900px]:flex-col max-[900px]:items-center">
        <section className="w-1/2 border-r-2 border-black border-solid max-[900px]:border-0 max-[900px]:w-fit">
          <h2 className="text-4xl font-bold">Preparando:</h2>
          <OrderRender
            orders={orders.filter((order) => order.status === 0)}
            setOrders={setOrders}
          />
        </section>
        <section className="w-1/2 pl-10 max-[900px]:p-0 max-[900px]:w-fit">
          <h2 className="text-4xl font-bold">Pronto:</h2>
          <OrderRender
            orders={orders.filter((order) => order.status === 1)}
            setOrders={setOrders}
          />
        </section>
      </main>
    </>
  );
}

export default Cozinha;
