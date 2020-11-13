import React from 'react';
import "./Planet.css";

import Header from "../Header";
import Preloader from "../Preloader/Preloader";

import { useGetEntities } from "../../hooks/useGetEntities";
import { WithExistPlanetInfo } from "../../utils/withExistPlanetInfo";

function Planet({ planetInfo }) {
  const films = useGetEntities(planetInfo.films);
  const residents = useGetEntities(planetInfo.residents);

  const data = [
    { label: "Rotation period", value: planetInfo.rotation_period },
    { label: "Orbital period", value: planetInfo.orbital_period },
    { label: "Diameter", value: planetInfo.diameter },
    { label: "Climate", value: planetInfo.climate },
    { label: "Gravity", value: planetInfo.gravity },
    { label: "Terrain", value: planetInfo.terrain },
    { label: "Surface water", value: planetInfo.surface_water },
    { label: "Population", value: planetInfo.population },
    {
      label: "Films",
      value:
        films?.map((film, i) => (
          <i key={`film${i}`} className="planet__tag">
            {film.title}
          </i>
        )) ?? "no films",
    },
    {
      label: "Residents",
      value:
        residents?.map((resident, i) => (
          <i key={`resident${i}`} className="planet__tag">
            {resident.name}
          </i>
        )) ?? "no residents",
    },
  ];

  return (
    <>
      <Header>{`About ${planetInfo.name}`}</Header>
      {(residents === null || films === null) &&
      planetInfo.residents.length !== 0 &&
      planetInfo.films.length !== 0 ? (
        <Preloader />
      ) : (
        <section className="container">
          <div className="planet">
            {data.map((el) => (
              <p className="planet__item">
                <span className="planet__label">{el.label}</span>
                <span className="planet__value">{el.value}</span>
              </p>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default WithExistPlanetInfo(Planet);
