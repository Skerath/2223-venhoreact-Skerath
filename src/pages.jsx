import INGREDIENTS from "./api/mock-data";
import Ingredient from "./components/ingredients/Ingredient";
import Location from "./components/locations/Location";


export const Home = () => {
    return (
        <>
            <body>
            <div>
                <>
                    <p>Not implemented yet.</p>
                </>
            </div>
            </body>
        </>
    );
}

export const Ingredients = () => {
    return (
        <>
            <div className="card-groups">{INGREDIENTS.map(ingredient =>
                <Ingredient {...ingredient}/>)}
            </div>
        </>
    );
}

export const Locations = () => {
    return (
        <>
            <Location/>
        </>
    );
}