import { useEffect, useState } from "react";
const CountryCard = ({name, flagImg, flagAltText}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "150px",
        width: "150px",
        borderRadius: "8px",
        flexDirection: "column",
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <img
        src={flagImg}
        alt={flagAltText}
        style={{
          width: "100px",
          height: "100px",
        }}
      />
      <h2>{name}</h2>
    </div>
  );
};

function Countries() {
  const API_URL = "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setCountries] = useState([]);
  console.log(countries);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log("Error: " + error));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      {countries.map((country) => (
        <CountryCard name={country.name} flagImg={country.flag} flagAltText={country.abbr}/>
      ))}
    </div>
  );
}

export default Countries;
