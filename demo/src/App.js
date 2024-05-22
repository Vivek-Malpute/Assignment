import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IpoListPage from "./components/ipoListPage";
import 'tailwindcss/tailwind.css';
import Header from "./components/header";
import IpoDetailsPage from "./components/ipoDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<IpoListPage />} />
        <Route path="/ipoListPage" element={<IpoListPage />} />
        <Route path="/ipoDetails" element={<IpoDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
