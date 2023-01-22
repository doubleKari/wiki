import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./components/layout";
import { Info, Characters, ErrorPage, Welcome } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "info",
        element: <Info />,
        loader: infoloader,
      },
      {
        path: "characters",
        element: <Characters />,
        loader: characterslodaer,
      },
    ],
  },
]);

async function infoloader() {
  const resp = await fetch("https://api.sampleapis.com/avatar/info");
  const info = await resp.json();

  return { info };
}

async function characterslodaer() {
  const resp = await fetch("https://api.sampleapis.com/avatar/characters");
  const characters = await resp.json();
  return { characters };
}

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
