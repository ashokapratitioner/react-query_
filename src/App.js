import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavComponent from "./components/NavComponent/NavComponent";
import Home from "./pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import NotFound from "./routes/NotFound";
import { pages } from "./routes/route.constants";

const client = new QueryClient();

const ReactQueryDevtoolsProduction = lazy(() =>
  import("@tanstack/react-query-devtools/build/modern/production.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <NavComponent pages={pages} />
        <Routes>
          <Route path="/" element={<Home />} />
          {pages.map((page) => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Suspense fallback={null}>
        <ReactQueryDevtoolsProduction />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
