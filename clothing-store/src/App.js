import Home from "./routes/Home/HomeComponentRoute";
import Navigation from "./routes/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/Auth/Authentication";

const Shop = () => {
  return <h1>This is a shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" Component={Shop} />
        <Route path="/auth" Component={Authentication} />
      </Route>
    </Routes>
  );
};

export default App;
