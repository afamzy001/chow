import Menu from "../components/Menu";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../Page/ProductDetails";
import Cart from "../Page/Cart";
import Vendor from "../Page/Vendor";





function AppRoute() {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>

                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />

                    <Route path="/cart" element={<Cart />} />

                    <Route path="/product/:id" element={<ProductDetails />} />

                    <Route path="/vendor/:id" element={<Vendor />} />



                </Route>
            </Routes>
        </>
    )
}
export default AppRoute;
