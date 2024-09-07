import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./Componets/MainLayout";
import About from "./pages/About";
import Findus from "./pages/Findus";
import ProductDetail from "./pages/ProductDetail";
import Shop from "./MorePages/Shop";
import Policies from "./pages/Policies";
import CartPage from "./MorePages/CartPage"; // Import the CartPage component
import { CartProvider } from "./MorePages/Cartcontext";// Import CartProvider
import LicensesPage from "./MorePages/LicensesPage";
import ChangelogPage from "./MorePages/ChangelogPage";
import NotFoundPage from "./MorePages/NotFoundPage";
import PasswordPage from "./MorePages/password";
const App = () => {
  return (
    <CartProvider> {/* Wrap the Routes with CartProvider */}
      <Routes>
        <Route index element={<MainLayout><Home /></MainLayout>} />
        <Route path="about" element={<MainLayout><About /></MainLayout>} />
        <Route path="findus" element={<MainLayout><Findus /></MainLayout>} />
        <Route path="/shop" element={<MainLayout><Shop /></MainLayout>} />
        <Route path="product-details/:id" element={<MainLayout><ProductDetail /></MainLayout>} />
        <Route path="policies" element={<MainLayout><Policies /></MainLayout>} />
        <Route path="cart" element={<MainLayout><CartPage /></MainLayout>} /> {/* Add CartPage route */}
        <Route path="/licenses" element={<MainLayout><LicensesPage/></MainLayout>}></Route>
        <Route path="/changelog" element={<MainLayout><ChangelogPage/></MainLayout>}></Route>
        <Route path="/404" element={<MainLayout><NotFoundPage/></MainLayout>}></Route>
        <Route path="/password" element={<MainLayout><PasswordPage/></MainLayout>}></Route>
      </Routes>
    </CartProvider>
  );
};

export default App;
