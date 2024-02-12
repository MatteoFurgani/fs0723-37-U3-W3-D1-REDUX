// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import MainSearch from "./components/MainSearch";
// import CompanySearchResults from "./components/CompanySearchResults";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import FavoritesPage from "./components/FavoritesPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainSearch />} />
//         <Route path="/:company" element={<CompanySearchResults />} />
//         <Route path="/favorites" element={<FavoritesPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// App.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import FavoritesPage from "./components/FavoritesPage"; // Importa la pagina dei preferiti
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
