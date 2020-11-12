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

  if (values === null && planetInfo.films.length !== 0) {
    return <Preloader />;
  }

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
    actions: [{ label: "Back", action: () => history.push("/") }],
  };

  return (
    <div className="App">
      <Header>{`Films with ${planetInfo.name}`}</Header>
      <Grid data={data} />
    </div>
  );
}

export default withExistPlanetInfo(Films);
