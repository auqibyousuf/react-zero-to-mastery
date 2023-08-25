import Home from "./routes/Home/HomeComponentRoute";
import NavigationComponent from "./routes/Navigation/NavigationComponent";
import { Route, Routes } from "react-router-dom";
import LoginComponent from "./routes/Auth/LoginComponent";

const Shop = () => {
  return <h1>This is a shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationComponent />}>
        <Route index element={<Home />} />
        <Route path="shop" Component={Shop} />
        <Route path="login" Component={LoginComponent} />
      </Route>
    </Routes>
  );
};

export default App;
