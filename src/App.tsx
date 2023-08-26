import { useEffect, useState } from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

export interface Country {
  name: { common: string };
  flags: { png: string; svg: string };
  population: number;
  region: string;
  maps: {
    googleMaps: string;
  };
  capital: string[];
  currencies: [];
  languages: [];
}

const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [isSort, setIsSort] = useState({
    sortNameAscend: false,
    sortPopulationAscend: false,
    sortNameSelected: false,
    sortPopulationSelected: false,
  });

  function sortName() {
    setCountries(
      isSort.sortNameAscend
        ? countries.sort((a, b) => {
            let x = a.name.common.toUpperCase();
            let y = b.name.common.toUpperCase();
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          })
        : countries.sort((a, b) => {
            let x = a.name.common.toUpperCase();
            let y = b.name.common.toUpperCase();
            if (x < y) {
              return 1;
            }
            if (x > y) {
              return -1;
            }
            return 0;
          })
    );
    setIsSort({
      sortNameAscend: !isSort.sortNameAscend,
      sortPopulationAscend: false,
      sortNameSelected: true,
      sortPopulationSelected: false,
    });
  }

  function sortPopulation() {
    setCountries(
      isSort.sortPopulationAscend
        ? countries.sort((a, b) => a.population - b.population)
        : countries.sort((a, b) => b.population - a.population)
    );
    setIsSort({
      sortNameAscend: false,
      sortPopulationAscend: !isSort.sortPopulationAscend,
      sortNameSelected: false,
      sortPopulationSelected: true,
    });
  }

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div id="App">
      <Navbar
        sortName={sortName}
        sortPopulation={sortPopulation}
        isSort={isSort}
        setSearch={setSearch}
        setRegion={setRegion}
      />
      <Main
        isLoading={isLoading}
        countries={countries}
        search={search}
        region={region}
      />
    </div>
  );
};

export default App;
