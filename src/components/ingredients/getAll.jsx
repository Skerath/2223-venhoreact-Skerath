import axios from 'axios';

const baseUrl = `http://localhost:9000/api/ingredients/?`;

export const getAll = async (paramsQuery) => {
    const {
        data
    } = await axios.get(baseUrl + paramsQuery);
    return data;
};