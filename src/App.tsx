import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import AddNew from "./pages/Product";
import List from "./pages/Product/Products";
import AddInventory from "./pages/Inventory/Add";
import Layout from "./components/Layouts/Layout";
import History from "./pages/Inventory/History";
import AddByImg from "./pages/Product/AddByImg";
import Incoming from "./pages/Order/Orders";
import Create from "./pages/Order/Create";
import RequireAuth from "./components/Layouts/RequireAuth";
import Profile from "./pages/Profile";
import Category from "./pages/Category";
import Analytics from "./pages/Analytics";
import Promo from "./pages/Promo";
import Payment from "./pages/Payment";
import Settings from "./pages/Settings";

const ROLES = {
  ADMIN: "ADMIN",
  MERCHANT: "merchant",
  MAMAGER: "manager",
  USER: "user",
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route
          element={<RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.MERCHANT]} />}
        > */}
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/order/orders" element={<Incoming />} />
          <Route path="/order/create" element={<Create />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product/add" element={<AddNew />} />
          <Route path="/product/addbyimg" element={<AddByImg />} />
          <Route path="/product/list" element={<List />} />
          <Route path="/inventory/add" element={<AddInventory />} />
          <Route path="/inventory/history" element={<History />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        {/* </Route> */}
        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}></Route>
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
