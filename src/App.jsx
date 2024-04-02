import Home from "./pages/Home/Home";
import RootLayaout from "./Component/CommonConponent/RootLayaout/RootLayaout";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayaout />}>
      <Route index element={<Home />} />
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
}

export default App;
