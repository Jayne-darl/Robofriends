import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
export const requestRobots = () => async (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let users = await response.json()
        await dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: users })
    }
    catch (error) {
        dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    }


}