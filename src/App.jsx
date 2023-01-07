import React, { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";

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
                    </Route>
                </Routes>
            </Suspense>
        </Fragment>
    );
}

export default App;
