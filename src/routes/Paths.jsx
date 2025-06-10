import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));
const AbaProdutoPesquisa = lazy(() => import("../pages/AbaProdutoPesquisa"));


import Layout from "../layout/Layout";
import Spinner from "../components/spinner/Spinner";
import AbaProdutoDetalhe from "../pages/AbaProdutoDetalhe";


const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>{<Spinner />}</div>}>
          <Routes>

            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/produtos" element={<AbaProdutoPesquisa />} />
              <Route path="/produtosd" element={<AbaProdutoDetalhe />} />
            </Route>

          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default Paths;
