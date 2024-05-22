import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

import RootLayaout from "./Component/CommonConponent/RootLayaout/RootLayaout";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Registrtion from "./pages/Registrtion/Registrtion";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayaout />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/Product-Details/:productId" element={<ProductDetails />} />
      <Route path="/Registrtion" element={<Registrtion />} />
    </Route>,
  ),
);
function App() {
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
}

export default App;
