import { Routes, Route } from "react-router-dom";

import Index from "../pages/Index.tsx";

export default function NavRouter() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
        </Routes>
    )
}