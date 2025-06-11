import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL = 'https://countriesnow.space/api/v0.1/countries/flag/images'; 

const useCountries = () => {
  const [countries, setCountries] = useState([]);
  
  const fetchCountry = async()=>{
    const response = await axios.get(API_URL);
    const {data} = response.data
    setCountries(data);
    return countries;
  }

  useEffect(() => {
    fetchCountry();
  }, []);

  return countries;
};


export default useCountries