import "./navbar.scss";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import logo from "../../assets/logo.png";

interface Props {
  sortName: () => void;
  sortPopulation: () => void;
  isSort: {
    sortNameAscend: boolean;
    sortPopulationAscend: boolean;
    sortNameSelected: boolean;
    sortPopulationSelected: boolean;
  };
}

const Navbar = ({ sortName, sortPopulation, isSort }: Props) => {
  const nameIcon = isSort.sortNameAscend ? (
    <TiArrowSortedUp />
  ) : (
    <TiArrowSortedDown />
  );
  const populationIcon = isSort.sortPopulationAscend ? (
    <TiArrowSortedUp />
  ) : (
    <TiArrowSortedDown />
  );

  return (
    <div id="navbar">
      <div id="navbarBase">
        <img src={logo} />

        <input type="text" />

        <select>
          <option value="Test">All</option>
          <option value="Test">Test</option>
          <option value="Test">Test</option>
        </select>

        <div className="navbarButtons">
          <button type="button" id="buttonName" onClick={sortName}>
            Name {isSort.sortNameSelected && nameIcon}
          </button>
          <button type="button" id="buttonPopulation" onClick={sortPopulation}>
            Population {isSort.sortPopulationSelected && populationIcon}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
