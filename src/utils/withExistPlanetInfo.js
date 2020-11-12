import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Preloader from "../components/Preloader/Preloader";

import {
  getPlanet,
  getPlanetInfo,
} from "../store/planetsReducer/planetsReducer";

export const WithExistPlanetInfo = (Component) => {
  const IsExistPlanetInfoComponent = (props) => {
    const planetId = useParams().id;
    const dispatch = useDispatch();
    const planetInfo = useSelector(getPlanetInfo);
    
    if (planetInfo === null) {
      dispatch(getPlanet(planetId));
      return <Preloader />;
    }
    return <Component {...props} planetInfo={planetInfo} />;
  };

  return IsExistPlanetInfoComponent;
};
