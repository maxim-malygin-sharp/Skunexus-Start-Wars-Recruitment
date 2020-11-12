import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Planets.css";

import Header from "../Header";
import PlanetModal from "../PlanetModal";
import Preloader from "../Preloader";
import Grid from "../Grid";

import {
  getPlanets,
  getPlanetsList,
  setCurrentPlanet,
  getTotalCount,
  getRowsPerPage,
  getCurrentPage,
  setCurrentPage,
} from "../../store/planetsReducer/planetsReducer";

import { getEntityId } from "../../utils/helpers";

function Planets({ isResidents, isFilms }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const values = useSelector(getPlanetsList);
  const totalCount = useSelector(getTotalCount);
  const rowsPerPage = useSelector(getRowsPerPage);
  const currentPage = useSelector(getCurrentPage);
  const [isShowModal, setIsShowModal] = useState(false);
  
  const firstPage = () => dispatch(setCurrentPage(1));
  const nextPage = () => dispatch(setCurrentPage(currentPage + 1));
  const prevPage = () => dispatch(setCurrentPage(currentPage - 1));
  const lastPage = () => dispatch(setCurrentPage(Math.ceil(totalCount / rowsPerPage)));

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

      {isShowModal && <PlanetModal onClose={() => setIsShowModal(false)} />}

      <button disabled={currentPage === 1} onClick={firstPage}>
        {"<<"}
      </button>
      <button disabled={currentPage === 1} onClick={prevPage}>
        {"<"}
      </button>
      <button
        disabled={(currentPage + 1) * rowsPerPage > totalCount}
        onClick={nextPage}
      >
        {">"}
      </button>
      <button
        disabled={(currentPage + 1) * rowsPerPage > totalCount}
        onClick={lastPage}
      >
        {">>"}
      </button>
    </div>
  );
}

export default Planets;
