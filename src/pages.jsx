import INGREDIENTS from "./api/mock-data";
import Ingredient from "./components/ingredients/Ingredient";
import Location from "./components/locations/Location";
import Filter from "./components/filter/Filter";
import {useState} from "react";


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
    const [data, setData] = useState('');

    return (
        <>
            <div>
                <Filter output={setData}/>
            </div>
            <div className="card-groups">
                {
                    // TODO turn this into a backend api call
                    INGREDIENTS
                        .filter(ingredient => {
                            if (!data) return ingredient
                            return ingredient.name.toLowerCase().includes(data.toLowerCase());
                        })
                        .map(ingredient =>
                            <Ingredient {...ingredient}/>)
                }
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