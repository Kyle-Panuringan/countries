import { Country } from "../../App";
import "./main.scss";

interface Props {
  countries: Country[];
}

const Main = ({ countries }: Props) => {
  return (
    <div id="main">
      <div className="grid">
        {countries.map((country) => {
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
