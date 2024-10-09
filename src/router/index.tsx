import { createBrowserRouter } from "react-router-dom";
import Terminal from "../pages/Terminal";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Terminal />,
    },
  ], {basename: "/terminal-portfolio"});
  
  export default router;