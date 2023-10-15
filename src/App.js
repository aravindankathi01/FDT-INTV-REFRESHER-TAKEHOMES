import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Calculator from "./Components/Calculator";
import Counter from "./Components/Counter";
import Dropdown from "./Components/Dropdown";
import Flags from "./Components/Flags";
import Form from "./Components/Form";
import WeatherApp from "./Components/WeatherApp";
import HomePage from "./Components/HomePage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/calculator",
      element: <Calculator />,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
    {
      path: "/dropdown",
      element: <Dropdown />,
    },
    {
      path: "/flags",
      element: <Flags />,
    },
    {
      path: "/form",
      element: <Form />,
    },
    {
      path: "/weatherapp",
      element: <WeatherApp />,
    },
  ]);

  return (
    <RouterProvider router={appRouter}>
      <HomePage />
    </RouterProvider>
  );
}

export default App;
