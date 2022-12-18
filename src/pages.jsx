import Location from "./components/locations/Location";
import Filter from "./components/filter/Filter";
import {useState} from "react";
import INGREDIENTS_FILTER_LAYOUT from "./components/filter/filter-layout";
import Ingredients from "./components/ingredients/Ingredients";

const queryPrefix = [];

export const Home = () => {
    return (
        <main>
            <p>Not implemented yet.</p>
        </main>
    );
}

export const IngredientsPage = () => {
    const [query, setQuery] = useState('');

    queryPrefix.length = 0;
    INGREDIENTS_FILTER_LAYOUT.forEach(sublist => sublist.filterObjects.forEach(parameter => queryPrefix.push(parameter.displayName)));

    return (
        <>
            <Filter layout={INGREDIENTS_FILTER_LAYOUT} output={setQuery}/>
            <Ingredients queryPrefix={queryPrefix} data={query ? query : []}></Ingredients>
        </>
    );
};


export const Locations = () => {
    return (<>
        <Location/>
    </>);
}