import { weatherConstants } from '../_constants';
import { weatherService } from '../_services';


export const weatherActions = {
    
    getAll,
    getByCountryID
};


function getAll(query) {
    return dispatch => {
        dispatch(request());
        weatherService.getAll(query)
            .then(
                (response) => {dispatch(success(response))},
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: weatherConstants.GETALL_REQUEST } }
    function success(response) { return { type: weatherConstants.GETALL_SUCCESS, response } }
    function failure(error) { return { type: weatherConstants.GETALL_FAILURE, error } }
}

function getByCountryID(id) {
    return dispatch => {
        dispatch(request());
        weatherService.getByCountryID(id)
            .then(
                (response) => {dispatch(success(response))},
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: weatherConstants.GETBYCOUNTRYID_REQUEST } }
    function success(response) { return { type: weatherConstants.GETBYCOUNTRYID_SUCCESS, response } }
    function failure(error) { return { type: weatherConstants.GETALL_FAILURE, error } }
}
