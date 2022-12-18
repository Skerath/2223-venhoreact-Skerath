import {Route, Routes} from "react-router";
import {Home, IngredientsPage, Locations} from "./pages";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route index element={
                    <>
                        <Navbar/>
                        <Home/>
                    </>
                }/>

                <Route path="items">
                    <Route index element={
                        <>
                            <Navbar/>
                            <p>Not implemented yet.</p>
                        </>
                    }/>

                </Route>
                {/*TODO implement*/}
                <Route path="locations" element={
                    <>
                        <Navbar/>
                        <Locations/>
                    </>
                }/>
                <Route path="resources">
                    <Route path="ingredients" element={
                        <>
                            <Navbar/>
                            <IngredientsPage/>
                        </>
                    }/>
                    {/*TODO implement*/}
                    <Route path="resources" element={
                        <>
                            <Navbar/>
                            <p>Not implemented yet.</p>
                        </>
                    }/>
                    {/*TODO implement*/}
                    <Route path="powders" element={
                        <>
                            <Navbar/>
                            <p>Not implemented yet.</p>
                        </>
                    }/>
                    {/*TODO implement*/}
                    <Route path="potions" element={
                        <>
                            <Navbar/>
                            <p>Not implemented yet.</p>
                        </>
                    }/>
                </Route>
                <Route path="items">
                    {/*TODO implement*/}
                    <Route path="items" element={
                        <>
                            <Navbar/>
                            <p>Not implemented yet.</p>
                        </>
                    }/>
                    {/*TODO implement*/}
                    <Route path="custom-items" element={
                        <>
                            <Navbar/>
                            <p>Not implemented yet.</p>
                        </>
                    }/>
                </Route>
                {/*TODO proper page not found page*/}
                <Route path="*" element={
                    <>
                        <Navbar/>
                        <p>Page not found.</p>
                    </>
                }/>
            </Routes>
        </>
    );
}

export default App;