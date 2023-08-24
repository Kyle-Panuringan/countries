import { useState } from "react";
import { Country } from "../../App";
import Modal from "../Modal/Modal";
import "./main.scss";
import { v4 } from "uuid";

interface Props {
  isLoading: boolean;
  countries: Country[];
  search: string;
  region: string;
}

const Main = ({ isLoading, countries, search, region }: Props) => {
  const [isModal, setIsModal] = useState(false);
  const [countryData, setCountryData] = useState<Country | null>(null);

  function handleModal(country: Country) {
    setIsModal(true);
    setCountryData(country);
  }

  return (
    <div id="main">
      {isModal && <Modal countryData={countryData} setIsModal={setIsModal} />}
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <div className="grid">
          {countries
            .filter((country) => {
              if (country.currencies) {
                if (
                  country.name.common
                    .toUpperCase()
                    .startsWith(search.toUpperCase())
                ) {
                  if (region) {
                    if (country.region === region) return country;
                  } else {
                    return country;
                  }
                }
              }
            })
            .map((country) => {
              return (
                <div className="card" key={v4()}>
                  <img src={country.flags.png} />

                  <h2>{country.name.common}</h2>
                  <div>
                    <div className="cardInfos">
                      <div className="cardRegion">
                        <p>Region:</p>
                        <p>{country.region}</p>
                      </div>
                      <div className="cardPopulation">
                        <p>Population:</p>
                        <p>{country.population.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="cardButtons">
                      <a href={country.maps.googleMaps} target="_blank">
                        Google Map
                      </a>
                      <button
                        type="button"
                        onClick={() => handleModal(country)}
                      >
                        More Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Main;
