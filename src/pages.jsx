import Location from "./components/locations/Location";
import Filter from "./components/filter/Filter";
import {useState} from "react";
import INGREDIENTS_FILTER_LAYOUT from "./components/filter/filter-layout";
import Ingredients from "./components/ingredients/Ingredients";


export const Home = () => {
    return (
        <main>
            <p>Not implemented yet.</p>
        </main>
    );
}

export const IngredientsPage = () => {

    const [query, setQuery] = useState('');

    return (
        <>
            <Filter layout={INGREDIENTS_FILTER_LAYOUT} output={setQuery}/>
            <Ingredients queryPrefix={query.queryPrefix} data={query ? query.output : []}></Ingredients>
        </>
    );
};


export const Locations = () => {
    return (<>
        <Location/>
    </>);
}