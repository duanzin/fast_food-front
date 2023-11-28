import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pedidos from "./routes/Pedidos";
import Cozinha from "./routes/Cozinha";
import Retirada from "./routes/Retirada";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Pedidos/>,
    },
    {
      path: "cozinha",
      element: <Cozinha />,
    },
    {
      path: "retirada",
      element: <Retirada />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
