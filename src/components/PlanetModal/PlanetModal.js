import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './Modal.css';
import MultiSelect  from '../Multiselect';

import { getPlanetInfo } from "../../store/planetsReducer/planetsReducer";

function PlanetModal({ onClose }) {
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
  const { handleSubmit, register, control } = useForm({
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
    <div className="modal">
      <div className="modal__box">
        <button className="modal__close" onClick={onClose}>
          <svg x="0px" y="0px" viewBox="0 0 492 492">
            <path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
              c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
              c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
              L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
              c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
              c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
              c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"/>
          </svg>
        </button>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            type="text"
            name="name"
            ref={register}
            required
            placeholder="Enter planet name"
          />
          <input
            type="number"
            name="rotation_period"
            ref={register}
            required
            placeholder="Enter planet's rotation_period"
          />
          <input
            type="number"
            name="orbital_period"
            ref={register}
            required
            placeholder="Enter planet's orbital_period"
          />
          <input
            type="number"
            name="diameter"
            ref={register}
            required
            placeholder="Enter planet's diameter"
          />
          <input
            type="text"
            name="climate"
            ref={register}
            required
            placeholder="Enter planet's climate"
          />
          <input
            type="text"
            name="gravity"
            ref={register}
            required
            placeholder="Enter planet's gravity"
          />
          
          <Controller as={
            // <input
            //   type="text"
            //   required
            //   placeholder="Enter planet's terrain"
            // />
            <MultiSelect placeholder="Enter planet's terrain" />
          } name="terrain" control={control} />
          <input
            type="number" 
            name="surface_water"
            ref={register}
            required
            placeholder="Enter planet's surface_water"
          />
          <button type="submit" className="modal__btn">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default PlanetModal;
