import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BootLayout } from "../layouts/BootLayout";
import Desktop from "../pages/Desktop";
import NotFound from "../pages/NotFound";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* Boot + Desktop flow */}
      <Route element={<BootLayout />}>
        <Route path="/" element={<Desktop />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}
