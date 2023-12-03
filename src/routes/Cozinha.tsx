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
      <main className="flex flex-row w-5/6 m-auto mb-20">
        <section>
          <h2>Preparando:</h2>
          <OrderRender
            orders={orders.filter((order) => order.status === 0)}
            setOrders={setOrders}
          />
        </section>
        <section>
          <h2>Pronto:</h2>
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
