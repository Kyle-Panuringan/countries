import "./navbar.scss";
import { TiArrowSortedUp } from "react-icons/ti";
import logo from "../../assets/logo.png";

const Navbar = () => {
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
          <button type="button" id="buttonName">
            Name <TiArrowSortedUp />
          </button>
          <button type="button" id="buttonPopulation">
            Population <TiArrowSortedUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
