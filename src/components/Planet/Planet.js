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
    <>
      <Header>{`About ${planetInfo.name}`}</Header>
      <section className="container">
        <div className="planet">
          <p className="planet__item">
            <span className="planet__label">Rotation period</span>
            <span className="planet__value">{planetInfo.rotation_period}</span>
          </p>
          <p className="planet__item">
            <span className="planet__label">Orbital period</span>
            <span className="planet__value">{planetInfo.orbital_period}</span>
          </p>
          <p className="planet__item">
            <span className="planet__label">Diameter</span>
            <span className="planet__value">{planetInfo.diameter}</span>
          </p>
          <p className="planet__item">
            <span className="planet__label">Climate</span>
            <span className="planet__value">{`climate: ${planetInfo.climate}`}</span>
          </p>
          <p className="planet__item">
            <span className="planet__label">Gravity</span>
            <span className="planet__value">{planetInfo.gravity}</span>
          </p>
          <p className="planet__item">
            <span className="planet__label">Terrain</span>
            <span className="planet__value">{planetInfo.terrain}</span>
          </p>
          <p className="planet__item">
            <span className="planet__label">Surface water</span>
            <span className="planet__value">{planetInfo.surface_water}</span>
          </p>
          <p className="planet__item">
            <span className="planet__label">Population</span>
            <span className="planet__value">{planetInfo.population}</span>
          </p>
          <p className="planet__item">
            <span className="planet__label">Films</span>
            <span className="planet__value">
              {films?.map((film, i) => <i key={`film${i}`} className="planet__tag">{ film.title }</i>) ?? "no films" }
            </span>
          </p>
          <p className="planet__item">
            <span className="planet__label">Residents</span>
            <span className="planet__value">
              {residents?.map((resident, i) => <i key={`resident${i}`} className="planet__tag">{resident.name}</i>) ?? "no residents" }
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

export default Planet;
