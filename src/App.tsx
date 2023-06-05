import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {OrderPage} from "./pages/OrderPage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="*" element={<h2>Page is not found</h2>} />
            </Routes>
        </>
    )
}

export default App;
