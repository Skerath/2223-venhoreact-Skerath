import Filter from "./components/filter/Filter";
import {useState} from "react";
import {INGREDIENTS_FILTER_LAYOUT, ITEM_FILTER_LAYOUT} from "./components/filter/filter-layout";
import Ingredients from "./components/ingredients/Ingredients";
import {Home} from "./components/home/Home";
import Items from "./components/items/Items";
import {NewItemForm} from "./components/items/NewItemForm";
import '../src/components/Cards.css'

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

export const ItemsPage = () => {
    const [query, setQuery] = useState('');

    queryPrefix.length = 0;
    ITEM_FILTER_LAYOUT.forEach(sublist => sublist.filterObjects.forEach(parameter => queryPrefix.push(parameter.displayName)));

    return (
        <main>
            <Filter layout={ITEM_FILTER_LAYOUT} output={setQuery}/>
            <Items queryPrefix={queryPrefix} data={query ? query : []}></Items>
        </main>
    );
};


export const NewItemPage = () => {
    return (
        <main style={{display: "inline-flex", justifyContent: "center", width: "100vw"}}>
            <NewItemForm/>
        </main>
    )
};