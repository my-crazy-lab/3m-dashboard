import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Overview from "../components/pages/Overview";

const Root = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        path: "test",
        element: <Root />,
        // loader: teamLoader,
      },
    ],
  },
  {
    path: "/3m/overview",
    element: <Overview />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
