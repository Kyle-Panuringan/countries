import { CgClose } from "react-icons/cg";
import { Country } from "../../App";
import "./modal.scss";

interface Props {
  countryData: Country | null;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ countryData, setIsModal }: Props) => {
  return (
    <div id="modal">
      <div className="modalBox">
        <div className="modalBoxInfo">
          <img src={countryData?.flags.svg} />
          <div className="modalTable">
            <button className="modalClose" onClick={() => setIsModal(false)}>
              <CgClose />
            </button>
            <table>
              <caption>
                <h2>{countryData?.name.common}</h2>
              </caption>
              <tbody>
                <tr>
                  <th>Region</th>
                  <td>{countryData?.region}</td>
                </tr>
                <tr>
                  <th>Capital</th>
                  <td>
                    {countryData && "capital" in countryData
                      ? countryData?.capital.toString()
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <th>Languages</th>
                  <td>
                    {countryData?.languages &&
                      Object.values(countryData?.languages)
                        .map((language) => language)
                        .join(", ")}
                  </td>
                </tr>
                <tr>
                  <th>Currency</th>
                  <td>
                    {countryData?.currencies &&
                      Object.values(countryData.currencies).map(
                        ({ symbol }) => symbol
                      )}
                  </td>
                </tr>
                <tr>
                  <th>Population</th>
                  <td>{countryData?.population.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>

            <div className="modalButtons">
              <button>View Google Map</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
