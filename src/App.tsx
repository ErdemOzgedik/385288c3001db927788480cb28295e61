import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingHandle from "./components/LoadingHandle";

const Home = lazy(() => import("./routes/Home"));
const Detail = lazy(() => import("./routes/Detail"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingHandle isError={false} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
