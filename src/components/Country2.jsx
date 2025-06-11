import { Grid } from '@mui/material';
import React from 'react'
import useCountries from "../app/customHook/getCountry";
import CountryCard from './CountryCard';

const Country2 = () => {
  const countryList = useCountries();
  return (
    <>
    <h1 style={{textAlign:'center'}}>Country List 2</h1>
    <Grid container spacing={2} padding={2}>
      {countryList.map((country) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={country.name}>
          <CountryCard name={country.name} flagUrl={country.flag} />
        </Grid>
      ))}
    </Grid>
    </>
  );
}

export default Country2