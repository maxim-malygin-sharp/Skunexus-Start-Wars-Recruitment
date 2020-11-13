import React from 'react';
import "./Residents.css";
import Header from "../Header";
import Grid from "../Grid";
import Preloader from "../Preloader/Preloader";

import { useGetEntities } from "../../hooks/useGetEntities";
import { WithExistPlanetInfo } from "../../utils/withExistPlanetInfo";

function Residents({ planetInfo }) {
  const values = useGetEntities(planetInfo.residents);

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
      {(values === null && planetInfo.residents.length !== 0) ? <Preloader /> : <Grid data={data} />}
      
    </div>
  );
}

export default WithExistPlanetInfo(Residents);
