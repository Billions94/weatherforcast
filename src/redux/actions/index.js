import axios from "axios"

export const GET_DATA = 'GET_DATA'

const apiKey = process.env.REACT_APP_API_KEY

export const getDataAction = (input) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`)

            console.log(data)
            dispatch({
                type: GET_DATA,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}