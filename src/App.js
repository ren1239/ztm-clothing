import Home from "./routes/home/home.component.jsx";
import { Navigation } from "./routes/navigation/navigation.component.jsx";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "./routes/sign-in/sign-in.component.jsx";

const Shop = () => {
  return <div>Shop</div>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
