import { useState } from 'react'
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import router from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App
