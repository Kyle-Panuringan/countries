import { Country } from "../../App";
import "./main.scss";

interface Props {
  countries: Country[];
  search: string;
  region: string;
}

const Main = ({ countries, search, region }: Props) => {
  return (
    <div id="main">
      <div className="grid">
        {countries
          .filter((country) => {
            if (
              country.name.common.toUpperCase().startsWith(search.toUpperCase())
            ) {
              if (region) {
                if (country.region === region) return country;
              } else {
                return country;
              }
            }
          })
          .map((country) => {
            return (
              <div className="card">
                <img src={country.flags.png} />
                <p>{country.name.common}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Main;

// countries.map((country) => {
//   return (
//     <div className="card">
//       <img src={country.flags.png} />
//       <p>{country.name.common}</p>
//     </div>
//   );
// })
