import Home from "./routes/home/home.component.jsx";
import { Navigation } from "./routes/navigation/navigation.component.jsx";
import { Route, Routes } from "react-router-dom";
import { Authentication } from "./routes/authentication/authentication.component.jsx";

const Shop = () => {
  return <div>Shop</div>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
