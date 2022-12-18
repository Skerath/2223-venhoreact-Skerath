import IngredientCard from "./IngredientCard";
import {useCallback, useEffect, useState} from "react";
import * as ingredientApi from "../../api/getIngredients";
import {Error} from "../alert/Error";
import {Message} from "../alert/Message";
import Loader from "../Loader/Loader";

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
    let results;

    const updateIngredientContainer = useCallback(async () => {
        try {
            setIsLoading(true);
            results = await ingredientApi.getIngredients(paramsQuery(queryPrefix, data));
        } catch (err) {
            setError(err);
            console.log("errorstate:" + err);
        } finally {
            setIsLoading(false);
            setIngredients(results);
        }
    }, [data, queryPrefix]);


    useEffect(() => {
        updateIngredientContainer();
    }, [updateIngredientContainer]);

    return (
        <>
            <Error error={error}/>
            <Loader loading={isLoading}/>
            {!error && !isLoading ? <div className="card-groups">
                {ingredients.map(ingredient => <IngredientCard key={ingredient.resourceID} {...ingredient}/>)}
                {ingredients.length === 0 && !isLoading ?
                    <Message message={"There were no results matching your query."}/> : null}
            </div> : null}
        </>
    );
}