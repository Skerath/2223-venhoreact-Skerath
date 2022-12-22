import IngredientCard from "./IngredientCard";
import {useCallback, useEffect, useState} from "react";
import useIngredients from '../../api/ingredientService';
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
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const ingredientApi = useIngredients();

    const updateIngredientContainer = useCallback(async () => {
        let results;
        try {
            setIsLoading(true);
            setError(false);
            results = await ingredientApi.getAllIngredients(paramsQuery(queryPrefix, data));
            setIngredients(results);
        } catch (err) {
            if (err.request) {
                if (err.request.status === 0)
                    setError({message: "API seems to be offline."})
                else if (err.request.status === 404)
                    setIngredients([]);
                else if (err.request.status === 403)
                    setError({message: "You're not allowed to view Venho's ingredients!"});
                else if (err.request.status === 400) {
                    setError(err.response.data.details.query || JSON.stringify(err));
                } else setError(err);
            } else
                setError(err);
        } finally {
            setIsLoading(false);
        }
    }, [data, queryPrefix]);


    useEffect(() => {
        updateIngredientContainer();
    }, [updateIngredientContainer]);

    return (
        <>
            <Loader loading={isLoading}/>
            {!isLoading ? <Error error={error}/> : null}
            {!error && !isLoading ? <div className="card-groups">
                {ingredients.map(ingredient => <IngredientCard key={ingredient.resourceID} {...ingredient}/>)}
                {ingredients.length === 0 && !isLoading ?
                    <Message message={"There were no results matching your query."}/> : null}
            </div> : null}
        </>
    );
}