import { useState } from "react";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";

import Product from "./components/Product.jsx";
import { ContextProvider } from "./components/CartContextComponent.jsx";

function App() {
    return (
        <ContextProvider>
            <Header />
            <Shop>
                {DUMMY_PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Product {...product} />
                    </li>
                ))}
            </Shop>
        </ContextProvider>
    );
}

export default App;
