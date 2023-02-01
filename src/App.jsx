import React, { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import ExchangeDetailPage from "./pages/ExchangeDetailPage";
import ExchangesPage from "./pages/ExchangesPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const CoinDetailPage = lazy(() => import("./pages/CoinDetailPage"));

function App() {
    return (
        <Fragment>
            <Suspense fallback={<></>}>
                <Routes>
                    <Route element={<Main></Main>}>
                        <Route path="/" element={<HomePage></HomePage>}></Route>
                        <Route
                            path="/coin/:coinId"
                            element={<CoinDetailPage></CoinDetailPage>}
                        ></Route>
                        <Route
                            path="/exchange/:exId"
                            element={<ExchangeDetailPage></ExchangeDetailPage>}
                        ></Route>
                        <Route path="/exchanges" element={<ExchangesPage></ExchangesPage>}></Route>
                        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
                        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
                    </Route>
                </Routes>
            </Suspense>
        </Fragment>
    );
}

export default App;
