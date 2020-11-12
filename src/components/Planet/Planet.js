import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getPlanet,
  getPlanetInfo,
} from "../../store/planetsReducer/planetsReducer";
import Header from '../Header';
import './Planet.css';

import { useGetEntities } from "../../utils/useGetEntities";

function Planet() {
  const dispatch = useDispatch();
  const planetId = useParams().id;
  const planetInfo = useSelector(getPlanetInfo);
  const residents = useGetEntities(planetInfo ? planetInfo.residents : []);
  const films = useGetEntities(planetInfo ? planetInfo.films : []);

  if (planetInfo === null) {
    dispatch(getPlanet(planetId));
    return null;
  }

  if (
    (residents === null || films === null) &&
    planetInfo.residents.length !== 0
  ) {
    return null;
  }

  return (
    <div>
      <Header>{`About ${planetInfo.name}`}</Header>
      <div className="planet">
        <p>{`rotation_period: ${planetInfo.rotation_period}`}</p>
        <p>{`orbital_period: ${planetInfo.orbital_period}`}</p>
        <p>{`diameter: ${planetInfo.diameter}`}</p>
        <p>{`climate: ${planetInfo.climate}`}</p>
        <p>{`gravity: ${planetInfo.gravity}`}</p>
        <p>{`terrain: ${planetInfo.terrain}`}</p>
        <p>{`surface_water: ${planetInfo.surface_water}`}</p>
        <p>{`population: ${planetInfo.population}`}</p>
        <p>
          {`films: ${films?.map((film) => film.title).join(", ")}` ?? "no films"}
        </p>
        <p>
          {`residents: ${
            residents?.map((resident) => resident.name).join(", ") ??
            "no residents"
          }`}
        </p>
      </div>
    </div>
  );
}

export default Planet;
