import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Header from '../Header';

import "./Films.css";

import Grid from "../Grid";

import { useGetEntities } from "../../utils/useGetEntities";
import {
  getPlanet,
  getPlanetInfo,
} from "../../store/planetsReducer/planetsReducer";

function Films() {
  const history = useHistory();
  const dispatch = useDispatch();
  const planetId = useParams().id;
  const planetInfo = useSelector(getPlanetInfo);
  const values = useGetEntities(planetInfo ? planetInfo.films : []);

  if (planetInfo === null) {
    dispatch(getPlanet(planetId));
    return null;
  }

  if (values === null && planetInfo.films.length !== 0) {
    return null;
  }

  const data = {
    header: [
      "title",
      "episode_id",
      // "opening_crawl",
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

export default Films;
