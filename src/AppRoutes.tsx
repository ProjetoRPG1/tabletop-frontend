import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import BoardPage from "./pages/BoardPage";
import BoardListPage from "./pages/ListBoardPage";
import App from "./App";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/board/:id" element={<BoardPage />} />
      <Route path="/boards" element={<BoardListPage />} />
    </Routes>
  );
}

export default AppRoutes;
