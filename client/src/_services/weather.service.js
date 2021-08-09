
import axios from "axios";
const BASE_URL = 'http://localhost:8000';

export const weatherService = {

    getAll,
    getByCountryID
};



function getAll(query) {
    return axios.get(`${BASE_URL}/api/location/search/${query}`);
}

function getByCountryID(id) {
    return axios.get(`${BASE_URL}/api/location/${id}`);
}
