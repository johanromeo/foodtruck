import "./App.css";

import { Menu } from "@foodtruck/menu";
import { router } from "@foodtruck/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
