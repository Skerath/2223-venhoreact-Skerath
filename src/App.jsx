import {Route, Routes} from "react-router";
import {HomePage, IngredientsPage} from "./pages";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import {PageNotFound} from "./components/pageNotFound/PageNotFound";
import {Footer} from "./components/footer/Footer";

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
                <Route path="resources">
                    <Route path="ingredients" element={
                        <>
                            <Navbar/>
                            <IngredientsPage/>
                            <Footer/>
                        </>
                    }/>
                    {/*TODO implement*/}
                    <Route path="locations" element={
                        <>
                            <Navbar/>
                            <p>Not implemented yet.</p>
                            <Footer/>
                        </>
                    }/>
                    <Route path="custom-items" element={
                        <>
                            <Navbar/>
                            <p>Not implemented yet.</p>
                            <Footer/>
                        </>
                    }/>
                    }/>
                </Route>
                <Route path="resources">

                </Route>
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