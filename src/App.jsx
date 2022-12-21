import {Route, Routes} from "react-router";
import {HomePage, IngredientsPage} from "./pages";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import {PageNotFound} from "./components/pageNotFound/PageNotFound";
import {Footer} from "./components/footer/Footer";
import AuthLanding from "./components/authentication/AuthLanding";
import RequireAuth from "./components/authentication/RequireAuth";

function App() {
    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route index element={
                    <>
                        <HomePage/>
                    </>
                }/>
                <Route path="ingredients" element={
                    <RequireAuth>
                        <Navbar/>
                        <IngredientsPage/>
                        <Footer/>
                    </RequireAuth>
                }/>
                <Route path="items">
                    <Route path="" element={
                        <RequireAuth>
                            <Navbar/>
                            <p>Not implemented yet.</p>
                            <Footer/>
                        </RequireAuth>
                    }/>
                    }/>
                    <Route path="new" element={
                        <RequireAuth>
                            <Navbar/>
                            <p>Not implemented yet.</p>
                            <Footer/>
                        </RequireAuth>
                    }/>
                </Route>
                <Route path="login" element={
                    <>
                        <Navbar/>
                        <AuthLanding/>
                        <Footer/>
                    </>
                }/>
                <Route path="*" element={
                    <>
                        <Navbar/>
                        <PageNotFound/>
                        <Footer/>
                    </>
                }/>
            </Routes>
        </>
    );
}

export default App;