import "./navbar.scss";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import logo from "../../assets/logo.png";
import logoMobile from "../../assets/logoMobile.png";
import { useState } from "react";

interface Props {
  sortName: () => void;
  sortPopulation: () => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  isSort: {
    sortNameAscend: boolean;
    sortPopulationAscend: boolean;
    sortNameSelected: boolean;
    sortPopulationSelected: boolean;
  };
}

const Navbar = ({
  sortName,
  sortPopulation,
  setSearch,
  setRegion,
  isSort,
}: Props) => {
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
  const [hamburger, setHamburger] = useState(true);

  return (
    <div id="navbar">
      <div id="navbarBase">
        {/* <img src={logoMobile} id="logoMobile" /> */}
        <img src={logo} id="logo" />

        <div id="navbarSearchHamburger">
          <input
            type="text"
            placeholder="Search...."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setHamburger(!hamburger)}>
            {hamburger ? <GiHamburgerMenu /> : <CgClose />}
          </button>
        </div>

        <div className={`navbarFilters ${!hamburger && "active"}`}>
          <select id="region" onChange={(e) => setRegion(e.target.value)}>
            <option disabled>-- Select a region --</option>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>

          <div className="navbarButtons">
            <button type="button" id="buttonName" onClick={sortName}>
              Name {isSort.sortNameSelected && nameIcon}
            </button>
            <button
              type="button"
              id="buttonPopulation"
              onClick={sortPopulation}
            >
              Population {isSort.sortPopulationSelected && populationIcon}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
