import { Routes, Route } from "react-router-dom";

import Index from "../pages/Index.tsx";
import LimaShipping from "../pages/LimaShipping.tsx";
import ProvinciaShipping from "../pages/ProvinciaShipping.tsx";
import Page404 from "../pages/ProvinciaShipping.tsx";

export default function NavRouter() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/envios-lima" element={<LimaShipping />} />
            <Route path="/envios-provincia" element={<ProvinciaShipping />} />
            <Route path="/*" element={<Page404 />} />
        </Routes>
    )
}