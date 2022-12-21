import {
    useAuth0,
} from '@auth0/auth0-react';
import axios from 'axios';
import {
    useCallback,
} from 'react';

const baseUrl = `${process.env.REACT_APP_API_URL}/ingredients/?`;

const useIngredients = () => {
    const {
        getAccessTokenSilently,
    } = useAuth0();


    const getAllIngredients = useCallback(async (paramsQuery) => {
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
        getAllIngredients,
    }
}

export default useIngredients;