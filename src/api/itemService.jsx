import {useAuth0,} from '@auth0/auth0-react';
import axios from 'axios';
import {useCallback,} from 'react';

const baseUrl = `${process.env.REACT_APP_API_URL}/items`;

const useItems = () => {
    const {
        getAccessTokenSilently,
    } = useAuth0();


    const getItemsByQuery = useCallback(async (paramsQuery) => {
        const token = await getAccessTokenSilently();
        const {
            data
        } = await axios.get(baseUrl + paramsQuery, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return data;
    }, [getAccessTokenSilently]);

    const getItemById = useCallback(async (id) => {
        const token = await getAccessTokenSilently();
        const {
            data
        } = await axios.get(`${baseUrl}/id/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        return data[0];
    }, [getAccessTokenSilently]);


    const createItem = async (values) => {
        const token = await getAccessTokenSilently();
        return await axios.post(baseUrl, null, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                name: values.name,
                type: values.type,
                ingredient: values.ingredient,
            }
        });
    };

    const editItem = async (values) => {
        const token = await getAccessTokenSilently();
        const result = await axios.put(baseUrl, null, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                id: values.itemId,
                name: values.name,
                type: values.type,
                ingredient: values.ingredient,
            }
        });

        return result;
    };


    return {
        getItemsByQuery,
        createItem,
        editItem,
        getItemById,
    };
}

export default useItems;