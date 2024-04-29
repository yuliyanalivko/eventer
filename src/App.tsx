import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layouts/Layout.tsx";
import routes from "./routes/index";
import ThemeContextProvider from "./contexts/ThemeContext.tsx";
import CommonContextProvider from "contexts/CommonContext.tsx";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes,
    },
  ]);

  return (
    <ThemeContextProvider>
      <CommonContextProvider>
        <RouterProvider router={router} />
      </CommonContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
