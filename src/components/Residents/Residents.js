import { useHistory } from "react-router-dom";

import "./Residents.css";
import Header from "../Header";
import Grid from "../Grid";
import Preloader from "../Preloader/Preloader";

import { useGetEntities } from "../../utils/useGetEntities";
import { withExistPlanetInfo } from "../../utils/withExistPlanetInfo";

function Residents({ planetInfo }) {
  const history = useHistory();
  const values = useGetEntities(planetInfo.residents);

  if (values === null && planetInfo.residents.length !== 0) {
    return <Preloader />;
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
    ],
    values: values ?? [],
  };

  return (
    <div className="App">
      <Header>{`Resident of ${planetInfo.name}`}</Header>
      <Grid data={data} />
    </div>
  );
}

export default withExistPlanetInfo(Residents);
