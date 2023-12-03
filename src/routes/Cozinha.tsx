import { useEffect, useState } from "react";
import { getMeals } from "../api/apiCalls";
import Header from "../components/Header";
import { ReceivedOrder } from "../utils/types";

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
      <main className="w-5/6 m-auto mb-20">
        {orders.map((order: ReceivedOrder) => (
          <div key={order.id}>
            <h3>
              {order.id} - {order.customer}
            </h3>
            <ul>
              {order.products.map((product, index: number) => (
                <li key={index}>
                  <span>
                    {product.quantity}x {product.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </>
  );
}

export default Cozinha;
