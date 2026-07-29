import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Mood from "./Pages/Mood";
import Recommendations from "./Pages/Recommendations";
import Favorites from "./Pages/Favorites";
import Profile from "./Pages/Profile";

import { useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "./context/AuthContext";
import { useFavorites } from "./context/FavoritesContext";

import ProtectedRoute from "./Components/PerfectedRoute";

function App() {
     const { user } = useContext(AuthContext);
const { setAllFavorites } = useFavorites();

useEffect(() => {
  const loadFavorites = async () => {
    if (!user) {
      setAllFavorites([]);
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:5000/api/favorites/${user._id || user.id}`
      );

      setAllFavorites(res.data.favorites);
    } catch (error) {
      console.log(error);
    }
  };

  loadFavorites();
}, [user]);

  return (
    <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mood" element={<Mood />} />
        <Route
          path="/recommendations/:mood"
          element={<Recommendations />}
        />

        
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;