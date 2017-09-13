import axios from 'axios';

const api_key = '26ec2fd80160e7fc766a91e175763b9a';
const root_url = `http://api.openweathermap.org/data/2.5/forecast?appid=${api_key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city){

const url = `${root_url}&q=${city},us`;
const request = axios.get(url);

console.log("Request",request);

return {
type: FETCH_WEATHER,
payload : request

};
}