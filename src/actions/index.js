import axios from 'axios';

const API_KEY='8b36315504281a90e72cf459316c4cf9';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WHEATHER='FETCH_WHEATHER';

export function fetchWeather(city){

    const url=`${ROOT_URL}&q=${city},us`;
    const request=axios.get(url);

    return {
        type: FETCH_WHEATHER,
        payload: request
    }
}