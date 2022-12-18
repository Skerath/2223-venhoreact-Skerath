import IngredientCard from "./IngredientCard";
import {useCallback, useEffect, useState} from "react";
import * as ingredientApi from "../../api/getIngredients";

const paramsQuery = (queryPrefix, data) => {
    return data.map((data, i) => {
        if (data)
            return `${queryPrefix[i].toLowerCase()}=${data}`
        else
            return ""
    }).filter(Boolean).join("&");
};

export default function Ingredients({queryPrefix, data}) {

    const [ingredients, setIngredients] = useState([]);
    //TODO implement loading, error
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const updateIngredientContainer = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            const results = await ingredientApi.getIngredients(paramsQuery(queryPrefix, data));
            setIngredients(results);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, [data, queryPrefix]);


    useEffect(() => {
        updateIngredientContainer();
    }, [updateIngredientContainer]);


    return (
        <div className="card-groups">
            {ingredients.map(ingredient => <IngredientCard key={ingredient.resourceID} {...ingredient}/>)}
        </div>
    );
}