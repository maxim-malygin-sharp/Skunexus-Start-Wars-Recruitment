import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./Planets.css";

import Header from "../Header";
import PlanetModal from "../PlanetModal";
import Preloader from "../Preloader";
import Grid from "../Grid";

import {
  getPlanets,
  getPlanetsList,
  setCurrentPlanet,
  getCurrentPage,
} from "../../store/planetsReducer/planetsReducer";

import { getEntityId } from "../../utils/helpers";
import Pagination from "../Pagination/Pagination";

function Planets({ isResidents, isFilms }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const values = useSelector(getPlanetsList);
  const currentPage = useSelector(getCurrentPage);
  const [isShowModal, setIsShowModal] = useState(false);
  const closeModal = () => setIsShowModal(false)

  useEffect(() => dispatch(getPlanets(currentPage)), [currentPage]);

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
    setIsShowModal(true);
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
      {values === null ? <Preloader /> : <Grid data={data} />}

      {isShowModal && <PlanetModal onClose={closeModal} />}

      <Pagination currentPage={currentPage} />
    </div>
  );
}

export default Planets;

Planets.propTypes = {
  isResidents: PropTypes.bool,
  isFilms: PropTypes.bool,
};
