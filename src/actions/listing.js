import axios from 'axios';
import { GET_LIST, SET_LOADER, } from './type'
export const toggleLoader = (info) => (
    {
        type: SET_LOADER,
        payload: info
    }
)
export const getItems = (data) => {
    return async function (dispatch) {
        try {
            dispatch(toggleLoader(true));
            var config = {
                method: 'post',
                url: `https://mobi.maaxkart.com/call-back-products-by-loc`,
                headers: {
                    'Accept': 'application/json',
                },
                data:data
            };
            const response = await axios(config)
            dispatch(toggleLoader(false));
            dispatch({
                type: GET_LIST,
                payload: response.data
            })
        } catch (e) {
            dispatch(toggleLoader(false));
        }
    }
}

