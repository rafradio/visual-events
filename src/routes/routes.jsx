import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
// import App from "../App1";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [
      ]
    },
]);