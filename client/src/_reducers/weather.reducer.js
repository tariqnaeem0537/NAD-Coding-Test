import { weatherConstants } from '../_constants';

const INITIAL_STATE = {
    countries: [],
    loading: false,
    weatherRecords: {}
};
export function weather(state = INITIAL_STATE, action) {
    switch (action.type) {
        case weatherConstants.GETALL_REQUEST:
            return {
                loading: true,
                countries: [],
                weatherRecords: {}
            };
        case weatherConstants.GETALL_SUCCESS:
            return {
                countries: action.response.data,
                loading: false,
                weatherRecords: {}
            };
        case weatherConstants.GETBYCOUNTRYID_REQUEST:
            return {
                loading: true,
                countries: [],
                weatherRecords: {}
            }
        case weatherConstants.GETBYCOUNTRYID_SUCCESS:
            return {
                weatherRecords: action.response.data,
                loading: false,
                countries: [],
            }
        case weatherConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}