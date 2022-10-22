import Navbar from "./components/navbar/Navbar";
import INGREDIENTS from "./api/mock-data";
import Ingredient from "./components/ingredients/Ingredient";
import Location from "./components/locations/Location";


export const Home = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <body>
            <div>
                <>
                    <a>Not implemented yet.</a>
                </>
            </div>
            </body>
        </>
    );
}

export const Ingredients = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <body>
            <div className="card-columns" >{INGREDIENTS.map(ingredient =>
                <Ingredient {...ingredient}/>)}
            </div>
            </body>
        </>
    );
}

export const Locations = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <body>
            <div>
                <Location/>
            </div>
            </body>
        </>
    );
}