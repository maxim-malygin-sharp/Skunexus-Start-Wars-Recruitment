import { useHistory } from "react-router-dom";

import "./Films.css";
import Grid from "../Grid";
import Header from "../Header";
import Preloader from "../Preloader/Preloader";

import { useGetEntities } from "../../utils/useGetEntities";
import { withExistPlanetInfo } from "../../utils/withExistPlanetInfo";

function Films({ planetInfo }) {
  const history = useHistory();
  const values = useGetEntities(planetInfo.films);

  const data = {
    header: [
      "title",
      "episode_id",
      "opening_crawl",
      "director",
      "producer",
      "release_date",
    ],
    values: values ?? [],
  };

  return (
    <div className="App">
      <Header>{`Films with ${planetInfo.name}`}</Header>
      {(values === null && planetInfo.films.length !== 0) ? <Preloader /> : <Grid data={data} />}
    </div>
  );
}

export default withExistPlanetInfo(Films);
