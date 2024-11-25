import axios from "axios";

const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
})



export const getApiData = () => {
  // return api.get('/all?fields=name,population,region,capital,flags')
  return api.get('/all')
}


// Detail

export const getCountryDetail = (name) => {
  
  return api.get(`/name/${name}`)
  // return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}