import {
    useAuth0,
} from '@auth0/auth0-react';
import axios from 'axios';
import {
    useCallback,
} from 'react';

const baseUrl = `${process.env.REACT_APP_API_URL}/items/?`;

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

    return {
        getItemsByQuery,
    }
}

export default useItems;