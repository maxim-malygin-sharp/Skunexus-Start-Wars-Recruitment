import Planets from "../components/Planets";
import Planet from "../components/Planet";
import PlanetModal from "../components/PlanetModal";
import Residents from "../components/Residents";
import Films from "../components/Films";

export const routes = [
  {
    path: "/",
    exact: true,
    Component: Planets,
    // props: { isResidents: true, isFilms: true },
  },
  {
    path: "/Residents/:id",
    exact: false,
    Component: Residents,
  },
  {
    path: "/Films/:id",
    exact: false,
    Component: Films,
  },
  {
    path: "/Planet/:id",
    exact: false,
    Component: Planet,
  },
  {
    path: "/Modal",
    exact: true,
    Component: PlanetModal,
  },
];
