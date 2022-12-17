import INGREDIENTS from "../../api/mock-data";
import IngredientCard from "./IngredientCard";

export default function Ingredients({data}) {

    // let queryPrefix = [];
    // INGREDIENTS_FILTER_LAYOUT.forEach(a => a.filterObjects.forEach(b => queryPrefix.push(b.displayName)));
    // console.log("queryprefix= " + queryPrefix);

    return (
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
                    .map(ingredient => <IngredientCard {...ingredient}/>)}
        </div>
    );
}