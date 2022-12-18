import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_URL}/ingredients/?`;

export const getIngredients = async (paramsQuery) => {
    const {
        data
    } = await axios.get(baseUrl + paramsQuery);

    return data;
};