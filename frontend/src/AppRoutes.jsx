import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import FoodPage from "./pages/Food/FoodPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:searchTerm" element={<Home />} />
      <Route path="/tag/:tag" element={<Home />} />
      <Route path="/food/:id" element={<FoodPage />} />
    </Routes>
  );
};

export default AppRoutes;
