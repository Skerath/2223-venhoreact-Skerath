import {Route, Routes} from "react-router";
import {HomePage, IngredientsPage, ItemsPage, NewItemPage} from "./pages";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import {PageNotFound} from "./components/pageNotFound/PageNotFound";
import {Footer} from "./components/footer/Footer";
import AuthLanding from "./components/authentication/AuthLanding";
import RequireAuth from "./components/authentication/RequireAuth";
import NewNavbar from "./components/navbar/NewNavBar";

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
                        <NewNavbar/>
                        <IngredientsPage/>
                        <Footer/>
                    </RequireAuth>
                }/>
                <Route path="items">
                    <Route path="" element={
                        <RequireAuth>
                            <NewNavbar/>
                            <ItemsPage/>
                            <Footer/>
                        </RequireAuth>
                    }/>
                    }/>
                    <Route path="create" element={
                        <RequireAuth>
                            <NewNavbar/>
                            <NewItemPage/>
                            <Footer/>
                        </RequireAuth>
                    }/>
                </Route>
                <Route path="login" element={
                    <>
                        <NewNavbar/>
                        <AuthLanding/>
                        <Footer/>
                    </>
                }/>
                <Route path="*" element={
                    <>
                        <NewNavbar/>
                        <PageNotFound/>
                        <Footer/>
                    </>
                }/>
            </Routes>
        </>
    );
}

export default App;