import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from '../Header';
import PlanetModal from '../PlanetModal';
import "./Planets.css";

import Grid from "../Grid";

import {
  getPlanets,
  getPlanetsList,
  setCurrentPlanet,
} from "../../store/planetsReducer/planetsReducer";
import { useHistory } from "react-router-dom";
import { getEntityId } from "../../utils/helpers";

function Planets({ isResidents, isFilms }) {
  console.log(isResidents, isFilms);
  const history = useHistory();
  const dispatch = useDispatch();
  const values = useSelector(getPlanetsList);
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => values === null && dispatch(getPlanets()), []);

  if (values === null) {
    return null;
  }

  const setPlanet = (planet) => dispatch(setCurrentPlanet(planet));

  const redirectFilms = (planet) => {
    setPlanet(planet);
    history.push(`Films/${getEntityId(planet.url)}`);
  };

  const redirectResidents = (planet) => {
    setPlanet(planet);
    history.push(`Residents/${getEntityId(planet.url)}`);
  };

  const redirectPlanet = (planet) => {
    setPlanet(planet);
    history.push(`Planet/${getEntityId(planet.url)}`);
  };

  const openModal = (planet) => {
    setPlanet(planet);
    setIsShowModal(true)
    // history.push("Modal");
  };

  const data = {
    header: [
      "name",
      "rotation_period",
      "orbital_period",
      "diameter",
      "climate",
      "gravity",
      "terrain",
      "surface_water",
      "population",
    ],
    values,
    actions: [
      { label: "Go to Films", action: redirectFilms },
      { label: "Go to Residents", action: redirectResidents },
      { label: "Go to Planet detail", action: redirectPlanet },
      { label: "Edit", action: openModal },
    ],
  };
  if (isResidents) {
    data.header.push("residents");
    data.values = data.values.map((value) => ({
      ...value,
      residents: value.residents.length,
    }));
  }
  if (isFilms) {
    data.header.push("films");
    data.values = data.values.map((value) => ({
      ...value,
      films: value.films.length,
    }));
  }
  return (
    <div className="App">
      <Header>Planet Database</Header>
      <Grid data={data} />
      {isShowModal &&
      <PlanetModal 
        onClose={() => setIsShowModal(false)}
      />}
    </div>
  );
}

export default Planets;
