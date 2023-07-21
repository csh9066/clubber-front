import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexPage from "./pages/IndexPage";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
