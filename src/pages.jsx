import INGREDIENTS from "./api/mock-data";
import Ingredient from "./components/ingredients/Ingredient";
import Location from "./components/locations/Location";
import Filter from "./components/filter/Filter";
import {useState} from "react";


export const Home = () => {
    return (<>
        <body>
        <div>
            <>
                <p>Not implemented yet.</p>
            </>
        </div>
        </body>
    </>);
}

export const Ingredients = () => {
    const [data, setData] = useState('');

    let listOfFilterKeys = [{
        stylingOptions: {width: "15rem"}, filterObjects: [{
            displayName: "Name", inputType: "text", ref: {},
        }]
    }, {
        stylingOptions: {width: "5rem"}, filterObjects: [{
            displayName: "Tier", inputType: "number", ref: {},
        }]
    }, {
        stylingOptions: {width: "21rem"}, filterObjects: [{
            displayName: "MinLevel", inputType: "number", ref: {},
        }, {
            displayName: "MaxLevel", inputType: "number", ref: {},
        },]
    }, {
        stylingOptions: {width: "21rem"}, filterObjects: [{
            displayName: "Modifier", ref: {}, selectOptions: [// TODO: fill this array up with possible select options with an API query
                {
                    selected: true, value: "", displayName: "Any",
                }, {
                    value: "health", displayName: "Health",
                }]
        },]
    }, {
        stylingOptions: {width: "21rem"}, filterObjects: [{
            displayName: "Profession", ref: {}, selectOptions: [// TODO: fill this array up with possible select options with an API query
                {
                    selected: true, value: "", displayName: "Any",
                }, {
                    value: "armouring", displayName: "Armouring",
                }, {
                    value: "tailoring", displayName: "Tailoring",
                }, {
                    value: "woodworking", displayName: "Woodworking",
                }, {
                    value: "scribing", displayName: "Scribing",
                },]
        },]
    }];

    return (
        <>
            <Filter input={listOfFilterKeys} output={setData}/>
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