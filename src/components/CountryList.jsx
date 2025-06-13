// CountryList.js
import React from "react";
import { Grid } from "@mui/material";
import CountryCard from "./CountryCard"; // Reusable card component
import useCountries from "../app/customHook/getCountry";

const CountryList = () => {
  const countryList = useCountries();

  return (
    <Grid container spacing={2} padding={2}>
      {countryList.map((country) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={country.name}>
          <CountryCard name={country.name} flagUrl={country.flag} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CountryList;