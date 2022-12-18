import IngredientCard from "./IngredientCard";
import {useCallback, useEffect, useState} from "react";
import * as ingredientApi from "../../api/getIngredients";
import {Error} from "../alert/Error";
import {Message} from "../alert/Message";

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
    //TODO implement loading, alert
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateIngredientContainer = useCallback(async () => {
        try {
            setIsLoading(true);
            const results = await ingredientApi.getIngredients(paramsQuery(queryPrefix, data));
            setIngredients(results);
        } catch (err) {
            setError(err);
            console.log("errorstate:" + err);
        } finally {
            setIsLoading(false);
        }
    }, [data, queryPrefix]);


    useEffect(() => {
        updateIngredientContainer();
    }, [updateIngredientContainer]);

    return (
        <>
            <Error error={error}/>
            {!error ? <div className="card-groups">
                {ingredients.map(ingredient => <IngredientCard key={ingredient.resourceID} {...ingredient}/>)}
                {ingredients.length === 0 && !isLoading ?
                    <Message message={"There were no results matching your query."}/> : null}
            </div> : null}
        </>
    );
}