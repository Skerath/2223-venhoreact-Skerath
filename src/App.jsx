import {Route, Routes} from "react-router";
import {Home, Ingredients, Locations} from "./pages";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="items">
                <Route index element={<Navbar></Navbar>}/>
                <Route path="ingredients" element={<Ingredients/>}/>
                <Route path="resources" element={<a>Resources.</a>}/>
            </Route>
            <Route path="locations" element={<Locations/>}/>
            <Route path="*" element={<a>Page not found.</a>}/>
        </Routes>
    );
}

export default App;