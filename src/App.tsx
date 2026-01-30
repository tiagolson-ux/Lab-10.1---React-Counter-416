import React from 'react';
import './App.css';
// Note to self: Import routing tools and page components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import RecipeDetail from './pages/RecipeDetail';
import Favorites from './pages/Favorites';
import SearchResults from './pages/SearchResults';

function App() {
  // Note to self: Wrap everything in Router to enable routing
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Note to self: Home page */}
        <Route path="/" element={<Home />} />
        {/* Note to self: Category page, dynamic route */}
        <Route path="/category/:categoryName" element={<Category />} />
        {/* Note to self: Recipe detail page, dynamic route */}
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        {/* Note to self: Favorites page */}
        <Route path="/favorites" element={<Favorites />} />
        {/* Note to self: Search results page */}
        <Route path="/search" element={<SearchResults />} />
        {/* Note to self: Add a fallback route for 404s if desired */}
      </Routes>
    </Router>
  );
}

export default App;
}

export default App;
