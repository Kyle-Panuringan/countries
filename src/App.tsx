import { useEffect, useState } from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
const temp = [
  {
    name: {
      common: "Japan",
      official: "Japan",
      nativeName: { jpn: { official: "日本", common: "日本" } },
    },
    tld: [".jp", ".みんな"],
    cca2: "JP",
    ccn3: "392",
    cca3: "JPN",
    cioc: "JPN",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: { JPY: { name: "Japanese yen", symbol: "¥" } },
    idd: { root: "+8", suffixes: ["1"] },
    capital: ["Tokyo"],
    altSpellings: ["JP", "Nippon", "Nihon"],
    region: "Asia",
    subregion: "Eastern Asia",
    languages: { jpn: "Japanese" },
    translations: {
      ara: { official: "اليابان", common: "اليابان" },
      bre: { official: "Japan", common: "Japan" },
      ces: { official: "Japonsko", common: "Japonsko" },
      cym: { official: "Japan", common: "Japan" },
      deu: { official: "Japan", common: "Japan" },
      est: { official: "Jaapan", common: "Jaapan" },
      fin: { official: "Japani", common: "Japani" },
      fra: { official: "Japon", common: "Japon" },
      hrv: { official: "Japan", common: "Japan" },
      hun: { official: "Japán", common: "Japán" },
      ita: { official: "Giappone", common: "Giappone" },
      jpn: { official: "日本", common: "日本" },
      kor: { official: "일본국", common: "일본" },
      nld: { official: "Japan", common: "Japan" },
      per: { official: "ژاپن", common: "ژاپن" },
      pol: { official: "Japonia", common: "Japonia" },
      por: { official: "Japão", common: "Japão" },
      rus: { official: "Япония", common: "Япония" },
      slk: { official: "Japonsko", common: "Japonsko" },
      spa: { official: "Japón", common: "Japón" },
      srp: { official: "Јапан", common: "Јапан" },
      swe: { official: "Japan", common: "Japan" },
      tur: { official: "Japonya", common: "Japonya" },
      urd: { official: "جاپان", common: "جاپان" },
      zho: { official: "日本国", common: "日本" },
    },
    latlng: [36.0, 138.0],
    landlocked: false,
    area: 377930.0,
    demonyms: {
      eng: { f: "Japanese", m: "Japanese" },
      fra: { f: "Japonaise", m: "Japonais" },
    },
    flag: "\uD83C\uDDEF\uD83C\uDDF5",
    maps: {
      googleMaps: "https://goo.gl/maps/NGTLSCSrA8bMrvnX9",
      openStreetMaps: "https://www.openstreetmap.org/relation/382313",
    },
    population: 125836021,
    gini: { "2013": 32.9 },
    fifa: "JPN",
    car: { signs: ["J"], side: "left" },
    timezones: ["UTC+09:00"],
    continents: ["Asia"],
    flags: {
      png: "https://flagcdn.com/w320/jp.png",
      svg: "https://flagcdn.com/jp.svg",
      alt: "The flag of Japan features a crimson-red circle at the center of a white field.",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/jp.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/jp.svg",
    },
    startOfWeek: "monday",
    capitalInfo: { latlng: [35.68, 139.75] },
    postalCode: { format: "###-####", regex: "^(\\d{7})$" },
  },
];
export interface Country {
  name: { common: string };
  flags: { png: string };
  population: number;
}

const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);
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
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <div id="App">
      <Navbar
        sortName={sortName}
        sortPopulation={sortPopulation}
        isSort={isSort}
      />
      <Main countries={countries} />
    </div>
  );
};

export default App;
