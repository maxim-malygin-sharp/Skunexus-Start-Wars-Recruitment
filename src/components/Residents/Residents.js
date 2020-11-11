import { useDispatch, useSelector } from "react-redux";

import "./Residents.css";

import Grid from "../Grid";

import { useGetEntities } from "../../utils/useGetEntities";
import {
  getPlanet,
  getPlanetInfo,
} from "../../store/planetsReducer/planetsReducer";
import { useHistory, useParams } from "react-router-dom";

function Residents() {
  const history = useHistory();
  const dispatch = useDispatch();
  const planetId = useParams().id;
  const planetInfo = useSelector(getPlanetInfo);
  const values = useGetEntities(planetInfo ? planetInfo.residents : []);

  if (planetInfo === null) {
    dispatch(getPlanet(planetId));
    return null;
  }

  if (values === null && planetInfo.residents.length !== 0) {
    return null;
  }

  const data = {
    header: [
      "name",
      "height",
      "mass",
      "hair_color",
      "skin_color",
      "eye_color",
      "birth_year",
      "gender",
      // "homeworld",
    ],
    values: values ?? [],
    actions: [{ label: "Back", action: () => history.push("/") }],
  };

  return (
    <div className="App">
      <h1>{`Resident of ${planetInfo.name}`}</h1>
      <Grid data={data} />
    </div>
  );
}

export default Residents;
