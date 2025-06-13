// Country.js
import React, { useState, Suspense } from "react";
import { Button } from "@mui/material";

const CountryList = React.lazy(() => import("./CountryList"));

const Country = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Country List</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Button variant="contained" onClick={() => setShow(true)}>
          Show Country List
        </Button>
      </div>

      {show && (
        <Suspense
          fallback={<p style={{ textAlign: "center" }}>Loading countries...</p>}
        >
          <CountryList />
        </Suspense>
      )}
    </>
  );
};

export default Country;