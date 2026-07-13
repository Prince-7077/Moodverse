import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { FavoritesProvider } from "./context/FavoritesContext";

// React Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesProvider>
      <App />

      {/* Toast Notification */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </FavoritesProvider>
  </React.StrictMode>
);