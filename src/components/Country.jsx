import React from "react";
import CountryCard from "./CountryCard";
import { Grid } from "@mui/material";
import useCountries from "../app/customHook/getCountry";
// import useCountries from "../hooks/getCountry";

const Country = () => {
  const countryList = useCountries();
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Country List</h1>
      <Grid container spacing={2} padding={2}>
        {countryList.map((country) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={country.name}>
            <CountryCard name={country.name} flagUrl={country.flag} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Country;