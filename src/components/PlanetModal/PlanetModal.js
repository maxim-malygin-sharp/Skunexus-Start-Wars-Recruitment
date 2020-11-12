import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './Modal.css';
import Header from '../Header';

import { getPlanetInfo } from "../../store/planetsReducer/planetsReducer";

function PlanetModal() {
  const history = useHistory();
  const planetInfo = useSelector(getPlanetInfo);

  const defaultValues = {
    name: planetInfo.name,
    rotation_period: planetInfo.rotation_period,
    orbital_period: planetInfo.orbital_period,
    diameter: planetInfo.diameter,
    climate: planetInfo.climate,
    gravity: planetInfo.gravity,
    terrain: planetInfo.terrain,
    surface_water: planetInfo.surface_water,
  };
  const { handleSubmit, register } = useForm({
    defaultValues,
  });
  const onSubmit = (props) => {
    console.log(props);
    history.push("/");
    console.log(Math.random());
    alert(Math.ceil(Math.random()) ? "Success" : "Error");
  };
  return (
    <>
    <Header>Planet Database</Header>
    <div class="modal">
      <div className="modal__box">
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input
        name="name"
        ref={register}
        required
        placeholder="Enter planet name"
      />
      <input
        name="rotation_period"
        ref={register}
        required
        placeholder="Enter planet's rotation_period"
      />
      <input
        name="orbital_period"
        ref={register}
        required
        placeholder="Enter planet's orbital_period"
      />
      <input
        name="diameter"
        ref={register}
        required
        placeholder="Enter planet's diameter"
      />
      <input
        name="climate"
        ref={register}
        required
        placeholder="Enter planet's climate"
      />
      <input
        name="gravity"
        ref={register}
        required
        placeholder="Enter planet's gravity"
      />
      <input
        name="terrain"
        ref={register}
        required
        placeholder="Enter planet's terrain"
      />
      <input
        name="surface_water"
        ref={register}
        required
        placeholder="Enter planet's surface_water"
      />
      <button type="submit" class="modal__btn">Submit</button>
    </form>
    </div>
    </div>
    </>
  );
}

export default PlanetModal;
