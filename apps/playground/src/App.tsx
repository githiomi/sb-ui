import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { NotFoundPage } from "./pages/NotFound.page";
import { HOME_ROUTE, componentRoutes } from "./routes";

function App() {
  const HomeElement = HOME_ROUTE.element;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path={HOME_ROUTE.path} element={<HomeElement />} />
          {componentRoutes.map((route) => {
            const PageElement = route.element;
            return (
              <Route
                key={route.slug}
                path={route.path}
                element={<PageElement />}
              />
            );
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
