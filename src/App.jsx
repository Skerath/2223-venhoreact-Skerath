import {Route, Routes} from "react-router";
import {HomePage, IngredientsPage, ItemsPage, NewItemPage} from "./pages";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import {PageNotFound} from "./components/pageNotFound/PageNotFound";
import {Footer} from "./components/footer/Footer";
import AuthLanding from "./components/authentication/AuthLanding";
import RequireAuth from "./components/authentication/RequireAuth";
import Navibar from "./components/Navibar/Navibar";

function App() {
    console.log(`${process.env.REACT_APP_API_URL}`);

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
                        <Navibar/>
                        <IngredientsPage/>
                        <Footer/>
                    </RequireAuth>
                }/>
                <Route path="items">
                    <Route path="" element={
                        <RequireAuth>
                            <Navibar/>
                            <ItemsPage/>
                            <Footer/>
                        </RequireAuth>
                    }/>
                    }/>
                    <Route path="create" element={
                        <RequireAuth>
                            <Navibar/>
                            <NewItemPage/>
                            <Footer/>
                        </RequireAuth>
                    }/>
                </Route>
                <Route path="login" element={
                    <>
                        <Navibar/>
                        <AuthLanding/>
                        <Footer/>
                    </>
                }/>
                <Route path="*" element={
                    <>
                        <Navibar/>
                        <PageNotFound/>
                        <Footer/>
                    </>
                }/>
            </Routes>
        </>
    );
}

export default App;