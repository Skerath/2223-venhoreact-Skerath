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
            <Filter output={setData}/>
            <div className="card-groups">
                {
                    // TODO turn this into a backend api call
                    INGREDIENTS
                        .filter(ingredient => {
                            if (!data[0]) return ingredient;
                            return ingredient.name.toLowerCase().includes(data[0].toLowerCase());
                        })
                        .filter(ingredient => {
                            if (!data[1]) return ingredient;
                            return ingredient.id === parseInt(data[1]);
                        })
                        .filter(ingredient => {
                            if (!data[2]) return ingredient;
                            return ingredient.level_requirement <= parseInt(data[2]);
                        })
                        .filter(ingredient => {
                            if (!data[3]) return ingredient;
                            return ingredient.modifiers.map(modifier => modifier.name).includes(data[3]);
                        })
                        .filter(ingredient => {
                            if (!data[4]) return ingredient;
                            return ingredient.uses.includes(data[4]);
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