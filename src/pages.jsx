import Filter from "./components/filter/Filter";
import {useState} from "react";
import INGREDIENTS_FILTER_LAYOUT from "./components/filter/filter-layout";
import Ingredients from "./components/ingredients/Ingredients";
import {Home} from "./components/home/Home";

const queryPrefix = [];

export const HomePage = () => {
    return (
        <main>
            <Home/>
        </main>
    );
}

export const IngredientsPage = () => {
    const [query, setQuery] = useState('');

    queryPrefix.length = 0;
    INGREDIENTS_FILTER_LAYOUT.forEach(sublist => sublist.filterObjects.forEach(parameter => queryPrefix.push(parameter.displayName)));

    return (
        <main>
            <Filter layout={INGREDIENTS_FILTER_LAYOUT} output={setQuery}/>
            <Ingredients queryPrefix={queryPrefix} data={query ? query : []}></Ingredients>
        </main>
    );
};