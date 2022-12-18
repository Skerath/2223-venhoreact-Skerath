import IngredientCard from "./IngredientCard";
import {useEffect, useState} from "react";
import {getIngredients} from "../../api/getIngredients";

export default function Ingredients({queryPrefix, data}) {

    let [ingredients, setIngredients] = useState([]);

    const paramsQuery = data.map((data, i) => {
        if (data)
            return `${queryPrefix[i].toLowerCase()}=${data}`
        else
            return ""
    }).filter(Boolean).join("&");

    useEffect(() => {
        const updateIngredientContainer = async () => {
            const data = await getIngredients(paramsQuery);
            setIngredients(data);
        }
        updateIngredientContainer();
    }, [paramsQuery]);


    return (
        <div className="card-groups">
            {ingredients.map(ingredient => <IngredientCard key={ingredient.resourceID} {...ingredient}/>)}
        </div>
    );
}