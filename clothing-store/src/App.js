import Home from "./routes/Home/HomeComponentRoute";
import Navigation from "./routes/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/Auth/Authentication";
import Shop from "./routes/Shop/Shop";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" Component={Shop} />
        <Route path="/auth" Component={Authentication} />
        <Route path="/checkout" Component={Checkout} />
      </Route>
    </Routes>
  );
};

export default App;
