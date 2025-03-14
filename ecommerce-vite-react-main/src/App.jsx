import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Main, Navigator, Product, Sidebar } from "./layout/index";
import { useGlobalContext } from "./context/context";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchResults from "./components/SearchResults";
import Fashion from "./pages/Fashion";
import Accessories from "./pages/Accessories";
import Beauty from "./pages/Beauty";
import CollectionsNavbar from "./components/CollectionsNavbar";
import Order from "./pages/Order";
import Wishlist from "./pages/Wishlist";
import OrderList from "./pages/vendor/OrderList";
import VendorNavbar from "./components/VendorNavbar";
import VendorHome from "./pages/Vendor/VendorHome";
import Report from "./pages/Vendor/Report";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import CollectionsHome from "./pages/CollectionsHome";
import VendorProfilePage from "./pages/Vendor/VendorProfilePage";
import AdminDashboard from "./components/AdminDashboard";
import Payment from "./pages/Payment";
import AddProduct from "./pages/Vendor/AddProduct";
import EditProduct from "./pages/Vendor/EditProduct";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const { state } = useGlobalContext();
  const location = useLocation();

  // Define vendor-based routes
  const vendorRoutes = [
    "/vendorhome",
    "/vendor/add-product",
    "/vendor/edit-product",
    "/vendor/order-list",
    "/vendor/report",
    "/vendor/profile", // Add VendorProfilePage to vendor routes
  ];

  // Check if the current page is a vendor-based page
  const isVendorPage = vendorRoutes.includes(location.pathname);

  // Check if the current page is the profile page
  const isProfilePage = location.pathname === "/profile";

  // Check if the current page is the admin dashboard
  const isAdminDashboard = location.pathname === "/admin/dashboard";

  return (
    <div className="App">
      {/* Render VendorNavbar only for vendor-based pages */}
      {isVendorPage && <VendorNavbar />}

      {/* Render other navigation components for non-vendor, non-admin, and non-profile pages */}
      {!isVendorPage && !isProfilePage && !isAdminDashboard && (
        <>
          {location.pathname.startsWith("/collections") ? (
            <CollectionsNavbar />
          ) : (
            <Navigator />
          )}
        </>
      )}

      {/* Sidebar - Render only for non-vendor, non-admin, and non-profile pages */}
      {!isVendorPage && !isProfilePage && !isAdminDashboard && (
        <Sidebar isShowing={state.showSidebar} />
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />}>
          <Route path="collectionshome" element={<CollectionsHome />} />
          <Route path="fashion" element={<Fashion />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="beauty" element={<Beauty />} />
        </Route>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-register" element={<Register type="user" />} />
        <Route path="/vendor-register" element={<Register type="vendor" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/payment" element={<Payment />} />

        {/* Vendor Routes */}
        <Route path="/vendorhome" element={<VendorHome />} />
        <Route path="/vendor/add-product" element={<AddProduct />} />
        <Route path="/vendor/edit-product" element={<EditProduct />} />
        <Route path="/vendor/order-list" element={<OrderList />} />
        <Route path="/vendor/report" element={<Report />} />
        <Route path="/vendor/profile" element={<VendorProfilePage />} /> {/* Add VendorProfilePage route */}

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      {/* Footer - Render only for non-admin pages */}
      {!isAdminDashboard && <Footer />}
    </div>
  );
}

export default App;