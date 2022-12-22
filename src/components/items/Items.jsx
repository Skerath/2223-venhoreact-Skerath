import {useCallback, useEffect, useState} from "react";
import {Error} from "../alert/Error";
import {Message} from "../alert/Message";
import Loader from "../Loader/Loader";
import useItems from "../../api/itemService";
import ItemCard from "./ItemCard";

const paramsQuery = (queryPrefix, data) => {
    return data.map((data, i) => {
        if (data)
            return `${queryPrefix[i].toLowerCase()}=${data}`
        else
            return ""
    }).filter(Boolean).join("&");
};

export default function Items({queryPrefix, data}) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const itemApi = useItems();

    const updateItemContainer = useCallback(async () => {
        let results;
        try {
            setIsLoading(true);
            setError(false);
            results = await itemApi.getItemsByQuery(paramsQuery(queryPrefix, data));
            setItems(results);
        } catch (err) {
            if (err.request) {
                if (err.request.status === 0)
                    setError({message: "API seems to be offline."})
                else if (err.request.status === 404)
                    setItems([]);
                else if (err.request.status === 403)
                    setError({message: "You're not allowed to view Venho's custom items."});
                else setError(err)
            } else
                setError(err)
        } finally {
            setIsLoading(false);
        }
    }, [data, queryPrefix]);

    useEffect(() => {
        updateItemContainer();
    }, [updateItemContainer]);

    return (
        <>
            <Loader loading={isLoading}/>
            {!isLoading ? <Error error={error}/> : null}
            {!error && !isLoading ? <div className="card-groups">
                {items.map(item => <ItemCard id={1} key={item.itemId} props={item}/>)}
                {items.length === 0 && !isLoading ?
                    <Message message={"There were no results matching your query."}/> : null}
            </div> : null}
        </>
    );
}