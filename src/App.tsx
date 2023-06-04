import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="*" element={<h2>Page is not found</h2>} />
            </Routes>
        </>
    )
}

export default App;