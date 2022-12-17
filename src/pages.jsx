import INGREDIENTS from "./api/mock-data";
import Ingredient from "./components/ingredients/Ingredient";
import Location from "./components/locations/Location";
import Filter from "./components/filter/Filter";
import {useState} from "react";
import INGREDIENTS_FILTER_LAYOUT from "./components/filter/filter-layout";


export const Home = () => {
    return (
        <main>
            <p>Not implemented yet.</p>
        </main>
    );
}

export const Ingredients = () => {
    const [data, setData] = useState('');


    // TODO put this in Ingredients component
    let queryPrefix = [];
    INGREDIENTS_FILTER_LAYOUT.forEach(a => a.filterObjects.forEach(b => queryPrefix.push(b.displayName)));
    console.log("queryprefix= " + queryPrefix);

    return (
        <>
            <Filter input={INGREDIENTS_FILTER_LAYOUT} output={setData}/>
            <div className="card-groups">
                {// TODO turn this into a backend api call
                    INGREDIENTS
                        .filter(ingredient => {
                            if (!data[0]) return ingredient;
                            console.log(data[0]);
                            return ingredient.name.toLowerCase().includes(data[0]);
                        })
                        .filter(ingredient => {
                            if (!data[1] || parseInt(data[1]) <= 0) return ingredient;
                            return ingredient.level_requirement === parseInt(data[1]);
                        })
                        .filter(ingredient => {
                            if (!data[4]) return ingredient;
                            return ingredient.modifiers.map(modifier => modifier.name).includes(data[4]);
                        })
                        .filter(ingredient => {
                            if (!data[5]) return ingredient;
                            return ingredient.uses.map(use => use.toUpperCase()).includes(data[5].toUpperCase());
                        })
                        .map(ingredient => <Ingredient {...ingredient}/>)}
            </div>
        </>
    );
};


export const Locations = () => {
    return (<>
        <Location/>
    </>);
}