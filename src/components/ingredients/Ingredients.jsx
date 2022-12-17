import IngredientCard from "./IngredientCard";
import {useEffect, useState} from "react";
import {getAll} from "./getAll";

export default function Ingredients({queryPrefix, data}) {

    let [ingredients, setIngredients] = useState([]);

    const paramsQuery = data.map((data, i) => {
        if (data)
            return `${queryPrefix[i].toLowerCase()}=${data}`
        else
            return ""
    }).filter(Boolean).join("&");

    useEffect(() => {
        const getIngredients = async () => {
            const data = await getAll(paramsQuery);
            setIngredients(data);
        }
        getIngredients();
    }, [paramsQuery]);


    return (
        <div className="card-groups">
            {ingredients.map(ingredient => <IngredientCard {...ingredient}/>)}
        </div>
    );
}