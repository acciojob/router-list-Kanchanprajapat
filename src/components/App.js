import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
